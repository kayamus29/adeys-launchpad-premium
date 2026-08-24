import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Observe",
    body: "Read the environment, the people involved and the immediate risk.",
  },
  {
    n: "02",
    title: "Clarify",
    body: "Confirm the facts, the procedure, the customer need and the escalation route.",
  },
  {
    n: "03",
    title: "Act",
    body: "Take the safest practical step within policy, service standards and level of authority.",
  },
  {
    n: "04",
    title: "Record",
    body: "Close the loop with a clear handover, log, report or customer update.",
  },
];

export function ProblemSolving() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Approach to Problem-Solving
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
            Observe. Clarify. Act. Record.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            The CVs repeatedly point to the same operating style: he does not panic, guess or ignore
            process. He gathers the facts, follows the right procedure and leaves a record that
            another person can trust.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-px bg-border border border-border rounded-md overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="h-full p-6 md:p-8 bg-paper">
                <div className="text-primary font-display font-extrabold text-3xl mb-4">
                  {s.n} <span className="text-border">/</span>{" "}
                  <span className="text-foreground">{s.title}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
