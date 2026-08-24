import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, Download, CheckCircle2, MapPin, ArrowUpRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  organisation: z.string().trim().min(2, "Please enter your organisation").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  opportunity: z.string().trim().min(2, "Please enter the opportunity or role").max(150),
  message: z.string().trim().min(10, "Please share a short message").max(1500),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
    reset();
  };

  const fieldCls =
    "w-full bg-paper border border-border rounded-md py-3 px-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all";
  const labelCls =
    "text-[11px] uppercase font-semibold tracking-widest text-muted-foreground mb-2 block";
  const errCls = "text-[11px] mt-1.5 text-red-400";

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mt-4 leading-tight text-balance">
            Discuss a role where Adeyemi can contribute with reliability and range.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Open to permanent opportunities across the United Kingdom in security operations,
            customer service, business support, warehouse safety and front-of-house leadership.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <a
              href="mailto:adeyemif.t.y@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-lg border border-border bg-surface hover:border-primary/40 transition-all"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Email
                </div>
                <div className="text-sm font-semibold truncate">adeyemif.t.y@gmail.com</div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </a>

            <a
              href="https://linkedin.com/in/adeyemianibi"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 rounded-lg border border-border bg-surface hover:border-primary/40 transition-all"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Linkedin size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  LinkedIn
                </div>
                <div className="text-sm font-semibold truncate">/in/adeyemianibi</div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </a>

            <div className="flex items-center gap-4 p-5 rounded-lg border border-border bg-surface">
              <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Based in
                </div>
                <div className="text-sm font-semibold">London, United Kingdom</div>
              </div>
            </div>

            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-lg border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary/15 transition-all"
            >
              <Download size={14} /> Download Full CV
            </a>
          </div>

          <div className="lg:col-span-3 rounded-lg border border-border bg-surface p-6 md:p-10 shadow-[0_24px_70px_-55px_rgba(23,25,31,0.55)]">
            {sent ? (
              <div className="text-center py-16">
                <div className="grid size-14 mx-auto place-items-center rounded-full bg-primary/15 text-primary mb-6">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-display font-extrabold mb-3">Message received.</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Thank you for reaching out. Adeyemi will respond as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls} htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      className={fieldCls}
                      placeholder="Your full name"
                      {...register("name")}
                    />
                    {errors.name && <p className={errCls}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="organisation">
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      className={fieldCls}
                      placeholder="Company name"
                      {...register("organisation")}
                    />
                    {errors.organisation && <p className={errCls}>{errors.organisation.message}</p>}
                  </div>
                </div>
                <div>
                  <label className={labelCls} htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={fieldCls}
                    placeholder="name@company.com"
                    {...register("email")}
                  />
                  {errors.email && <p className={errCls}>{errors.email.message}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="opportunity">
                    Opportunity or job title
                  </label>
                  <input
                    id="opportunity"
                    className={fieldCls}
                    placeholder="e.g. Store Supervisor"
                    {...register("opportunity")}
                  />
                  {errors.opportunity && <p className={errCls}>{errors.opportunity.message}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${fieldCls} resize-none`}
                    placeholder="A short note about the role or opportunity."
                    {...register("message")}
                  />
                  {errors.message && <p className={errCls}>{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 font-bold rounded-md uppercase tracking-widest text-sm hover:bg-primary/90 transition-all disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
