import { copyFile, mkdir, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

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

if (!(await exists(join(clientDir, "index.html")))) {
  throw new Error("GitHub Pages build failed: dist/client/index.html was not generated.");
}

await copyIfExists(join(clientDir, "404", "index.html"), join(clientDir, "404.html"));

if (!(await exists(join(clientDir, "404.html")))) {
  await copyFile(join(clientDir, "index.html"), join(clientDir, "404.html"));
}

await writeFile(join(clientDir, ".nojekyll"), "");
await rm(join(process.cwd(), "dist", "server"), { recursive: true, force: true });

console.log("GitHub Pages artifact ready at dist/client");
