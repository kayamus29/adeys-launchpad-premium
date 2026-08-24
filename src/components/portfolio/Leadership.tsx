import { Reveal } from "./Reveal";

const pillars = [
  {
    n: "01",
    title: "Command calm under pressure",
    body: "Keeps incidents, complaints and operational pressure controlled through calm communication.",
  },
  {
    n: "02",
    title: "Develop people and standards",
    body: "Has trained new colleagues and security staff on procedures, systems and professional expectations.",
  },
  {
    n: "03",
    title: "Document what matters",
    body: "Understands reports, handovers, CRM notes, incident logs and compliance records as part of the work.",
  },
  {
    n: "04",
    title: "Think like a manager",
    body: "Connects customer experience, safety, team coverage, stock, revenue and process improvement.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Leadership Potential
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6 leading-tight">
            Prepared for roles with responsibility, not just tasks.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Adeyemi's strongest CV signals are supervisory readiness, training exposure and calm
            operational judgement. He has already handled access control, shift awareness, colleague
            training, customer pressure, cash accuracy and safety responsibilities.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 60}>
              <div className="h-full p-6 md:p-8 bg-paper border border-border rounded-md hover:border-primary/40 transition-all">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-bold italic mb-6">
                  {p.n}
                </div>
                <h3 className="font-display font-bold mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20 text-center">
          <p className="text-lg md:text-xl font-display italic text-muted-foreground max-w-2xl mx-auto">
            Reliable organisations need people who can stay composed when the plan changes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
