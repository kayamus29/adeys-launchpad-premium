import { Reveal } from "./Reveal";

type Role = {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  contribution: string;
};

const roles: Role[] = [
  {
    title: "Security Officer / Front-of-House Security",
    org: "Well Suited Security / Nando Film and The Ashmore",
    location: "London, United Kingdom",
    period: "2025 - Present",
    bullets: [
      "Maintains a visible, reassuring presence for staff, visitors and customers in busy public-facing environments.",
      "Manages access points, ID checks, patrols, venue policies and incident response with professionalism.",
      "Produces accurate incident reports, shift handovers and escalation notes for management review.",
      "Uses conflict-management and de-escalation skills to resolve incidents calmly.",
      "Applies SIA, CCTV, first-aid, fire-safety and health-and-safety awareness in daily operations.",
    ],
    contribution:
      "A security profile grounded in visibility, judgement, documentation and service, not just presence at the door.",
  },
  {
    title: "Security Officer / Training Officer",
    org: "Harbol Security and Gym Instruction",
    location: "Osun, Nigeria",
    period: "2020 - 2025",
    bullets: [
      "Supervised a team of six security officers across a mixed-use facility.",
      "Oversaw access control, patrol planning, CCTV monitoring, lock-up and unlock procedures.",
      "Delivered training on conflict de-escalation, emergency procedures and security standards.",
      "Preserved incident scenes, completed logs and supported investigations with law enforcement.",
      "Reported a 100% compliance rating during external inspection activity.",
    ],
    contribution:
      "Demonstrated the team discipline, audit awareness and training capability expected in supervisor-track roles.",
  },
  {
    title: "Assistant Manager / Customer Service Assistant",
    org: "Towa Supermarket and Prime Beauty Salon",
    location: "Luton and London, United Kingdom",
    period: "February 2025 - October 2025",
    bullets: [
      "Supported daily operations, customer service, complaint resolution, stock activity and cash handling.",
      "Created staff schedules, supported opening and closing procedures and contributed to team coverage.",
      "Reported a 20% revenue growth contribution in one quarter by addressing operational bottlenecks.",
      "Supported approximately 150 customers daily and maintained 99.8% till reconciliation accuracy.",
      "Trained four new team members on POS systems, internal processes and customer service standards.",
    ],
    contribution:
      "Shows commercial awareness, staff coordination and customer discipline across UK service environments.",
  },
  {
    title: "Customer Support / Business and IT Support",
    org: "Justrite, Bureau of Transport and related support roles",
    location: "Nigeria and United Kingdom",
    period: "2018 - 2024",
    bullets: [
      "Handled approximately 80 inbound calls per shift with product, service and first-line troubleshooting support.",
      "Logged customer interactions in CRM tools and prepared daily reporting on call volume and recurring issues.",
      "Used Excel and Google Sheets to analyse sales trends, stock information and workflow improvements.",
      "Built transferable experience in password resets, file access support, POS troubleshooting and Microsoft 365 workflows.",
      "Maintained a reported 4.8/5 customer satisfaction score in high-volume support environments.",
    ],
    contribution:
      "Adds a digital and administrative layer to Adeyemi's operations profile, useful for modern service teams.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-16 md:mb-20 max-w-3xl">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
            A career record that connects safety, service, systems and supervision.
          </h2>
        </Reveal>

        <div className="space-y-8 md:space-y-10">
          {roles.map((r, i) => (
            <Reveal key={r.title + r.org} delay={i * 60}>
              <article className="bg-paper p-6 md:p-10 border border-border rounded-md group hover:border-primary/40 transition-all">
                <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 mb-8">
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-1 leading-tight">
                      {r.title}
                    </h3>
                    <p className="text-primary font-medium text-sm md:text-base">
                      {r.org} - {r.location}
                    </p>
                  </div>
                  <p className="shrink-0 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">
                    {r.period}
                  </p>
                </header>
                <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8 lg:gap-12">
                  <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-px w-4 bg-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <aside className="bg-secondary p-6 border-l-2 border-primary h-fit rounded-r-md">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2">
                      Key Contribution
                    </p>
                    <p className="text-sm italic text-foreground/90 leading-relaxed">
                      {r.contribution}
                    </p>
                  </aside>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
