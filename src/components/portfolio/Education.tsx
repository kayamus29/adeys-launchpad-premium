import { Reveal } from "./Reveal";

const items = [
  {
    programme: "Master's Programme in Global Business Management",
    institution: "University of Roehampton, London",
    period: "2025 - 2026",
    areas: [
      "Business communication",
      "Operations management",
      "Global business",
      "Digital transformation",
      "Consumer behaviour",
      "Cybersecurity fundamentals",
    ],
    description:
      "The programme strengthens Adeyemi's management, communication, operations and digital-transformation foundation for structured organisations.",
  },
  {
    programme: "Bachelor's Degree in Transport Management",
    institution: "University of Technology, Ogbomoso, Oyo State",
    period: "2012 - 2018",
    areas: [
      "Transport operations",
      "Logistics systems",
      "Service delivery",
      "Customer complaint handling",
      "Data-informed decision-making",
      "Supply-chain understanding",
    ],
    description:
      "Foundational academic training in operations, logistics and service delivery within transport and business management contexts.",
  },
];

const certs = [
  {
    title: "Forklift Operator - B1 Counterbalance (up to 5T)",
    issuer: "Focus Training Centre / BRITTOp",
    year: "2025",
  },
  {
    title: "CCTV Operator - Public Space Surveillance",
    issuer: "Highfield Qualifications / Jovin S T Ltd",
    year: "2026",
  },
  {
    title: "Emergency First Aid at Work - Level 3",
    issuer: "Jovin S T Ltd",
    year: "2025",
  },
  {
    title: "AED and BLS with CPR - Level 2",
    issuer: "Jovin S T Ltd",
    year: "2025",
  },
  {
    title: "Diploma in Computer Engineering & Basic Networking",
    issuer: "Benilo Computer",
    year: "2012",
  },
  {
    title: "Certificate of Proficiency in Professional Website Design",
    issuer: "Magnate Muscles Limited - Web Academy",
    year: "Awarded",
  },
  {
    title: "Certificate of Participation - Wireless Generator Workshop",
    issuer: "Wonderful Productions Company, Lagos",
    year: "2007",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-16 max-w-3xl">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
            Academic depth plus role-ready licences.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {items.map((e, i) => (
            <Reveal key={e.programme} delay={i * 60}>
              <div className="h-full p-8 bg-paper border border-border rounded-md">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
                  {e.period}
                </p>
                <h3 className="font-display font-bold text-lg md:text-xl mb-2 leading-tight">
                  {e.programme}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{e.institution}</p>
                <div className="mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 mb-3">
                    Relevant Study Areas
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {e.areas.map((a) => (
                      <li
                        key={a}
                        className="text-xs text-muted-foreground bg-secondary/70 border border-border px-2.5 py-1 rounded-sm"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-8">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Professional Development
          </span>
          <h3 className="font-display font-extrabold text-2xl md:text-3xl mt-3">
            Continued learning and certification.
          </h3>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="flex items-start gap-4 p-5 bg-paper border border-border rounded-md hover:border-primary/40 transition-colors">
                <span className="inline-flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-bold">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                    {c.year}
                  </p>
                  <h4 className="font-display font-bold text-sm md:text-base leading-snug mb-1">
                    {c.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-sm text-muted-foreground italic max-w-2xl">
          Committed to continuous development across security, business support, service operations,
          safety and management.
        </p>
      </div>
    </section>
  );
}
