import { copyFile, mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function copyIfExists(source, target) {
  if (!(await exists(source))) return;
  await mkdir(dirname(target), { recursive: true });
  await copyFile(source, target);
}

if (!(await exists(clientDir))) {
  throw new Error(`GitHub Pages build failed: ${clientDir} does not exist.`);
}

async function listHtml(dir) {
  const out = [];
  async function walk(d) {
    const entries = await readdir(d, { withFileTypes: true });
    for (const e of entries) {
      const p = join(d, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.name.endsWith(".html")) out.push(p);
    }
  }
  await walk(dir);
  return out;
}

const htmlFiles = await listHtml(clientDir);
console.log("HTML files emitted:");
for (const f of htmlFiles) console.log(" -", relative(clientDir, f));

// Locate root index.html (flat or nested under /index/)
const rootCandidates = [
  join(clientDir, "index.html"),
  join(clientDir, "index", "index.html"),
];
let rootIndex = rootCandidates.find((p) => htmlFiles.includes(p));
if (!rootIndex) {
  throw new Error(
    `GitHub Pages build failed: no root HTML file found in ${clientDir}. ` +
      `Checked: ${rootCandidates.join(", ")}`,
  );
}
console.log("Root entry HTML:", relative(clientDir, rootIndex));

// Ensure dist/client/index.html exists (GitHub Pages requires it at the root).
if (rootIndex !== join(clientDir, "index.html")) {
  await copyFile(rootIndex, join(clientDir, "index.html"));
}

// Flatten nested route output: dist/client/about/index.html is already
// the right shape for GitHub Pages, so we keep nested directories. But if
// TanStack emitted dist/client/about.html (flat), GH Pages also serves it.
// Nothing to do for those.

// SPA fallback: copy the 404 prerender (or the index) to dist/client/404.html.
const fallbackCandidates = [
  join(clientDir, "404.html"),
  join(clientDir, "404", "index.html"),
];
const fallback = fallbackCandidates.find((p) => htmlFiles.includes(p));
if (fallback && fallback !== join(clientDir, "404.html")) {
  await copyFile(fallback, join(clientDir, "404.html"));
} else if (!fallback) {
  await copyFile(join(clientDir, "index.html"), join(clientDir, "404.html"));
}

await writeFile(join(clientDir, ".nojekyll"), "");
await rm(join(process.cwd(), "dist", "server"), { recursive: true, force: true });

console.log("GitHub Pages artifact ready at dist/client");
