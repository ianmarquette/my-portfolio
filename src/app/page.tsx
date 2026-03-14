import { getCaseStudies } from "@/lib/case-studies";
import { HeroSection } from "@/components/HeroSection";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const caseStudies = getCaseStudies();
  return (
    <main className="bg-white">
      <HeroSection />
      <CaseStudyGrid caseStudies={caseStudies} />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
