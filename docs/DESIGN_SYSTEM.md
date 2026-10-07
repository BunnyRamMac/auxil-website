# Auxil IT Solutions Design Constitution

This document defines the visual identity, interaction philosophy, and frontend design system direction for Auxil IT Solutions. It is the single source of truth for future website and product-facing UI work.

Auxil must feel like a premium AI product company: calm, intelligent, trustworthy, and globally credible. It must not feel like a generic IT consulting firm, recruitment agency, template startup, or services brochure.

## 1. Brand Personality

Auxil is composed, precise, useful, and quietly ambitious. It should feel like a company building durable intelligent systems, not chasing trends.

Personality:
- Intelligent without being cold.
- Premium without being flashy.
- Human without being casual.
- Product-led without pretending every product is already launched.
- Global in quality, rooted in Hyderabad, India.
- Trustworthy enough for productivity, career, and spiritual domains.
- Technically serious, but understandable to non-technical visitors.

Emotions:
- Calm confidence.
- Clarity.
- Relief.
- Forward motion.
- Thoughtfulness.
- Practical optimism.

Confidence:
- Auxil should speak in direct, short, high-conviction language.
- Avoid hype, inflated promises, and noisy persuasion.
- The brand should imply depth through restraint, not decoration.

Visual tone:
- Warm neutral base.
- Near-black typography.
- Electric blue intelligence accent.
- Subtle luminous depth.
- Crisp grid structure.
- Generous negative space.
- Soft but disciplined geometry.

User perception:
- "This company is serious."
- "This feels modern and product-led."
- "They understand AI, but they are not over-selling it."
- "The products are still developing, but the company has taste and discipline."
- "I would trust them with a conversation."

## 2. Design Principles

1. Product before marketing.
2. Minimal over decorative.
3. Calm confidence over loud persuasion.
4. Typography carries the brand.
5. White space creates luxury.
6. Motion must explain, guide, or reward.
7. Every visual element needs a job.
8. AI should feel useful, not mystical.
9. Trust is designed through clarity.
10. Gradients must be subtle and directional.
11. Depth should come from layering, not heavy shadows.
12. Cards must feel structured, not decorative.
13. Status must be honest and visible.
14. Never fake traction.
15. Buttons should feel decisive.
16. Mobile is a first-class composition.
17. Accessibility is part of premium quality.
18. Repetition creates recognition.
19. Keep the system small enough to stay consistent.
20. Avoid novelty that makes the interface harder to understand.

## 3. Color System

Auxil's palette should feel warm, precise, and intelligent. The system uses warm whites and graphite text for trust, with electric blue for intelligence and action.

### Light Mode

Backgrounds:
- `Base / Warm White`: `#FBFAF7`
  - Primary page background. Warmer than pure white, reducing clinical harshness.
- `Soft Wash`: `#F5F2EC`
  - Alternating section background. Creates rhythm without visible blocks.
- `Blue Wash`: `#F3F6FF`
  - Used sparingly in hero graphics, contact panels, and elevated emphasis areas.

Surfaces:
- `Surface`: `#FFFFFF`
  - Primary cards, panels, nav overlays.
- `Surface Soft`: `#FCFCFA`
  - Low-emphasis interior surfaces.
- `Elevated Surface`: `#FFFFFF` with subtle blue/neutral gradient
  - Hero visual, high-priority cards, CTA panels.

Borders:
- `Border Soft`: `#E7E2DA`
  - Default borders on warm surfaces.
- `Border Cool`: `#D9E1F2`
  - Visual systems and blue-accented components.
- `Border Strong`: `#C8D2E7`
  - Focused or active surfaces.

Typography:
- `Text Primary`: `#101218`
  - Main text, headings, strong labels.
- `Text Secondary`: `#343A46`
  - Navigation, secondary headings, compact UI labels.
- `Text Muted`: `#626A78`
  - Body copy, supporting text.
- `Text Subtle`: `#8A93A3`
  - Captions, timestamps, legal helper text.

Primary:
- `Auxil Blue`: `#2257FF`
  - Main intelligence and action accent. Use with restraint.
- `Auxil Blue Dark`: `#1536A4`
  - Text-safe accent for labels and links.

Secondary:
- `Signal Cyan`: `#08A7FF`
  - Secondary highlight in gradients and diagrams.
- `Graphite`: `#101218`
  - Premium primary button and footer anchor.

Accent gradients:
- `Intelligence Gradient`: `linear-gradient(135deg, #2257FF 0%, #08A7FF 100%)`
  - Icons, small marks, hero focal point.
- `Surface Gradient`: `linear-gradient(135deg, #FFFFFF 0%, #F3F6FF 100%)`
  - Elevated panels.
- `Footer Gradient`: `radial-gradient(circle at 80% 0%, rgba(34,87,255,0.18), transparent 32%), #080C14`
  - Dark premium close.

Status colors:
- `Private Testing Background`: `#EEF4FF`
- `Private Testing Text`: `#1642B8`
- `In Development Background`: `#F0F3FF`
- `In Development Text`: `#3345B8`
- `Available / Success Background`: `#EAF8F0`
- `Available / Success Text`: `#116A3A`
- `Caution Background`: `#FFF7E5`
- `Caution Text`: `#8A5A00`
- `Error Background`: `#FFF0F0`
- `Error Text`: `#A32020`

Hover colors:
- `Blue Hover Wash`: `rgba(34, 87, 255, 0.08)`
- `Surface Hover`: `rgba(255, 255, 255, 0.86)`
- `Dark Button Hover`: `#1B2435`

Focus colors:
- `Focus Ring`: `#2257FF`
- Use a 2px solid ring plus 3px transparent offset when possible.
- Focus must be visible on light and dark surfaces.

### Dark Mode

Dark mode should feel premium and readable, not neon.

Backgrounds:
- `Dark Base`: `#080C14`
- `Dark Surface`: `#101722`
- `Dark Elevated`: `#141E2D`
- `Dark Soft Wash`: `#0D1320`

Typography:
- `Dark Text Primary`: `#F6F8FC`
- `Dark Text Secondary`: `#D7DEEA`
- `Dark Text Muted`: `#98A4B7`

Borders:
- `Dark Border Soft`: `rgba(255,255,255,0.08)`
- `Dark Border Strong`: `rgba(255,255,255,0.16)`

Accent:
- Keep `#2257FF` and `#08A7FF`, but reduce glow opacity.

Why these colors exist:
- Warm whites make the company feel human and grounded.
- Graphite text creates editorial seriousness.
- Electric blue signals intelligence and technology without becoming generic purple SaaS.
- Cyan should appear only as a secondary glint, not a dominant brand color.
- Dark surfaces are reserved for contrast, footer, and high-impact sections.

## 4. Typography

Primary font recommendation:
- `Inter` or `Geist Sans` for web implementation.
- Use local/self-hosted fonts where possible to avoid render delay and external network dependency.

Fallback stack:
- `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`

Monospace:
- `"SFMono-Regular", Consolas, "Liberation Mono", monospace`

Type scale:
- Hero display: 88-124px desktop, 56-76px tablet, 46-58px mobile.
- Section heading: 52-72px desktop, 40-52px tablet, 32-42px mobile.
- Subsection heading: 28-36px desktop, 24-30px mobile.
- Card title: 18-22px.
- Body large: 20-22px.
- Body: 16-18px.
- Small body: 14-15px.
- Button: 14-15px.
- Caption / eyebrow: 11-12px.

Line heights:
- Hero: 0.9-0.96.
- Section heading: 0.98-1.06.
- Card title: 1.18-1.28.
- Body: 1.6-1.75.
- Button: 1.
- Caption: 1.2-1.4.

Weights:
- Display: 780-840.
- Section heading: 740-800.
- Card title: 700-760.
- Body: 400-500.
- Body emphasis: 600-680.
- Button: 680-740.
- Eyebrow: 760-820.

Letter spacing:
- Default: `0`.
- Hero: `0`.
- Buttons: `0`.
- Eyebrows: `0.08em` to `0.12em`.
- Never use negative letter spacing.

Why this creates premium perception:
- Large, confident typography communicates maturity.
- Tight display line height creates editorial impact.
- Moderate body line height improves trust and readability.
- Limited weights prevent visual noise.
- Eyebrows create structure without needing decorative labels.

## 5. Spacing System

Base unit:
- 4px.

Spacing scale:
- `2`: 2px
- `4`: 4px
- `6`: 6px
- `8`: 8px
- `10`: 10px
- `12`: 12px
- `16`: 16px
- `20`: 20px
- `24`: 24px
- `28`: 28px
- `32`: 32px
- `40`: 40px
- `48`: 48px
- `56`: 56px
- `64`: 64px
- `72`: 72px
- `88`: 88px
- `104`: 104px
- `120`: 120px
- `144`: 144px

Section spacing:
- Desktop hero vertical padding: 112-144px.
- Desktop section padding: 104-128px.
- Tight related sections: 64-88px.
- Mobile hero vertical padding: 56-88px.
- Mobile section padding: 72-88px.

Container widths:
- Primary container: 1120-1160px.
- Wide visual container: 1240px maximum.
- Reading container: 680-760px.
- Legal/content page: 760-840px.

Grid:
- Desktop: 12-column conceptual grid.
- Product cards: 3 columns desktop, 1 column mobile.
- Services: 4 columns desktop, 2 tablet, 1 mobile.
- Principles: 4 columns desktop, 2 tablet, 1 mobile.
- Hero: 55/45 or 52/48 split desktop, stacked mobile.

Vertical rhythm:
- Eyebrow to heading: 12-18px.
- Heading to body: 18-28px.
- Body to CTA: 28-40px.
- Section heading to grid: 40-56px.
- Card internal spacing: 20-32px.

## 6. Component System

### Buttons

Primary:
- Radius: 999px.
- Height: 50-56px.
- Padding: 22-26px horizontal.
- Background: graphite gradient.
- Text: white.
- Hover: lift -1px, slightly stronger shadow.
- Focus: 2px blue ring, 3px offset.
- Active: translate down 0-1px, reduce shadow.
- Disabled: 45% opacity, no hover movement.

Secondary:
- Radius: 999px.
- Border: soft neutral.
- Background: translucent white.
- Hover: border shifts toward blue, subtle surface fill.
- Text: graphite.

Do not use more than two button styles in one section.

### Cards

Radius:
- Standard cards: 18-22px.
- Large feature panels: 28-34px.

Padding:
- Small cards: 22-26px.
- Product cards: 28-34px.
- CTA panels: 48-80px.

Borders:
- Use 1px soft border always.
- Hover border may become blue-tinted.

Depth:
- Default shadow: very soft, low opacity.
- Hover shadow: slightly deeper, never dramatic.

Animation:
- Hover translateY(-3px to -4px).
- Duration 160-220ms.
- No bouncing.

### Navigation

Structure:
- Sticky top navigation.
- Translucent warm background.
- Blur: 18-24px.
- Height: 68-76px desktop.
- Mobile may wrap links into a second row if needed.

Brand:
- Wordmark: Auxil.
- Small blue intelligence mark before wordmark.

Links:
- Compact pills on hover.
- Active section may use light blue wash.
- Never underline nav links.

### Badges

Use for product status and compact metadata.
- Radius: 999px.
- Padding: 7-12px.
- Font size: 11-13px.
- Weight: 700-780.
- Background must be low-saturation.
- Text must pass contrast.

### Input Fields

For future forms only.
- Radius: 14-18px.
- Height: 48-54px.
- Border: soft neutral.
- Background: white.
- Focus: blue ring, stronger border.
- Placeholder: muted text.
- Error: red text plus red-tinted border.

### Links

Inline links:
- Use accent dark blue.
- Font weight 650-700.
- Hover: subtle underline or opacity shift.

Standalone links:
- Use pill or text-button treatment.
- Must have visible focus state.

### Section Headers

Structure:
- Eyebrow.
- Large heading.
- Optional supporting copy in split layout.

Spacing:
- Header to content: 40-56px desktop, 28-40px mobile.

### Pills

Use for facts, statuses, and filters only.
- Radius: 999px.
- Border: soft.
- Padding: 9-14px.
- Avoid decorative pill clusters with no purpose.

### CTA Panels

Use once near the bottom.
- Large rounded panel.
- Soft blue surface gradient.
- Strong heading.
- Simple copy.
- One primary and one secondary action.
- No form until backend exists.

### Footer

Footer must feel like a premium close, not an afterthought.
- Dark background.
- Small brand mark.
- Company summary.
- Founded details.
- Clear nav links.
- Privacy link.
- No fake social links.
- No newsletter unless it works.

## 7. Motion System

Animation philosophy:
- Motion should feel like intelligence organizing itself.
- Use motion to create focus, continuity, and tactility.
- Avoid entertainment-only animation.

Durations:
- Micro hover: 140-200ms.
- Card transitions: 180-240ms.
- Section entrance: 400-700ms.
- Hero ambient motion: 6-12s loops.
- Page transitions, if added later: 220-360ms.

Curves:
- Standard: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Exit: `cubic-bezier(0.4, 0, 1, 1)`.
- Ambient: `ease-in-out`.

Hover:
- Buttons lift slightly.
- Cards lift slightly and sharpen border.
- Links change color or surface, never jump.

Page entrance:
- Use only on first meaningful paint if performance remains excellent.
- Fade and translate should be subtle: 8-16px maximum.

Card entrance:
- Optional stagger of 40-80ms.
- Avoid long cascading sequences.

Hero animation:
- Ambient visual may breathe or slowly shift.
- The headline should remain stable and readable.
- Never animate every word.

Scroll animation:
- Use sparingly.
- Reveal content only if it does not delay comprehension.

Reduced motion:
- Respect `prefers-reduced-motion`.
- Disable ambient loops, large transforms, and scroll effects.
- Keep instant state changes and focus visibility.

When animation should not be used:
- Legal/privacy content.
- Critical contact actions.
- Anything needed for reading comprehension.
- Status labels.
- Mobile interactions that may feel sluggish.
- When it causes layout shift.

## 8. Iconography

Style:
- Simple line icons with subtle geometric confidence.
- Rounded stroke caps.
- Consistent optical size.
- No filled cartoon icons.

Stroke width:
- 1.75-2px for standard UI icons.
- 1.5px for large decorative diagrams.

Corner radius:
- Rounded corners where geometry allows.
- Avoid sharp aggressive icon forms.

Consistency:
- Icons should share grid, stroke, and proportions.
- Product icons may be custom CSS/SVG marks.
- Use icons as recognition aids, not decoration.

## 9. Imagery

Auxil should avoid stock photography. The brand should use generated or designed abstract systems that communicate intelligence, orchestration, and human usefulness.

Recommended:
- CSS/SVG abstract intelligence maps.
- Product interface abstractions.
- Soft grid systems.
- Luminous nodes and paths.
- Minimal 3D only if performance remains excellent.
- Real product screenshots only when products are ready and accurate.

Hero visual:
- Abstract product intelligence system.
- Should feel like software architecture and human intent coming together.
- Must be CSS/SVG/native, fast, and responsive.

Product visuals:
- Use consistent product cards with custom icons and status.
- Avoid fake screenshots until real UI exists.

Video:
- Avoid video for V1 unless it is small, silent, purposeful, and optimized.
- Never autoplay heavy video on mobile.

SVG usage:
- Good for abstract diagrams and icons.
- Keep SVGs simple and accessible.
- Avoid giant decorative SVG backgrounds.

Absolutely avoid:
- Stock photos.
- Robot faces.
- Futuristic humanoids.
- Generic server rooms.
- Handshake photos.
- Office people smiling at laptops.

## 10. Layout System

Desktop:
- Strong left-aligned content.
- Hero split with large type and visual system.
- Grid-based product and service sections.
- Use wide negative space.
- Keep content within 1120-1160px for primary pages.

Tablet:
- Hero may remain split if width allows.
- Product cards can stack or become two-column depending content.
- Navigation can wrap cleanly.
- Maintain generous spacing.

Mobile:
- Single-column layout.
- Hero visual follows copy.
- Buttons full width.
- Cards full width.
- Nav can wrap but must remain readable.
- Avoid horizontal overflow.

Reading width:
- Body copy: 620-760px.
- Legal copy: 700-820px.
- Never span long paragraphs across the full desktop width.

Section rhythm:
- Alternate quiet white and subtle wash.
- Avoid turning every section into a separate card.
- Use one strong CTA panel near the end.

## 11. Hero Concept

The perfect Auxil hero should be the strongest section on the site.

Headline:
- "Building intelligent products for real life."
- Large, confident, left-aligned.
- No line should feel accidental.
- It should communicate intelligence, usefulness, and human relevance.

Supporting copy:
- Short and direct.
- Explain product domains and services without sounding like a consulting menu.

Background:
- Warm white base.
- Subtle blue/cyan luminosity.
- Fine abstract grid or arcs.
- No noisy pattern.

Motion:
- Hero visual may breathe slowly.
- Background paths may shift almost imperceptibly.
- Headline and text remain still.

Visual:
- Abstract intelligence system, not a generic AI brain.
- Nodes can represent productivity, careers, spirituality, and consulting.
- One central core suggests orchestration.
- Must be lightweight and responsive.

Buttons:
- Primary: Explore What We're Building.
- Secondary: Work With Auxil.
- Buttons should sit close to copy and feel decisive.

Scroll cue:
- Optional.
- If present, make it subtle and functional.
- Avoid "scroll down" text.

First impression:
- Premium, calm, original, and product-led.
- The user should understand Auxil in under 5 seconds.

## 12. Product Showcase

Ideal presentation:
- Three cards with equal visual importance.
- Status visible near the top.
- Category as an eyebrow.
- Product name as the card anchor.
- Concise description.
- Custom icon for each product domain.

PoojaPath:
- Should feel respectful and modern, not religiously ornamental.
- Avoid temple clip art or overly sacred imagery.

AI Productivity Platform:
- Should feel like flow, focus, and orchestration.
- Avoid generic checklists as the only visual metaphor.

AI Career Intelligence Platform:
- Should feel like opportunity matching and guidance.
- Avoid resumes, briefcases, and recruitment clichés.

Product honesty:
- Always show Private Testing or In Development.
- Never imply public launch.
- Never use internal working names publicly.

## 13. Accessibility

WCAG:
- Target WCAG 2.2 AA minimum.
- AAA contrast where feasible for body text.

Contrast:
- Body text on light backgrounds should be at least 4.5:1.
- Small blue text must use dark accent, not bright blue.
- Buttons must retain contrast on hover and disabled states.

Focus:
- Every interactive element needs visible keyboard focus.
- Focus ring must not be removed.
- Focus style should be clear on light and dark backgrounds.

Keyboard:
- Navigation, CTAs, links, and future forms must be keyboard accessible.
- Logical tab order must follow visual order.

Motion:
- Respect reduced motion.
- Never rely on animation alone to convey meaning.

Semantics:
- Use real headings in order.
- Use nav, main, section, footer landmarks.
- Product cards should be articles or list items.

Touch targets:
- Minimum 44px height for touch actions.
- Mobile nav links must be easy to tap.

## 14. Performance

Performance rules:
- No heavy animation libraries for V1.
- No stock photo libraries.
- No unoptimized video.
- No client-side JavaScript unless needed.
- Prefer CSS for decorative visuals.
- Use static rendering wherever possible.
- Avoid external font fetching if it hurts build reliability.
- Self-host fonts if custom typography is required.
- Keep CSS intentional and scoped by system.
- Avoid layout shift by defining stable dimensions.
- Do not load product screenshots until real and optimized.
- Keep SVGs simple.
- Compress all raster assets.
- Use responsive image sizes if images are introduced later.
- Maintain excellent Lighthouse performance, accessibility, SEO, and best practices.

## 15. Anti-Patterns

The following must never appear on Auxil's website:

1. Generic stock photos.
2. Corporate handshake images.
3. Smiling office laptop photos.
4. Robot faces.
5. Humanoid AI assistants.
6. Brain illustrations as the main AI metaphor.
7. Random glowing blobs.
8. Excessive neon glow.
9. Purple-blue gradient overload.
10. One-note monochrome blue pages.
11. Heavy drop shadows.
12. Floating cards inside floating cards.
13. Fake customer logos.
14. Fake testimonials.
15. Fake investor logos.
16. Fake usage metrics.
17. Fake launch claims.
18. Fake product screenshots.
19. Fake awards.
20. Fake press mentions.
21. Generic "we transform businesses" headlines.
22. "Revolutionizing the future" language.
23. "AI-powered solutions for all your needs" copy.
24. Buzzword walls.
25. Long consulting service menus.
26. Recruitment agency visual language.
27. Server room imagery.
28. Circuit board backgrounds.
29. Matrix code rain.
30. Overly spiritual ornamentation.
31. Temple clip art for PoojaPath.
32. Briefcase icons for career intelligence.
33. Basic checklist icons for productivity as the only idea.
34. Carousels.
35. Auto-playing heavy videos.
36. Confetti animations.
37. Bouncy motion.
38. Scroll hijacking.
39. Hidden navigation.
40. Low-contrast gray text.
41. Tiny mobile tap targets.
42. Text over busy backgrounds.
43. Decorative sections with no message.
44. Too many competing CTAs.
45. More than two button styles in a section.
46. Inconsistent radius values.
47. Inconsistent icon stroke widths.
48. Decorative badges without meaning.
49. Overuse of glassmorphism.
50. Dense paragraphs spanning full width.
51. Negative letter spacing.
52. Viewport-width font scaling.
53. Unclear product status.
54. Internal product working names.
55. Newsletter forms without a backend.
56. Contact forms without a backend.
57. Footer clutter.
58. Social links that do not exist.
59. Dark mode with neon text.
60. Accessibility focus removal.
61. Animations that continue despite reduced motion.
62. Layout shift caused by dynamic visuals.
63. External dependencies for simple visuals.
64. Decorative AI jargon.
65. Anything that makes Auxil look like a template.

## Final Standard

Auxil's website should feel like a precise, premium entry point into an AI product company that is still honestly building. The design must communicate maturity before scale, trust before hype, and intelligence before decoration.
