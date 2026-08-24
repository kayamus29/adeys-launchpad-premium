import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Security & Compliance",
    items: [
      "SIA door supervision",
      "CCTV monitoring",
      "Access control",
      "Patrol planning",
      "Incident reporting",
      "Evidence handling",
      "Fire safety",
      "Health and safety",
    ],
  },
  {
    title: "Operations Leadership",
    items: [
      "Shift briefings",
      "Team supervision",
      "Staff scheduling",
      "Opening and closing",
      "Compliance checks",
      "Training delivery",
      "Performance coaching",
      "Audit readiness",
    ],
  },
  {
    title: "Customer & Commercial Service",
    items: [
      "Front-of-house service",
      "Complaint resolution",
      "Active listening",
      "Customer support",
      "POS operation",
      "Cash handling",
      "Till reconciliation",
      "CRM records",
      "Sales support",
      "Service recovery",
    ],
  },
  {
    title: "Business & IT Support",
    items: [
      "Microsoft 365",
      "SharePoint",
      "Teams",
      "Excel reporting",
      "Power Automate basics",
      "Password resets",
      "User provisioning",
      "Ticketing concepts",
    ],
  },
  {
    title: "Warehouse & Safety",
    items: [
      "Forklift counterbalance",
      "Stock control",
      "Manual handling",
      "Equipment checks",
      "COSHH awareness",
      "PPE compliance",
      "Risk assessment",
      "Emergency response",
    ],
  },
  {
    title: "Education & Support",
    items: [
      "ICT teaching",
      "SEND awareness",
      "Safeguarding",
      "Differentiation",
      "Mentoring",
      "Record keeping",
      "Confidentiality",
      "Inclusive support",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
            A cross-functional capability map for modern service organisations.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 40}>
              <div className="h-full p-6 md:p-7 bg-surface border border-border rounded-md hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-primary" />
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider">
                    {g.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="text-xs text-muted-foreground bg-secondary/70 border border-border px-2.5 py-1 rounded-sm"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
