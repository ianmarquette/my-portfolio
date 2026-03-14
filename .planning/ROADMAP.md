# Roadmap: My Portfolio

## Overview

Three phases take this portfolio from zero to a live site recruiters can evaluate. Phase 1 scaffolds the project and delivers a working home page. Phase 2 builds out the case study system — the core of the portfolio's value. Phase 3 verifies the site holds up on every device and loads fast enough to not lose impatient visitors.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation + Home Page** - Project scaffolding, markdown pipeline, and fully functional home page
- [ ] **Phase 2: Case Studies** - Individual case study pages with rich content and navigation
- [ ] **Phase 3: Polish** - Performance verification and full responsive layout across all viewports

## Phase Details

### Phase 1: Foundation + Home Page
**Goal**: The site is live with a working home page that introduces the designer and lists their work
**Depends on**: Nothing (first phase)
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, CASE-06
**Success Criteria** (what must be TRUE):
  1. Visiting the site URL shows the designer's name, role, and tagline without any errors
  2. The home page displays a grid or list of case study entries (cover image + title)
  3. A brief about blurb and contact email link are visible on the home page
  4. A case study author can update content by editing a markdown file — no code change needed
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md — Next.js scaffold + markdown content pipeline
- [ ] 01-02-PLAN.md — Home page UI components and route wiring
- [ ] 01-03-PLAN.md — Visual verification checkpoint

### Phase 2: Case Studies
**Goal**: Each case study is a complete, navigable page that communicates the designer's thinking process
**Depends on**: Phase 1
**Requirements**: CASE-01, CASE-02, CASE-03, CASE-04, CASE-05
**Success Criteria** (what must be TRUE):
  1. Each case study has its own URL (e.g., /work/project-name)
  2. Opening a case study shows a cover image or hero visual at the top
  3. The page renders alternating text and image sections covering problem, process, final designs, and outcomes
  4. A visitor can navigate to the next or previous case study from within the page without returning to the home page
**Plans**: TBD

### Phase 3: Polish
**Goal**: The site performs well and looks correct for every visitor regardless of device or connection speed
**Depends on**: Phase 2
**Requirements**: PERF-01, RESP-01
**Success Criteria** (what must be TRUE):
  1. Pages load in under 2 seconds on a standard connection (verified by Lighthouse or equivalent)
  2. The layout is fully usable and visually intact on mobile, tablet, and desktop viewports
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation + Home Page | 1/3 | In Progress|  |
| 2. Case Studies | 0/TBD | Not started | - |
| 3. Polish | 0/TBD | Not started | - |
