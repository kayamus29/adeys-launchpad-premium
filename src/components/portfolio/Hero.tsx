import { useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowRight, Download, ShieldCheck, BriefcaseBusiness, ClipboardCheck } from "lucide-react";
import portraitUrl from "../../assets/portrait.png";

const credentials = [
  "SIA Door Supervision",
  "CCTV Operator",
  "First Aid",
  "Fire Marshal",
  "Forklift Counterbalance",
  "MSc Global Business Management in view",
];

export function Hero() {
  const [portraitAvailable, setPortraitAvailable] = useState(true);

  return (
    <section id="home" className="relative pt-20 md:pt-[5.5rem] pb-10 md:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-accent/35 bg-surface text-primary text-[10px] font-bold uppercase tracking-[0.18em] mb-6 rounded-full">
              <ShieldCheck size={13} />
              London-based operations professional
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.04] mb-6 text-balance">
              Security, service and business support with{" "}
              <span className="text-primary">measured operational discipline.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base text-muted-foreground leading-relaxed mb-3 max-w-2xl">
              Adeyemi Anibi brings security supervision, customer experience, operations support and
              business administration into one credible profile, backed by postgraduate study in
              Global Business Management.
            </p>
            <p className="text-sm text-muted-foreground/80 mb-6">
              Based in London. Open to structured roles where reliability, calm judgement and
              development potential matter.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-md hover:bg-primary/90 shadow-lg shadow-primary/20 ring-1 ring-accent/20 transition-all"
              >
                Review Experience <ArrowRight size={16} />
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 border border-border bg-surface font-bold text-sm rounded-md hover:bg-secondary transition-all"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative max-w-xl lg:ml-auto">
            <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-[0_30px_90px_-50px_rgba(23,25,31,0.65)]">
              <div className="bg-ink text-white p-6 md:p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                      Professional dossier
                    </p>
                    <h2 className="mt-3 text-2xl md:text-3xl font-display font-extrabold">
                      Adeyemi Anibi
                    </h2>
                    <p className="mt-2 text-sm text-white/65">
                      Security operations | Service leadership | Business support
                    </p>
                  </div>
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-white text-ink">
                    {portraitAvailable ? (
                      <img
                        src={portraitUrl}
                        alt="Adeyemi Anibi professional portrait"
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={() => setPortraitAvailable(false)}
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center font-display text-lg font-extrabold">
                        AA
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["5+", "years"],
                    ["6", "led"],
                    ["100%", "audit"],
                  ].map(([value, label]) => (
                    <div key={label} className="border border-accent/25 rounded-md p-3">
                      <p className="text-xl font-display font-extrabold text-accent">{value}</p>
                      <p className="text-[10px] uppercase tracking-widest text-white/50">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 mb-5">
                  {credentials.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-md border border-border bg-paper px-3 py-2.5 text-xs text-muted-foreground"
                    >
                      <ClipboardCheck size={14} className="text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 rounded-md border border-primary/20 bg-primary/10 p-4">
                  <BriefcaseBusiness size={20} className="text-primary shrink-0" />
                  <p className="text-sm leading-relaxed text-foreground/80">
                    Positioned for organisations that need dependable people across safety,
                    customers, systems and daily operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-2 border border-primary/20 rounded-lg translate-x-3 translate-y-3 -z-10 hidden md:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
