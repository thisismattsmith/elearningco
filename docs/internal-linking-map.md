# Internal linking map — The eLearning Co.

**Purpose.** This is the master inventory of every page on the site, organised by section, with canonical URLs and one-line descriptions. Claude reads this before writing or editing any page so internal links go to real URLs, not invented ones. When a new page is added, this file is updated in the same change.

**How to use this file.** When writing a new blog post, resource, or page: scan the sections that overlap thematically with what you're writing, pick 3-5 relevant pages, and link to them inline. Prefer specific deep pages over generic index pages. Always verify the URL against this file before writing it into a draft.

**Last updated:** May 2026
**Total pages:** ~80

---

## Core navigation

| URL | Title / purpose |
|---|---|
| `/` | Homepage. Three-week eLearning, fixed price, anti-agency positioning. |
| `/pricing` | Three-tier pricing: $5,500 / $7,500 / $10,500 + GST. Custom quotes also covered. |
| `/about` | How we work. Process, philosophy, founder context. |
| `/contact` | Contact form. Accepts `?tier=1/2/3/custom` and `?category=...` query params. |
| `/blog` | Blog index. |
| `/resources` | Resources index. Links to design kit + practical guides. |
| `/training` | Training categories index. |
| `/tools` | eLearning tools index. |
| `/thank-you` | Post-submission confirmation page. Not linked to from content. |

---

## Training categories (25 pages)

All live at `/training/[slug]`. Strong link targets from blog posts and design-kit pages that mention specific compliance topics.

### Compliance & Risk

| URL | Title |
|---|---|
| `/training/workplace-health-safety` | Workplace Health & Safety |
| `/training/sexual-harassment-prevention` | Sexual Harassment Prevention |
| `/training/cyber-security-awareness` | Cyber Security Awareness |
| `/training/privacy-data-protection` | Privacy & Data Protection |
| `/training/anti-bribery-corruption` | Anti-Bribery & Corruption |
| `/training/code-of-conduct` | Code of Conduct Training |
| `/training/workplace-bullying-prevention` | Workplace Bullying Prevention |

### Onboarding & Culture

| URL | Title |
|---|---|
| `/training/new-employee-onboarding` | New Employee Onboarding |
| `/training/company-induction` | Company Induction Programmes |
| `/training/diversity-inclusion` | Diversity & Inclusion |
| `/training/mental-health-awareness` | Mental Health Awareness |
| `/training/remote-work` | Remote Work Best Practices |

### Skills Development

| URL | Title |
|---|---|
| `/training/customer-service` | Customer Service Training |
| `/training/sales-training` | Sales Training & Enablement |
| `/training/leadership-development` | Leadership Development |
| `/training/communication-skills` | Communication Skills |
| `/training/time-management` | Time Management & Productivity |
| `/training/conflict-resolution` | Conflict Resolution |
| `/training/feedback-performance` | Feedback & Performance Conversations |

### Operational & Technical

| URL | Title |
|---|---|
| `/training/product-training` | Product Training |
| `/training/software-system` | Software/System Training |
| `/training/process-procedure` | Process & Procedure Training |
| `/training/quality-management` | Quality Management Systems |
| `/training/emergency-response` | Emergency Response Procedures |
| `/training/change-management` | Change Management |

---

## Blog posts (7)

All live at `/blog/[slug]`. Categories controlled by frontmatter; values: `Compliance & Risk`, `Onboarding & Culture`, `Skills Development`, `Operational & Technical`, `eLearning Best Practices`, `Industry Insights`.

| URL | Title | Category | Link-from opportunities |
|---|---|---|---|
| `/blog/articulate-rise-vs-storyline` | Articulate Rise vs Storyline: Which Tool is Right for Your eLearning Project? | eLearning Best Practices | Any post or page mentioning either tool; pricing page; tools pages |
| `/blog/onboarding-course-template` | Employee Onboarding Course Structure & Template | Onboarding & Culture | `/training/new-employee-onboarding`, `/training/company-induction` |
| `/blog/we-are-not-going-to-win-awards` | We're Not Going to Win Any Awards. Here's Why. | eLearning Best Practices | `/about`, `/pricing`; any post on values/process |
| `/blog/workplace-health-safety-cost-guide` | Workplace Health & Safety eLearning Course Cost Guide | Compliance & Risk | `/training/workplace-health-safety`, `/pricing` |
| `/blog/scorm-xapi-aicc-explained` | SCORM, xAPI, and AICC: Which eLearning Standard Should You Choose? | eLearning Best Practices | All tools pages; `/training/[any-compliance-page]` where LMS standards matter |
| `/blog/australian-compliance-training-overview` | Australian Compliance Training in 2026 | Industry Insights | All compliance training categories; especially sexual-harassment, WHS, cyber-security, privacy |
| `/blog/the-this-will-look-good-in-our-portfolio-tax` | (DUPLICATE — likely a draft / file naming issue. Frontmatter currently mirrors the awards post.) | — | **FLAG: needs cleanup. See notes at end.** |

---

## Resources — top-level practical guides (2)

Live at `/resources/[slug]`. Aimed at clients commissioning courses, not designers building them.

| URL | Title | One-liner |
|---|---|---|
| `/resources/effective-elearning-brief` | Writing a brief that gets a fast quote | The 7 things to include in an eLearning brief. Useful link from `/contact`, `/pricing`, `/about`. |
| `/resources/giving-effective-feedback` | Giving effective feedback during your review period | 6 principles + a three-pass review framework. Useful link from `/about`, `/pricing`, design-kit essays. |

---

## Design Kit — Components (10)

Live at `/resources/design-kit/[slug]`. Aimed at designers and learning developers. Strong cross-linking between related components.

| URL | Title | One-liner |
|---|---|---|
| `/resources/design-kit/radio-buttons` | Radio buttons | Single-choice question UI. |
| `/resources/design-kit/checkboxes` | Checkboxes | Multi-select question UI. |
| `/resources/design-kit/sliders` | Sliders | Range value adjustment. |
| `/resources/design-kit/dials` | Dials | Circular range alternative to sliders. |
| `/resources/design-kit/primary-buttons` | Primary buttons | Submit / Continue / Get started CTAs. |
| `/resources/design-kit/navigation-buttons` | Navigation buttons | Next / Previous / paging patterns. |
| `/resources/design-kit/toggle-buttons` | Toggle buttons | On/off, sort/filter, segmented controls. |
| `/resources/design-kit/carousels` | Carousels | Sequential content with manual paging. |
| `/resources/design-kit/text-entry` | Text entry | Free-text inputs for reflection and short answers. |
| `/resources/design-kit/links` | Links | Inline and standalone link patterns. |

---

## Design Kit — Interactions (7)

| URL | Title | One-liner |
|---|---|---|
| `/resources/design-kit/branching-scenarios` | Branching scenarios | Decision-driven stories where the learner shapes the outcome. |
| `/resources/design-kit/hotspots` | Hotspots | Interactive points on an image for exploratory learning. |
| `/resources/design-kit/drag-and-drop` | Drag and drop | Sort, match, sequence by dragging. |
| `/resources/design-kit/quizzes` | Quizzes | Multi-question assessments. |
| `/resources/design-kit/click-to-reveal` | Click to reveal | Tabs, accordions, flip cards. |
| `/resources/design-kit/software-simulations` | Software simulations | Click-through training for applications. |
| `/resources/design-kit/real-world-simulations` | Real-world simulations | Immersive scenarios mirroring workplace systems. |

---

## Design Kit — Design advice essays (8)

Long-form essays. The richest internal-link targets because they cover principles that apply across many other pages.

| URL | Title | One-liner |
|---|---|---|
| `/resources/design-kit/writing-assessment-questions` | Writing good assessment questions | Choose the right question type; test understanding, not memory. |
| `/resources/design-kit/writing-engaging-scenarios` | Writing engaging scenarios | Scenarios that feel real, not like training exercises. |
| `/resources/design-kit/choosing-level-of-detail` | Choosing the right level of detail | When to go deep, when to summarise, how to decide. |
| `/resources/design-kit/using-white-space` | Using white space | The single highest-leverage design decision most courses ignore. |
| `/resources/design-kit/colour-theory-intro` | Intro to colour theory in eLearning | Practical colour theory for learning designers. |
| `/resources/design-kit/writing-for-screen` | Writing for screen, not page | Concise, direct, second-person, active. |
| `/resources/design-kit/typography-for-elearning` | Typography for eLearning | Type scale, font choice, line length, the details that matter. |
| `/resources/design-kit/designing-for-accessibility` | Designing for accessibility | Practical eLearning accessibility. Not WCAG theory — actual decisions. |

---

## Design Kit — eLearning tools overview (6)

These are tool-overview pages inside the design kit (different from the `/tools/[tool]` SEO landing pages — see next section).

| URL | Title |
|---|---|
| `/resources/design-kit/articulate-rise` | Articulate Rise |
| `/resources/design-kit/articulate-storyline` | Articulate Storyline |
| `/resources/design-kit/chameleon-creator` | Chameleon Creator |
| `/resources/design-kit/mindsmith` | Mindsmith |
| `/resources/design-kit/parta` | Parta |
| `/resources/design-kit/howtoo` | HowToo |

**Note:** there are two parallel tool listings on the site — these (educational, inside the kit) and `/tools/[slug]` (SEO landing pages, see below). When linking from a blog post or design essay, prefer the design-kit version. When linking from sales-focused content (pricing, contact, about), prefer the `/tools/[slug]` version.

---

## Tools landing pages — SEO (8)

Live at `/tools/[slug]`. SEO-focused service pages. Some overlap with the design-kit tool pages above; some are not in the kit (e.g., Adobe Captivate, 7taps, Coassemble).

| URL | Title |
|---|---|
| `/tools/articulate-rise` | Articulate Rise development |
| `/tools/articulate-storyline` | Articulate Storyline development |
| `/tools/chameleon-creator` | Chameleon Creator development |
| `/tools/adobe-captivate` | Adobe Captivate development |
| `/tools/howtoo` | HowToo development |
| `/tools/parta` | Parta development |
| `/tools/7taps` | 7taps development |
| `/tools/coassemble` | Coassemble development |

---

## Location landing pages (8)

Live at `/locations/[city]`. SEO-focused location pages for Australian capitals. The `/locations` index lists all of them.

| URL | City / role |
|---|---|
| `/locations` | Locations index — all 7 cities grouped, plus regional/remote note |
| `/locations/sydney` | Sydney |
| `/locations/melbourne` | Melbourne |
| `/locations/brisbane` | Brisbane |
| `/locations/perth` | Perth |
| `/locations/adelaide` | Adelaide |
| `/locations/canberra` | Canberra |
| `/locations/hobart` | Hobart |

---

## Linking guidelines

### How to choose where to link

1. **Specific over generic.** Link to `/training/cyber-security-awareness`, not `/training`. Link to `/resources/design-kit/quizzes`, not `/resources/design-kit`. Only link to index pages when the reader needs to browse, not when there's a specific page that matches the context.
2. **Relevant, not exhaustive.** 3-5 internal links per blog post / resource page is plenty. More starts to look like SEO spam.
3. **Inline, not in a list at the end.** Most internal links should live inside prose at the natural moment a topic comes up. A "related" footer is fine for 2-3 extras; the bulk should be inline.
4. **No duplicate links to the same page** within one post unless they're far apart and the second one genuinely helps.

### Useful link patterns

- **From compliance blog posts → training category pages.** Any post mentioning workplace health and safety should link to `/training/workplace-health-safety`. Any post mentioning sexual harassment should link to `/training/sexual-harassment-prevention`. And so on.
- **From design-kit essays → other design-kit essays.** Cross-link the principles. Accessibility links to colour theory. Typography links to writing-for-screen. They reinforce each other.
- **From design-kit component pages → relevant interaction pages.** The radio-buttons page should link to quizzes; the hotspots page should link to real-world-simulations.
- **From blog posts → pricing or contact.** Almost every blog post has a natural moment for "if you need this built, here's how to start." Use `?tier=2` query params for the contact link if the post points to a specific tier.
- **From blog posts → resources.** A post about brief writing links to `/resources/effective-elearning-brief`. A post about iteration links to `/resources/giving-effective-feedback`.

### What NOT to link

- The thank-you page (only reached after form submission)
- `/style` (internal style guide, noindex)
- robots.txt or sitemap files
- Any page not in this list (don't invent URLs)

---

## Known issues / cleanup needed

1. **Duplicate awards post.** `/blog/the-this-will-look-good-in-our-portfolio-tax` exists as a file but its frontmatter is the same as `/blog/we-are-not-going-to-win-awards`. The filename suggests it was meant to be a separate post about portfolio-driven design ("the 'this will look good in our portfolio' tax"). Either:
   - **Option A.** Delete the duplicate file (if it's an accidental copy).
   - **Option B.** Rewrite it as the post the filename suggests — a complementary piece arguing against design decisions driven by portfolio appeal rather than learner outcomes.
   - This map currently lists it but the entry should be cleaned up.

2. **Two parallel tool listings.** As noted, `/resources/design-kit/[tool]` and `/tools/[slug]` cover overlapping tools. This is intentional (one is educational, one is sales/SEO), but the editorial line between them can blur. Worth a future audit to make sure they reference each other appropriately rather than competing.

3. **No location → training cross-links.** The location pages (Sydney, Melbourne, etc.) don't currently link to specific training categories. Adding 3-4 representative training category links to each location page would strengthen both directions of the link graph.

4. **Resolved as of May 2026:** Previous version of this map flagged that `/locations` (the index) didn't exist and was being linked from breadcrumbs. The index has been built. No action needed.
