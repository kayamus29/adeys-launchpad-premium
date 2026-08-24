import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const path = [
  "Reliable Operations",
  "Supervisor Responsibility",
  "Team Leadership",
  "Operations Management",
];

export function CareerDirection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-14">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Career Direction
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
            Built for progression into security, service or operations leadership.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Reveal>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Adeyemi's immediate objective is to secure a permanent role where he can contribute
              across security operations, customer service, business support, warehouse safety or
              front-of-house coordination.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Over the next three to five years, he aims to progress into supervisory or operational
              leadership, with responsibility for people, standards, incident response, service
              quality and measurable performance.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="p-6 md:p-10 bg-surface border border-border rounded-md">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">
              Progression Path
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-2 flex-wrap">
              {path.map((step, i) => (
                <div key={step} className="flex items-center gap-4 md:gap-2">
                  <div
                    className={`px-4 py-3 border rounded-sm font-display font-bold text-sm md:text-base ${
                      i === path.length - 1
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-foreground bg-paper"
                    }`}
                  >
                    {step}
                  </div>
                  {i < path.length - 1 && (
                    <ArrowRight className="text-primary shrink-0" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
