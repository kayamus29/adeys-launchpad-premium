import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string; decimals?: number };

const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years in security and service roles" },
  { value: 6, suffix: "", label: "Security officers supervised" },
  { value: 100, suffix: "%", label: "Compliance rating reported" },
  { value: 30, suffix: "%", label: "Incident escalation time reduced" },
  { value: 12, suffix: "", label: "Critical risk points resolved" },
  { value: 150, suffix: "+", label: "Customers supported daily" },
  { value: 99.8, suffix: "%", label: "Till reconciliation accuracy", decimals: 1 },
  { value: 4.8, suffix: "/5", label: "Customer satisfaction score", decimals: 1 },
  { value: 80, suffix: "+", label: "Inbound calls per shift" },
  { value: 4, suffix: "", label: "New team members trained" },
];

function CountUp({
  target,
  suffix,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  decimals?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(target);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(target * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="impact" className="bg-ink py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              Career Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Evidence recruiters can scan in seconds.
            </h2>
          </div>
          <p className="text-xs text-white/60 max-w-sm">
            Figures are drawn from Adeyemi's submitted role-specific CVs and consolidated here into
            one executive profile.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1.5">
              <div className="text-3xl md:text-4xl font-display font-extrabold text-accent">
                <CountUp target={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-white/60 leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
