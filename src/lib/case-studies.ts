import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { CaseStudy, CaseStudyMeta } from "@/types/case-study";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

function parseCaseStudyFile(filename: string): CaseStudy | null {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(CASE_STUDIES_DIR, filename);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  // Validate required fields
  if (!data.title || !data.coverImage) {
    console.warn(
      `[case-studies] Skipping "${filename}": missing required frontmatter fields (title, coverImage)`
    );
    return null;
  }

  return {
    slug,
    title: data.title as string,
    tagline: (data.tagline as string) ?? "",
    coverImage: data.coverImage as string,
    order: typeof data.order === "number" ? data.order : 999,
    content,
  };
}

export function getCaseStudies(): CaseStudyMeta[] {
  const files = fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".md"));

  const studies: CaseStudyMeta[] = [];

  for (const filename of files) {
    const study = parseCaseStudyFile(filename);
    if (study) {
      // Return only meta fields (no content)
      const { content: _content, ...meta } = study;
      studies.push(meta);
    }
  }

  // Sort by order ascending
  return studies.sort((a, b) => a.order - b.order);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const filename = `${slug}.md`;
  const filePath = path.join(CASE_STUDIES_DIR, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parseCaseStudyFile(filename);
}
