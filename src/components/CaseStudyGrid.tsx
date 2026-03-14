import type { CaseStudyMeta } from "@/types/case-study";
import { CaseStudyCard } from "@/components/CaseStudyCard";

interface CaseStudyGridProps {
  caseStudies: CaseStudyMeta[];
}

export function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
