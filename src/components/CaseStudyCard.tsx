import Link from "next/link";
import type { CaseStudyMeta } from "@/types/case-study";

interface CaseStudyCardProps {
  caseStudy: CaseStudyMeta;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/work/${caseStudy.slug}`} className="block group">
      <div className="aspect-video bg-gray-100 rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {caseStudy.title}
      </h3>
      <p className="text-sm text-gray-500">{caseStudy.tagline}</p>
    </Link>
  );
}
