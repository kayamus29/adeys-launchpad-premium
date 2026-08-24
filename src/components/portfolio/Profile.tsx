import { Reveal } from "./Reveal";

const principles = [
  {
    title: "Operational judgement",
    body: "He is comfortable with incidents, access control, risk checks, escalation and accurate reporting.",
  },
  {
    title: "Service intelligence",
    body: "He carries the same calm, customer-facing discipline into retail, reception, security and support settings.",
  },
  {
    title: "Growth mindset",
    body: "He is actively building management, project, digital and compliance capability alongside practical work.",
  },
];

export function Profile() {
  return (
    <section id="profile" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-1">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Professional Profile
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
              A practical operator with the range to grow into structured leadership.
            </h2>
          </Reveal>
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Adeyemi is a London-based professional whose CVs show a rare combination of security
                operations, customer experience, operations support, warehouse safety, first-line IT
                support and teaching assistance. He has worked in environments where attention,
                compliance, calm communication and quick decision-making are essential.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                The strongest portfolio story is not one narrow job title. It is his ability to
                protect people and property, serve customers, support teams, document incidents,
                train colleagues, handle systems, and keep operations moving. That is the profile
                organisations look for when they need reliable people who can be developed.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="space-y-3">
                  <h3 className="font-display font-bold text-primary uppercase text-[11px] tracking-widest">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
