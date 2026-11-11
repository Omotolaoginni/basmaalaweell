
# Colour System & Brand Colour Guidelines

## 1. Purpose

This document defines the colour philosophy, brand palette, semantic colour roles, application rules, accessibility requirements, and implementation guidelines for the executive leadership portfolio website.

The colour system must communicate:

- Professional credibility
- Leadership and authority
- Trust and stability
- Warmth and approachability
- Sophistication and maturity
- Human-centred leadership
- Clarity and visual consistency

The overall colour direction should feel refined, editorial, contemporary, timeless, and aligned with the client's established brand identity.

The website must not look like a generic corporate template or a conventional SaaS product interface.

---

## 2. Brand Identity Source of Truth

The client's official brand identity document is the primary reference for the established visual identity.

**Brand identity document:**
assets/Basma-Alawee-Brand-identity copy.pdf

The existing implementation token file is:

`design-tokens.css`

These files serve complementary purposes:

- `brand-identity.pdf` establishes the official brand identity and approved visual direction.
- `design-tokens.css` contains the existing implementation-ready design tokens.
- `color.md` defines how the approved colours should be applied throughout the website.
- `agent.md` provides the overall project requirements and creative direction.
- `SKILL.md` defines the design and development methodology.

### Instructions

1. Inspect the brand identity PDF before making significant visual design decisions.
2. Verify the official colour values against the document.
3. Use the four established brand colours as the foundation of the website's colour system.
4. Inspect `design-tokens.css` to understand the existing CSS custom properties.
5. Map the approved brand colours to the appropriate existing tokens.
6. Do not create a competing colour system.
7. Do not silently change existing token values.
8. Do not introduce new brand colours without a clear requirement and approval.
9. If the PDF and existing token file contain conflicting values, identify the discrepancy before making changes.

---

## 3. Official Brand Colour Palette

The website has four established brand colours.

These colours must be preserved in their original hexadecimal values.

Do not invent additional primary, secondary, tertiary, or accent brand colours.

### 3.1 Navy

**Hex:** `#1E2A44`

**Brand role:** Core brand colour.

Navy communicates authority, confidence, credibility, stability, and professionalism.

Intended applications:

- Primary text on light backgrounds
- Dark section backgrounds
- Logo applications
- Navigation and footer backgrounds
- Prominent headings
- Strong visual anchors
- Important structural elements

Navy should provide much of the website's visual foundation, particularly where strong contrast and a sense of authority are required.

### 3.2 Rust

**Hex:** `#9E340C`

**Brand role:** Supporting emphasis colour.

Rust introduces warmth, character, energy, and visual distinction.

Intended applications:

- Selected call-to-action elements
- Important links and interactive highlights
- Editorial emphasis
- Small visual accents
- Selected section details
- Active navigation indicators where appropriate

Use Rust deliberately rather than distributing it across every interface element.

It should create meaningful emphasis without overpowering the Navy and Cream foundation.

### 3.3 Ochre

**Hex:** `#D9A65A`

**Brand role:** Supporting accent colour.

Ochre introduces warmth, subtle richness, and an editorial quality to the visual identity.

Intended applications:

- Decorative highlights
- Subtle section accents
- Selected visual details
- Editorial markers
- Supporting graphic elements
- Decorative rules and dividers where appropriate

Ochre should be used with restraint.

Avoid using it as small text on Cream or other light backgrounds unless the resulting contrast meets accessibility requirements.

### 3.4 Cream

**Hex:** `#F4F0E7`

**Brand role:** Core light background colour.

Cream provides warmth, softness, openness, and visual breathing space.

Intended applications:

- Main website backgrounds
- Light content sections
- Editorial layouts
- About and biography sections
- Writing and publication areas
- Light content surfaces
- Backgrounds behind portraits and editorial imagery

Cream should be an important part of the website's visual foundation.

It should help create a more human, welcoming, and sophisticated experience than a conventional white corporate website.

---

## 4. Colour Hierarchy and Visual Balance

The website should be built around the relationship between the four established brand colours.

### Foundational colours

**Navy and Cream**

These should establish the main visual identity.

- Cream provides the primary light visual environment.
- Navy establishes text hierarchy, authority, and dark visual sections.

### Supporting colours

**Rust and Ochre**

These should provide selective emphasis and visual character.

- Rust is for meaningful emphasis and selected interactions.
- Ochre is for warm decorative and supporting accents.

### Application principles

- Do not distribute all four colours equally across every section.
- Avoid using multiple strong accent colours in the same small interface area.
- Use colour to establish hierarchy rather than decoration alone.
- Allow Cream and Navy to provide visual continuity between sections.
- Use Rust and Ochre to create intentional moments of emphasis.
- Maintain sufficient breathing space around coloured elements.
- Avoid excessive use of dark backgrounds throughout the entire website.

The overall colour composition should feel balanced, confident, warm, and editorial.

---

## 5. Semantic Colour Roles

The four official brand colours should be mapped to appropriate semantic roles during implementation.

Semantic roles describe how colours function in the interface. They do not create additional brand colours.

### 5.1 Background colours

Use the approved palette to establish background hierarchy.

- Main background: Cream.
- Dark background: Navy.
- Supporting emphasis backgrounds: Rust, where appropriate.
- Supporting accent backgrounds: Ochre, where appropriate and accessible.

Avoid creating too many background variations.

The website should feel visually cohesive rather than like a collection of unrelated colour blocks.

### 5.2 Text colours

- Primary text: Navy on light backgrounds.
- Secondary text: A suitable accessible variation of Navy, if permitted by the existing design system.
- Text on Navy backgrounds: A sufficiently contrasting light colour, preferably Cream.
- Text on Rust backgrounds: Use a contrasting light colour only after checking the actual contrast ratio.
- Text on Ochre backgrounds: Select a sufficiently dark text colour after checking the contrast ratio.

Do not reduce opacity indiscriminately to create secondary text colours.

Maintain comfortable readability across headings, body text, labels, captions, and supporting information.

### 5.3 Interactive colours

Use the existing brand colours for interactive elements.

- Primary actions may use Navy or Rust depending on the visual hierarchy and background.
- Secondary actions may use restrained outlines, borders, or text treatments.
- Links should be visually distinguishable from surrounding body text.
- Hover and active states should provide clear feedback.
- Focus states must remain visible and accessible.

Do not assign Rust to every button or interactive element.

Choose the treatment that creates the clearest hierarchy within each section.

### 5.4 Border and divider colours

Use restrained border treatments.

- Prefer subtle borders and dividers that complement the established palette.
- Use Navy-based borders where stronger structural separation is required.
- Use Ochre sparingly for decorative editorial rules.
- Avoid excessive borders around content sections.
- Avoid using borders to create unnecessary card-based layouts.

### 5.5 Decorative colour roles

Decorative applications should remain secondary to content.

Appropriate uses include:

- Editorial rules
- Small graphic details
- Section markers
- Selected background accents
- Subtle visual separators

Do not introduce decorative blobs, random colour shapes, or excessive geometric elements simply to fill empty space.

---

## 6. Section-Level Colour Application

The colour system should create a consistent experience across all six website sections while allowing each section to have its own visual rhythm.

### 6.1 Home

The homepage should establish the brand identity immediately.

Recommended direction:

- Use Cream as a primary background option.
- Use Navy for the main headline and important text.
- Use Rust selectively for an important call to action or editorial emphasis.
- Use Ochre for restrained decorative details.

The hero should feel confident, spacious, editorial, and memorable.

Avoid using all four colours as equally prominent elements in the hero.

### 6.2 About Me

The About Me section should feel personal, thoughtful, and approachable.

Recommended direction:

- Use Cream as the primary background.
- Use Navy for headings and body text.
- Introduce Rust or Ochre selectively for visual emphasis.
- Maintain a balanced relationship between portraiture, biography, and supporting content.

Avoid overly decorative colour treatments that distract from the client's story.

### 6.3 Work With Me

This section should communicate strategic value, leadership capabilities, and opportunities for collaboration.

Recommended direction:

- Use Navy for important headings and structural emphasis.
- Use Cream for the main content environment.
- Use Rust for selected calls to action or important highlights.
- Use Ochre for supporting editorial details.

Ensure the section remains professional and readable without looking like a service catalogue or generic agency website.

### 6.4 Speaking

The Speaking section should communicate visibility, thought leadership, and public engagement.

Recommended direction:

- Use a balanced combination of Navy and Cream.
- Use Rust or Ochre for restrained visual emphasis.
- Allow approved event photography to contribute to the visual composition.
- Maintain readable text over any image or dark background.

Do not introduce decorative colour elements that compete with the photography.

### 6.5 Writing

The Writing section should feel like a refined editorial publication.

Recommended direction:

- Use Cream as a primary background.
- Use Navy for titles, article headings, and supporting text.
- Use Rust for selected links or editorial emphasis.
- Use Ochre for restrained separators and decorative details.

Prioritise readability, typographic hierarchy, and sufficient whitespace.

Avoid making the section look like a generic blog dashboard.

### 6.6 Contact Me

The Contact section should create a clear and welcoming path to engagement.

Recommended direction:

- Use Navy as a strong background option or structural anchor.
- Use Cream for readable text and content surfaces.
- Use Rust for a prominent call to action where appropriate.
- Use Ochre sparingly for supporting details.

Ensure that contact information, links, and interactive elements remain clearly visible.

---

## 7. Typography and Colour Relationship

The website uses two established typefaces:

- Cormorant Garamond for display typography, hero headlines, page titles, section headings, and prominent editorial text.
- DM Sans for body text, paragraphs, navigation, buttons, labels, captions, metadata, and form elements.

Colour should reinforce this typographic hierarchy.

### Display typography

- Use Navy for prominent display text on light backgrounds.
- Use Cream for display text on Navy backgrounds.
- Rust may be used selectively to emphasise a word or short phrase where appropriate.
- Avoid applying different colours to too many words within one headline.

### Body typography

- Prioritise readable Navy-based text on light backgrounds.
- Use suitable contrasting text on dark backgrounds.
- Avoid using Ochre for small body text on light backgrounds.
- Maintain consistent text contrast throughout the website.

Do not use colour as a substitute for proper typographic hierarchy.

---

## 8. Colour and Photography

Photography should complement the established brand palette.

The visual relationship between photography and the website should feel natural, authentic, and editorial.

Guidelines:

- Preserve the natural colours of approved photographs.
- Avoid applying heavy colour overlays to portraits.
- Do not force every photograph into the exact brand palette.
- Use Navy or Cream backgrounds where they complement the composition.
- Ensure text placed over photographs remains legible.
- Use subtle overlays only when required for contrast.
- Avoid artificial filters that distort the client's appearance.

Photography must remain authentic and must not be manipulated to imply unverified events, affiliations, or experiences.

---

## 9. Hover, Active, and Interaction States

Interactive elements must have clear and consistent visual feedback.

### Buttons

Buttons should maintain the established visual identity.

Possible treatments:

- Navy background with Cream text.
- Rust background with a sufficiently contrasting light text colour.
- Transparent or light background with a Navy border and text.

Choose button treatments according to their hierarchy and surrounding background.

Avoid using every button style simultaneously within one section.

### Hover states

Hover interactions may include:

- Subtle background colour changes.
- Text colour changes.
- Border colour changes.
- Underline transitions.
- Restrained opacity changes where contrast remains sufficient.

Hover states should be subtle and intentional.

### Active states

Active navigation and selected interface elements should be clearly identifiable.

Use restrained brand-colour changes, underline treatments, or other accessible visual indicators.

### Focus states

Keyboard focus must be visible.

Use an appropriate contrasting focus indicator that is distinguishable against both light and dark backgrounds.

Do not remove the browser focus indicator without providing an accessible replacement.

### Disabled states

Disabled elements must be visibly distinguishable from active elements.

Do not rely exclusively on opacity if it makes text or controls difficult to read.

---

## 10. Accessibility and Contrast

Colour accessibility is mandatory.

The website should meet WCAG 2.2 AA contrast requirements.

### Minimum contrast requirements

- Normal text: At least 4.5:1.
- Large text: At least 3:1.
- Meaningful graphical objects and UI components: At least 3:1 against adjacent colours.

Large text generally means at least 24 CSS pixels for regular text or approximately 18.66 CSS pixels for bold text.

### Important colour accessibility considerations

- Navy on Cream should be the preferred text combination for light sections.
- Cream on Navy should be the preferred text combination for dark sections.
- Rust and Ochre must be checked against their intended foreground and background colours.
- Do not assume that a brand colour automatically passes accessibility requirements.
- Do not use colour alone to communicate status, active states, or important information.
- Links should have an additional visual distinction, such as an underline.
- Interactive controls must have sufficient contrast.
- Focus indicators must remain visible against surrounding surfaces.

If a combination fails accessibility requirements, adjust the implementation through a permitted accessible treatment.

Do not silently alter the official brand palette.

---

## 11. Responsive Colour Behaviour

The brand colour system must remain consistent across desktop, tablet, and mobile.

Guidelines:

- Preserve the same colour hierarchy across screen sizes.
- Do not introduce new colours for mobile layouts.
- Maintain readable text contrast at every breakpoint.
- Ensure coloured buttons and links remain distinguishable.
- Avoid large decorative colour blocks that consume unnecessary mobile screen space.
- Preserve the visual relationship between light and dark sections.
- Check text over images at all responsive breakpoints.

Responsive design should change layout and composition, not the underlying brand identity.

---

## 12. Prohibited Colour Practices

The following practices should be avoided:

- Introducing arbitrary brand colours.
- Inventing separate primary, secondary, or tertiary colours.
- Replacing the official Navy, Rust, Ochre, or Cream values.
- Creating a competing colour system.
- Using all four colours equally across every section.
- Excessive use of gradients.
- Unnecessary glassmorphism or translucent colour effects.
- Random decorative colour shapes.
- Excessive saturated backgrounds.
- Poor text contrast.
- Using Ochre for small text on Cream without verifying accessibility.
- Applying multiple accent colours to one small interface element.
- Using colour inconsistently between sections.
- Adding colour treatments that conflict with the official brand identity.

The website must not resemble a generic SaaS dashboard, fintech product interface, or template-driven corporate website.

---

## 13. Implementation Rules

Before implementing colour styles:

1. Inspect `design-tokens.css`.
2. Identify the existing colour custom properties.
3. Verify the actual values and naming conventions.
4. Map the four official brand colours to the appropriate existing tokens.
5. Reuse those tokens throughout the website.
6. Avoid hardcoding repeated colour values in individual components.
7. Do not duplicate token definitions.
8. Do not create another colour token file.
9. Do not silently overwrite existing CSS variables.
10. Keep colour implementation consistent across reusable components.

### Token handling

The existing `design-tokens.css` file is the implementation source of truth.

Do not assume that specific token names exist.

Inspect the actual file before referencing any variable.

If an appropriate semantic token is missing:

- Identify the missing role.
- Explain why it is needed.
- Propose the most appropriate mapping.
- Avoid changing the existing token system without approval.

The official hexadecimal values must remain unchanged unless the client provides an updated brand specification.

---

## 14. Colour Quality Assurance

Before considering the website complete, review the following:

### Brand consistency

- [ ] All four official brand colours are preserved.
- [ ] The correct hexadecimal values are used.
- [ ] No arbitrary brand colours have been introduced.
- [ ] Colour applications align with the brand identity PDF.
- [ ] The existing design tokens are reused.

### Visual hierarchy

- [ ] Navy and Cream establish the visual foundation.
- [ ] Rust is used selectively for meaningful emphasis.
- [ ] Ochre is used sparingly for supporting accents.
- [ ] Light and dark sections are balanced.
- [ ] Colour supports content hierarchy rather than distracting from it.

### Accessibility

- [ ] Normal text meets the 4.5:1 contrast requirement.
- [ ] Large text meets the 3:1 contrast requirement.
- [ ] Meaningful UI components meet the 3:1 contrast requirement.
- [ ] Links are distinguishable from surrounding text.
- [ ] Hover, focus, active, and disabled states are clear.
- [ ] Colour is not the only way information is communicated.

### Responsive behaviour

- [ ] Colour hierarchy remains consistent on desktop.
- [ ] Colour hierarchy remains consistent on tablet.
- [ ] Colour hierarchy remains consistent on mobile.
- [ ] Text remains readable over all background treatments.
- [ ] Interactive elements remain accessible at every breakpoint.

---

## 15. Final Colour Direction

The final website should express the client's established brand identity through a restrained and thoughtful application of the four official colours.

The intended visual relationship is:

- **Navy:** Authority, credibility, structure, and leadership.
- **Rust:** Warmth, emphasis, distinction, and energy.
- **Ochre:** Subtle richness, editorial character, and supporting detail.
- **Cream:** Openness, warmth, clarity, and visual breathing space.

Navy and Cream should provide the primary visual foundation, while Rust and Ochre should be used as deliberate supporting colours.

The objective is not to make every section colourful. It is to create a cohesive visual experience in which colour reinforces the client's professional identity, leadership presence, and human-centred approach.

Every colour decision should serve the content, strengthen the visual hierarchy, preserve brand consistency, and contribute to a sophisticated executive portfolio.
