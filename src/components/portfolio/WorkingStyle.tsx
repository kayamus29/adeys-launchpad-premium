import { Reveal } from "./Reveal";

const traits = [
  "Calm in incident-prone settings",
  "Precise with reports and handovers",
  "Professional with customers and visitors",
  "Confident with policies and escalation",
  "Collaborative with managers and colleagues",
  "Fast learner across systems and procedures",
];

export function WorkingStyle() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal>
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Working Style
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
            Calm enough for pressure. Disciplined enough for trust.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Adeyemi performs best where standards matter: secure sites, customer-facing spaces, busy
            stores, support desks and teams with clear expectations. He can work independently while
            keeping managers informed and colleagues aligned.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-3">
          {traits.map((t, i) => (
            <Reveal key={t} delay={i * 50}>
              <div className="p-5 bg-surface border border-border rounded-md hover:border-primary/40 transition-all flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
