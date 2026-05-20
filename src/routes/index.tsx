import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ShieldCheck, Flame, Wrench, GraduationCap, Siren, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-fire.jpg";
import extinguishers from "@/assets/extinguishers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Powerex Fire Protection System — Fire Safety in Vasai & Mumbai" },
      { name: "description", content: "Fire extinguishers, alarms, hydrant systems, AMC and safety training. Trusted fire protection since 2010. Serving Vasai-Virar, Mumbai & all of India." },
      { property: "og:title", content: "Powerex Fire Protection System" },
      { property: "og:description", content: "Protecting lives with reliable fire safety solutions. Call +91 91677 52444." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Flame, title: "Fire Extinguishers", desc: "ABC, CO2, foam, water, clean agent, modular & ball types." },
  { icon: Siren, title: "Fire Alarm Systems", desc: "Automatic & manual fire alarm installation and commissioning." },
  { icon: ShieldCheck, title: "Hydrant & Sprinkler", desc: "Turnkey hydrant, sprinkler & pre-action system projects." },
  { icon: Wrench, title: "Refilling & AMC", desc: "Annual maintenance contracts and on-site refilling services." },
  { icon: GraduationCap, title: "Fire Safety Training", desc: "Basic, advanced, mock drills and corporate training." },
  { icon: CheckCircle2, title: "PPE & Safety Gear", desc: "Helmets, shoes, harnesses, gloves, signage and more." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <img src={heroImg} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/30" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Flame className="h-3.5 w-3.5" /> Serving India since 2010
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Protecting lives with reliable{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                fire safety
              </span>{" "}
              solutions.
            </h1>
            <p className="mt-5 max-w-xl text-base text-secondary-foreground/80 md:text-lg">
              Powerex Fire Protection System installs, services and supplies fire equipment
              across Mumbai and India — from extinguishers to complete hydrant systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919167752444" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90">
                <Phone className="h-4 w-4" /> Call +91 91677 52444
              </a>
              <a href="https://wa.me/919167752444" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-white/20">
                <MessageCircle className="h-4 w-4" /> WhatsApp Chat
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-white/10">
                Request a Quote
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              <div><dt className="text-2xl font-bold text-primary">15+</dt><dd className="text-xs text-secondary-foreground/70">Years of service</dd></div>
              <div><dt className="text-2xl font-bold text-primary">100+</dt><dd className="text-xs text-secondary-foreground/70">Clients served</dd></div>
              <div><dt className="text-2xl font-bold text-primary">24/7</dt><dd className="text-xs text-secondary-foreground/70">Emergency support</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">What we do</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Complete fire protection, end to end.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">View all services →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us / image split */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <img src={extinguishers} alt="Range of Powerex fire extinguishers" width={1280} height={896} loading="lazy" className="rounded-xl shadow-xl" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why Powerex</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Extra power to protect against fire.</h2>
            <p className="mt-4 text-muted-foreground">
              Led by Santosh Kumar Yadav, our certified technicians stay current with the latest
              legislation and best practice. We pair top-brand equipment with honest pricing and
              prompt service.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Ethical practices", "Client-centric approach", "Prompt delivery", "24-hour assistance", "State-of-the-art tools", "Best after-sales service"].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Need fire safety, fast?</h2>
              <p className="mt-1 text-primary-foreground/90">We respond 24/7 across Mumbai and Vasai-Virar.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919167752444" className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground"><Phone className="h-4 w-4" /> Call Now</a>
              <a href="https://wa.me/919167752444" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white/15 px-5 py-3 text-sm font-semibold ring-1 ring-white/30 hover:bg-white/25"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}