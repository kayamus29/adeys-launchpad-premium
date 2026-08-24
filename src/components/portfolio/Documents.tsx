import { Reveal } from "./Reveal";
import { FileText } from "lucide-react";
import sia1 from "../../assets/cvs/A.A_Larry_SIA_New.docx.asset.json";
import sia2 from "../../assets/cvs/Adeyemi_Anibi_SIA.docx.asset.json";
import retail from "../../assets/cvs/A.Adeyemi_Cos_s.docx.asset.json";
import itap1 from "../../assets/cvs/A.Adeyemi_ITap.docx.asset.json";
import itap2 from "../../assets/cvs/A.Adeyemi_Pj.docx.asset.json";
import teaching from "../../assets/cvs/ANIBI_ADEYEMI_FATAI_Teaching_assistant.docx.asset.json";
import forklift from "../../assets/cvs/Adeyemi_Anibi_Cover_Letter_forklift_Marshal_Repaired.docx.asset.json";
import assistantMgr from "../../assets/cvs/Assistance_ManagerManager_Role.docx.asset.json";
import reception from "../../assets/cvs/Reception_Supervisor_Larry.docx.asset.json";

type Doc = {
  title: string;
  role: string;
  tag: string;
  url: string;
  filename: string;
};

const docs: Doc[] = [
  {
    title: "Duty Security Manager",
    role: "SIA Door Supervision & CCTV",
    tag: "Security",
    url: sia1.url,
    filename: sia1.original_filename,
  },
  {
    title: "SIA Security Officer",
    role: "Front-line security operations",
    tag: "Security",
    url: sia2.url,
    filename: sia2.original_filename,
  },
  {
    title: "Assistant Manager",
    role: "Retail & operations leadership",
    tag: "Management",
    url: assistantMgr.url,
    filename: assistantMgr.original_filename,
  },
  {
    title: "Reception Supervisor",
    role: "Front-of-house team leadership",
    tag: "Hospitality",
    url: reception.url,
    filename: reception.original_filename,
  },
  {
    title: "Sales Assistant",
    role: "Retail sales & customer service",
    tag: "Retail",
    url: retail.url,
    filename: retail.original_filename,
  },
  {
    title: "Business/IT Support Apprentice",
    role: "Level 3 Business Administrator",
    tag: "Business & IT",
    url: itap1.url,
    filename: itap1.original_filename,
  },
  {
    title: "Business/IT Support",
    role: "Admin & first-line IT support",
    tag: "Business & IT",
    url: itap2.url,
    filename: itap2.original_filename,
  },
  {
    title: "Teaching Assistant",
    role: "Classroom & learner support",
    tag: "Education",
    url: teaching.url,
    filename: teaching.original_filename,
  },
  {
    title: "Forklift Marshal",
    role: "Cover letter - B1 Counterbalance",
    tag: "Logistics",
    url: forklift.url,
    filename: forklift.original_filename,
  },
];

export function Documents() {
  return (
    <section id="profiles" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Professional Profiles
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight max-w-2xl">
              CV-backed role profiles, curated instead of hidden.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-sm text-muted-foreground max-w-md">
              Adeyemi shared multiple CVs for different role targets. This portfolio uses them as
              proof, then lets recruiters access the version that fits their vacancy.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-smooth"
            style={{ scrollbarWidth: "thin" }}
          >
            {docs.map((d, i) => (
              <Reveal
                key={d.filename}
                delay={i * 40}
                className="snap-start shrink-0 w-[280px] md:w-[320px]"
              >
                <article className="group h-full flex flex-col bg-surface border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
                  <div className="flex items-start justify-between mb-6">
                    <div className="size-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <FileText size={20} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2.5 py-1">
                      {d.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg leading-tight mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {d.role}
                  </p>

                  <div className="flex gap-2 pt-4 border-t border-border">
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2.5 text-xs font-bold uppercase tracking-widest border border-border rounded-md hover:bg-secondary transition-colors"
                    >
                      View
                    </a>
                    <a
                      href={d.url}
                      download={d.filename}
                      className="flex-1 text-center px-3 py-2.5 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Download
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
