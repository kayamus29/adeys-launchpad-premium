import { ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-14 border-t border-border bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="grid h-7 w-7 place-items-center rounded-sm bg-white text-ink font-display font-extrabold text-[10px]">
              AA
            </span>
            <span className="font-display font-semibold">Adeyemi Anibi</span>
          </div>
          <p className="text-sm text-white/60 max-w-md">
            Security operations, service leadership and business support professional - London,
            United Kingdom.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 md:gap-8 text-[10px] uppercase font-bold tracking-widest text-white/60">
          <a
            href="https://linkedin.com/in/adeyemianibi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:adeyemif.t.y@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
          <a href="/cv.pdf" download className="hover:text-white transition-colors">
            Download CV
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-[11px] text-white/45">
        © {year} Adeyemi Anibi. All rights reserved.
      </div>
    </footer>
  );
}
