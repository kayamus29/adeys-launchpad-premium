import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const LINKS = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Strengths" },
  { href: "#leadership", label: "Leadership" },
  { href: "#education", label: "Education" },
  { href: "#profiles", label: "Profiles" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = ["home", ...LINKS.map((l) => l.href.slice(1)), "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-4 md:top-6 inset-x-0 z-50 px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto mx-auto flex items-center gap-2 md:gap-3 max-w-fit rounded-full border border-border pl-3 pr-2 md:pl-4 md:pr-2 py-2 transition-all duration-300 ${
            scrolled
              ? "bg-surface/90 backdrop-blur-xl shadow-[0_16px_50px_-28px_rgba(23,25,31,0.45)]"
              : "bg-surface/75 backdrop-blur-md"
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-2 pr-2 md:pr-3 md:border-r md:border-border"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground ring-1 ring-accent/35 font-display font-extrabold text-[11px]">
              AA
            </span>
            <span className="hidden md:inline font-display font-semibold text-sm">
              Adeyemi Anibi
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1 text-[12px] font-medium">
            {LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-accent/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest rounded-full ring-1 ring-accent/25 hover:bg-primary/90 transition-all"
          >
            Get in touch
          </a>
          <a
            href="/cv.pdf"
            download
            aria-label="Download CV"
            className="hidden sm:inline-grid place-items-center size-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <Download size={14} />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="lg:hidden grid size-9 place-items-center rounded-full border border-border hover:bg-secondary"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden pt-24 px-4">
          <div
            className="absolute inset-0 bg-background/85 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <div className="relative mx-auto max-w-sm rounded-2xl border border-border bg-surface p-4 shadow-2xl">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary rounded-xl hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2 pt-3 border-t border-border">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full ring-1 ring-accent/25"
              >
                Get in touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-grid place-items-center size-11 rounded-full border border-border text-muted-foreground"
                aria-label="Download CV"
              >
                <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
