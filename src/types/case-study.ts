export interface CaseStudyMeta {
  slug: string;
  title: string;
  tagline: string;
  coverImage: string;
  order: number;
}

export interface CaseStudy extends CaseStudyMeta {
  content: string; // raw markdown body (used in Phase 2)
}
