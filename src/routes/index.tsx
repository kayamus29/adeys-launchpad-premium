import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Profile } from "@/components/portfolio/Profile";
import { Stats } from "@/components/portfolio/Stats";
import { Experience } from "@/components/portfolio/Experience";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Leadership } from "@/components/portfolio/Leadership";
import { ProblemSolving } from "@/components/portfolio/ProblemSolving";
import { Education } from "@/components/portfolio/Education";
import { WorkingStyle } from "@/components/portfolio/WorkingStyle";
import { Availability } from "@/components/portfolio/Availability";
import { CareerDirection } from "@/components/portfolio/CareerDirection";
import { EmployerValue } from "@/components/portfolio/EmployerValue";
import { Contact } from "@/components/portfolio/Contact";
import { Documents } from "@/components/portfolio/Documents";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Adeyemi Anibi",
          alternateName: "Larry Anibi",
          jobTitle: "Security Operations, Service Leadership and Business Support Professional",
          email: "mailto:adeyemif.t.y@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressCountry: "GB",
          },
          sameAs: ["https://linkedin.com/in/adeyemianibi"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Profile />
        <Experience />
        <Capabilities />
        <Leadership />
        <ProblemSolving />
        <Education />
        <WorkingStyle />
        <Availability />
        <CareerDirection />
        <EmployerValue />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
