import { Reveal } from "./Reveal";

const points = [
  "A security and safety mindset supported by SIA, CCTV, first-aid, fire-marshal and forklift training",
  "Customer-facing composure from retail, hospitality, call-centre and front-of-house environments",
  "Evidence of training others, supervising security staff and supporting daily team coverage",
  "Administrative and digital fluency across CRM records, Microsoft 365, Excel reporting and first-line support",
  "A postgraduate business foundation that makes him more than a task-only candidate",
];

export function EmployerValue() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <Reveal>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Employer Value
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
              What a serious organisation gets from Adeyemi.
            </h2>
          </Reveal>
          <div>
            <ul className="space-y-4 mb-10">
              {points.map((p, i) => (
                <Reveal key={p} delay={i * 60}>
                  <li className="flex gap-4 items-start p-5 bg-paper border border-border rounded-md">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-base text-foreground/90 leading-relaxed">
                      {p}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <p className="text-base md:text-lg font-display italic text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
                The portfolio now positions him for employers that value reliable judgement,
                transferable range and the capacity to grow into responsibility.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
