import { Reveal } from "./Reveal";

export function Availability() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <Reveal>
          <div className="p-8 bg-paper border border-border rounded-md h-full">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Languages
            </span>
            <h3 className="font-display font-extrabold text-2xl mt-3 mb-6">
              Fluent communication.
            </h3>
            <ul className="space-y-3">
              {["English", "Yoruba"].map((l) => (
                <li key={l} className="flex items-center gap-3 text-sm">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="p-8 bg-paper border border-border rounded-md h-full">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Availability
            </span>
            <h3 className="font-display font-extrabold text-2xl mt-3 mb-6">Ready to contribute.</h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Permanent full-time opportunities",
                "Two-week notice period where required",
                "Evenings",
                "Night shifts",
                "Rotating shifts",
                "Weekends and bank holidays",
                "Open to relocation within England",
                "Travel between work locations",
              ].map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-px w-3 bg-primary shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground italic">
              Open to long-term opportunities with organisations offering structured development and
              career progression.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
