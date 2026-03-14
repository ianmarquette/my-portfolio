/**
 * TDD tests for the markdown content pipeline (case-studies.ts)
 * Run with: npx tsx src/lib/case-studies.test.ts
 */

import { getCaseStudies, getCaseStudyBySlug } from "./case-studies";

let passed = 0;
let failed = 0;

function assert(description: string, condition: boolean): void {
  if (condition) {
    console.log(`  PASS: ${description}`);
    passed++;
  } else {
    console.error(`  FAIL: ${description}`);
    failed++;
  }
}

function assertEqual<T>(description: string, actual: T, expected: T): void {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    console.log(`  PASS: ${description}`);
    passed++;
  } else {
    console.error(`  FAIL: ${description}`);
    console.error(`    Expected: ${JSON.stringify(expected)}`);
    console.error(`    Actual:   ${JSON.stringify(actual)}`);
    failed++;
  }
}

console.log("\n=== case-studies.ts tests ===\n");

// Test 1: getCaseStudies returns an array
console.log("getCaseStudies():");
const all = getCaseStudies();
assert("returns an array", Array.isArray(all));

// Test 2: getCaseStudies returns 2 items (two placeholder files)
assertEqual("returns 2 case studies", all.length, 2);

// Test 3: sorted by order ascending
assert(
  "sorted by order ascending",
  all.length >= 2 && all[0].order <= all[1].order
);

// Test 4: objects have required fields
const first = all[0];
assert("first item has slug (string)", typeof first?.slug === "string");
assert("first item has title (string)", typeof first?.title === "string");
assert("first item has tagline (string)", typeof first?.tagline === "string");
assert(
  "first item has coverImage (string)",
  typeof first?.coverImage === "string"
);
assert("first item has order (number)", typeof first?.order === "number");

// Test 5: first item by order is placeholder-project-one
assertEqual(
  "first by order is placeholder-project-one",
  first?.slug,
  "placeholder-project-one"
);

console.log("\ngetCaseStudyBySlug():");

// Test 6: valid slug returns the full case study
const found = getCaseStudyBySlug("placeholder-project-one");
assert("valid slug returns object", found !== null);
assert("returned object has title", typeof found?.title === "string");
assert("returned object has content (string)", typeof found?.content === "string");
assert("content is not empty", (found?.content?.length ?? 0) > 0);

// Test 7: invalid slug returns null
const missing = getCaseStudyBySlug("nonexistent-slug");
assertEqual("nonexistent slug returns null", missing, null);

// Test 8: objects do NOT have content in getCaseStudies results
const metaItem = all[0];
assert(
  "getCaseStudies result does not include content field",
  !("content" in metaItem)
);

console.log("\n=== Results ===");
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);

if (failed > 0) {
  process.exit(1);
}
