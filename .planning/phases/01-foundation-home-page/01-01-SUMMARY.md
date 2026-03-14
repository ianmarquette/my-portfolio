---
phase: 01-foundation-home-page
plan: "01"
subsystem: infra
tags: [nextjs, tailwindcss, typescript, gray-matter, markdown]

# Dependency graph
requires: []
provides:
  - "Next.js 14 app scaffold with TypeScript, App Router, Tailwind CSS v4"
  - "getCaseStudies() — reads and returns sorted CaseStudyMeta[] from markdown files"
  - "getCaseStudyBySlug() — returns full CaseStudy with content by slug, or null"
  - "Two placeholder case study markdown files for development"
affects:
  - 01-foundation-home-page
  - 02-case-study-pages
  - 03-polish-deploy

# Tech tracking
tech-stack:
  added:
    - "next@14.2.35 — App Router framework"
    - "react@18, react-dom@18 — UI runtime"
    - "tailwindcss@4.2.1 — utility CSS (v4 CSS-native config)"
    - "@tailwindcss/postcss@4.2.1 — PostCSS plugin for Tailwind v4"
    - "gray-matter@4.0.3 — YAML frontmatter parser"
    - "tsx — TypeScript runner for tests and scripts"
  patterns:
    - "Markdown content pipeline: fs.readdirSync + gray-matter → typed TypeScript objects"
    - "Server-only lib functions (src/lib/) — never imported in client components"
    - "Slug derived from filename: strip .md extension"
    - "getCaseStudies returns CaseStudyMeta (no content); getCaseStudyBySlug returns full CaseStudy"

key-files:
  created:
    - "src/types/case-study.ts — CaseStudy and CaseStudyMeta TypeScript interfaces"
    - "src/lib/case-studies.ts — getCaseStudies() and getCaseStudyBySlug() implementations"
    - "src/lib/case-studies.test.ts — 15 TDD tests (tsx runner)"
    - "src/app/layout.tsx — Root layout with metadata"
    - "src/app/globals.css — Clean base styles (white background, system font)"
    - "src/app/page.tsx — Home page placeholder"
    - "content/case-studies/placeholder-project-one.md — Sample case study (order: 1)"
    - "content/case-studies/placeholder-project-two.md — Sample case study (order: 2)"
    - "next.config.mjs — Next.js configuration"
    - "tsconfig.json — TypeScript config with @/* path alias"
    - "postcss.config.mjs — PostCSS config for Tailwind v4"
  modified:
    - "package.json — Added scripts and all dependencies"
    - ".gitignore — Added standard Next.js ignores"

key-decisions:
  - "Used next.config.mjs instead of next.config.ts (Next.js 14 does not support .ts config files)"
  - "Adopted Tailwind CSS v4 with @tailwindcss/postcss plugin (npm installed v4.2.1, not v3)"
  - "CSS-native Tailwind config via @import tailwindcss in globals.css (v4 approach, no tailwind.config.ts needed)"
  - "TDD test runner uses npx tsx (no Jest/Vitest setup overhead for a simple pipeline test)"

patterns-established:
  - "Markdown pipeline: all content lives in content/case-studies/*.md, no code change needed to add/edit content"
  - "Required frontmatter validation: files missing title or coverImage are skipped with console.warn"
  - "Sort order: ascending by numeric order field in frontmatter"

requirements-completed:
  - CASE-06

# Metrics
duration: 5min
completed: 2026-03-14
---

# Phase 1 Plan 01: Foundation + Markdown Pipeline Summary

**Next.js 14 app scaffold with Tailwind CSS v4 and a gray-matter markdown pipeline that reads typed CaseStudy objects from flat files**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-03-14T23:11:20Z
- **Completed:** 2026-03-14T23:16:03Z
- **Tasks:** 2 (Task 1: scaffold; Task 2: markdown pipeline TDD)
- **Files modified:** 13

## Accomplishments
- Next.js 14 + TypeScript + Tailwind CSS v4 project scaffolded and building successfully
- Markdown content pipeline implemented with full TypeScript types and gray-matter parsing
- getCaseStudies() returns sorted CaseStudyMeta[]; getCaseStudyBySlug() returns full CaseStudy or null
- 15 TDD tests written and passing; adding/editing markdown files changes output without code changes (CASE-06 satisfied)

## Task Commits

Each task was committed atomically:

1. **Task 1: Scaffold Next.js 14 app with Tailwind CSS** - `1b0f286` (feat)
2. **Task 2 RED: Failing tests for markdown pipeline** - `d3c4e58` (test)
3. **Task 2 GREEN: Implement markdown content pipeline** - `b79d63a` (feat)

**Plan metadata:** (docs commit to follow)

_Note: TDD tasks have multiple commits (test RED → feat GREEN)_

## Files Created/Modified
- `src/types/case-study.ts` - CaseStudy and CaseStudyMeta TypeScript interfaces
- `src/lib/case-studies.ts` - getCaseStudies() and getCaseStudyBySlug() server-only functions
- `src/lib/case-studies.test.ts` - 15 TDD tests using tsx runner
- `src/app/layout.tsx` - Root layout with metadata (title: "Portfolio")
- `src/app/globals.css` - Clean base styles, Tailwind v4 import
- `src/app/page.tsx` - Home page placeholder
- `content/case-studies/placeholder-project-one.md` - B2B SaaS onboarding case study (order: 1)
- `content/case-studies/placeholder-project-two.md` - Design system unification case study (order: 2)
- `next.config.mjs` - Next.js config (mjs, not ts)
- `tsconfig.json` - TypeScript config with @/* alias
- `postcss.config.mjs` - PostCSS with @tailwindcss/postcss
- `package.json` - All dependencies and scripts
- `.gitignore` - Standard Next.js ignores appended

## Decisions Made
- Used `next.config.mjs` instead of `next.config.ts` — Next.js 14.2.35 doesn't support `.ts` config files; `.mjs` works identically
- Adopted Tailwind CSS v4 approach — npm resolved to v4.2.1; v4 uses CSS-native `@import "tailwindcss"` instead of a `tailwind.config.ts` file
- Installed `@tailwindcss/postcss` separately — Tailwind v4 split the PostCSS plugin into its own package
- Used `tsx` for TDD test runner — avoids Jest/Vitest setup overhead; the test file uses node:process exit codes for CI compatibility

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] next.config.ts not supported by Next.js 14**
- **Found during:** Task 1 (scaffold verification)
- **Issue:** Running `npm run build` failed with "Configuring Next.js via 'next.config.ts' is not supported"
- **Fix:** Renamed file to `next.config.mjs` and removed TypeScript type import (using JSDoc comment instead)
- **Files modified:** next.config.mjs
- **Verification:** `npm run build` succeeds
- **Committed in:** 1b0f286 (Task 1 commit)

**2. [Rule 3 - Blocking] npm cache permissions required temp cache flag**
- **Found during:** Task 1 (installing dev dependencies)
- **Issue:** npm cache directory had root-owned files, blocking installs without sudo
- **Fix:** Used `--cache /tmp/npm-cache` flag for subsequent npm installs
- **Files modified:** None (install workaround only)
- **Verification:** All packages installed successfully
- **Committed in:** n/a (tooling workaround, not code change)

**3. [Rule 3 - Blocking] Tailwind v4 requires separate @tailwindcss/postcss package**
- **Found during:** Task 1 (PostCSS config)
- **Issue:** Tailwind v4 does not expose a postcss plugin from the main package; `@tailwindcss/postcss` must be installed separately
- **Fix:** Installed `@tailwindcss/postcss`; updated postcss.config.mjs to use `"@tailwindcss/postcss": {}`; globals.css uses `@import "tailwindcss"` (v4 syntax)
- **Files modified:** postcss.config.mjs, src/app/globals.css, package.json
- **Verification:** `npm run build` compiles successfully
- **Committed in:** 1b0f286 (Task 1 commit)

---

**Total deviations:** 3 auto-fixed (1 bug, 2 blocking)
**Impact on plan:** All fixes were necessary to work with the actual installed package versions. No scope creep. Core architecture unchanged.

## Issues Encountered
- The plan specified `tailwind.config.ts` as a file to create — Tailwind v4 uses CSS-native configuration (`@import "tailwindcss"` in globals.css) and does not use a `tailwind.config.ts` file. The file was omitted; the behavior is identical.
- ESLint v9 / Next.js 14 lint step shows a warning about removed options — linting still runs and build succeeds; this is a version mismatch between `eslint-config-next@16` (designed for ESLint v9) and Next.js 14's lint runner (which uses ESLint v8 options). Non-blocking.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Next.js 14 project is building and serving pages
- Markdown pipeline is operational; getCaseStudies() and getCaseStudyBySlug() are ready to use in components
- Two placeholder case studies are available for UI development in subsequent plans
- Ready for: home page layout and case study list component (next plan in Phase 1)
- No blockers

---
*Phase: 01-foundation-home-page*
*Completed: 2026-03-14*

## Self-Check: PASSED

All required files found on disk. All task commits verified in git log.
- Files: 9/9 verified
- Commits: 3/3 verified (1b0f286, d3c4e58, b79d63a)
