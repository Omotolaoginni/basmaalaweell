
# Border Radius System Rules

This document defines how border radius is managed and applied throughout the Executive Leadership Portfolio project.

The radius system establishes consistency in the treatment of corners across interface elements, content surfaces, buttons, forms, and selected visual components.

It does not independently define component styling, layout, colour, or visual composition.

All radius decisions must support the established executive portfolio design direction: sophisticated, editorial, structured, minimal, and timeless.

---

# 1. Source of Truth

The single source of truth for border radius implementation values is:

`design-tokens.css`

The official brand identity reference is:

`assets/Basma-Alawee-Brand-identity copy.pdf
`

These documents serve different purposes:

- `design-tokens.css` provides the implementation-ready radius tokens.
- `assets/Basma-Alawee-Brand-identity copy.pdf` provides the established visual identity and any relevant shape or graphic guidelines.
- `radius.md` defines how radius values should be applied consistently.
- `agent.md` establishes the overall project direction.
- `SKILL.md` defines the design and development methodology.

### Implementation Rules

1. Inspect `design-tokens.css` before implementing border radius.
2. Identify the existing radius tokens and their actual values.
3. Use the five approved radius values defined in this document.
4. Reuse existing tokens wherever applicable.
5. Do not create a competing radius system.
6. Do not duplicate existing token definitions.
7. Do not introduce additional radius levels.
8. Do not silently overwrite existing radius tokens.
9. If the existing token values differ from the approved values, identify the discrepancy before making changes.
10. Keep radius implementation consistent across reusable components.

All radius values must reference the existing token system wherever possible.

---

# 2. Radius Philosophy

The border radius system should support the visual character of an executive leadership portfolio.

The intended visual direction is:

- Refined
- Minimal
- Structured
- Sophisticated
- Editorial
- Contemporary
- Timeless
- Intentionally restrained

Border radius should introduce subtle softness without making the website feel overly rounded, playful, or product-focused.

### Design Principles

- Prefer restrained corner treatments.
- Preserve clean geometric structures.
- Use rounding where it improves visual composition.
- Maintain consistency across similar components.
- Avoid unnecessary rounded containers.
- Allow editorial layouts and photography to remain visually expressive.
- Do not use radius as a decorative substitute for thoughtful layout.

The overall interface should feel balanced between structure and softness.

Radius is subtle, not decorative.

---

# 3. Radius Scale

The project uses a defined five-level radius scale.

These values are established specifications for the Executive Leadership Portfolio project and must be maintained consistently.

| Token | Value | Description |
|---|---:|---|
| `radius-sm` | 4px | Subtle rounding for compact UI elements |
| `radius-md` | 8px | Standard radius for common components |
| `radius-lg` | 12px | Moderate rounding for cards and content surfaces |
| `radius-xl` | 16px | More prominent rounding for featured elements |
| `radius-full` | 10000px | Fully rounded pill and circular elements |

### Implementation Rules

- Use the exact radius values defined above.
- Map these values to the corresponding existing tokens in `design-tokens.css`.
- Do not invent additional radius levels.
- Do not replace these values with alternative measurements.
- Do not hardcode radius values repeatedly across components.
- If the existing token values differ, identify the discrepancy before making changes.
- Preserve the established token naming convention where it already exists.

---

# 4. Radius Usage Guidelines

## 4.1 Small Radius (4px)

Token: `radius-sm`

Used for:

- Compact buttons
- Small form inputs
- Search fields
- Small interface elements
- Compact supporting surfaces

This level provides subtle softness while preserving a structured appearance.

Avoid excessive rounding on compact controls.

## 4.2 Medium Radius (8px)

Token: `radius-md`

Used for:

- Standard buttons
- Form fields
- Dropdowns
- Select controls
- Small cards
- General interactive elements

This is the default radius for common interface components.

Related components should maintain a consistent treatment.

## 4.3 Large Radius (12px)

Token: `radius-lg`

Used for:

- Content cards
- Selected image containers
- Modals
- Featured content surfaces
- Grouped content containers

This level introduces more noticeable softness while maintaining a refined appearance.

Do not automatically apply this radius to every content group or section.

## 4.4 Extra Large Radius (16px)

Token: `radius-xl`

Used for:

- Featured cards
- Selected prominent image treatments
- Large visual content surfaces
- Specially emphasised components
- Selected hero elements where composition justifies it

Use this level sparingly.

It should create distinction without making the overall website excessively rounded.

## 4.5 Full Radius (10000px)

Token: `radius-full`

Used for:

- Pill-shaped buttons
- Category tags
- Chips
- Circular avatar elements
- Selected status badges

Full radius should only be used when the component is intentionally designed to be pill-shaped or circular.

Do not apply it to ordinary cards, sections, or content containers.

---

# 5. Component Mapping Rules

Radius should be applied consistently according to component function and visual hierarchy.

The following recommendations establish the default component mapping.

## 5.1 Buttons

- Default buttons: `radius-md` (8px).
- Secondary buttons: `radius-md` (8px).
- Compact buttons: `radius-sm` (4px), where appropriate.
- Pill buttons: `radius-full` (10000px).
- Icon buttons: Follow the radius convention established for their component family.

Maintain consistent radius across buttons with similar functions.

Button hierarchy should primarily come from colour, typography, spacing, and interaction treatment rather than unnecessary radius variations.

## 5.2 Form Elements

Applies to:

- Text inputs
- Text areas
- Select controls
- Search fields
- Dropdowns

Default radius:

- `radius-sm` (4px) for compact form elements.
- `radius-md` (8px) for standard form elements.

Related form elements should maintain a predictable visual treatment.

Avoid excessively rounded form fields.

## 5.3 Cards and Content Surfaces

The portfolio should not rely on excessive card-based layouts.

Where cards are genuinely needed:

- Default cards: `radius-lg` (12px).
- Featured cards: `radius-xl` (16px).
- Small content cards: `radius-md` (8px), where appropriate.

Additional guidelines:

- Keep similar card types consistent.
- Avoid unnecessary nested rounded containers.
- Do not apply large radius to every content group.
- Allow editorial layouts to use open compositions without visible card boundaries.
- Use featured radius treatments only where the content hierarchy justifies them.

## 5.4 Images and Photography

Image treatments should remain natural and editorial.

Guidelines:

- Use `radius-sm` or `radius-md` for subtle image rounding where appropriate.
- Use `radius-lg` for selected prominent image containers.
- Use `radius-xl` for featured image treatments only when justified by the composition.
- Preserve the original photographic content.
- Do not automatically round every image.
- Use consistent treatments for images serving similar purposes.
- Avoid decorative image masks that distract from the subject.
- Do not apply excessive rounding to full-width editorial photography.

Photography may use square or minimally rounded corners where that better supports the visual direction.

## 5.5 Navigation

Navigation elements should remain clean and understated.

Guidelines:

- Do not place unnecessary rounded containers around navigation items.
- Use `radius-full` only for intentionally pill-shaped navigation controls.
- Use restrained rounding for selected interactive controls where appropriate.
- Avoid turning every navigation link into a pill.
- Maintain consistent treatment across desktop and mobile navigation.

## 5.6 Badges and Tags

Default treatment:

- `radius-full` (10000px) for intentionally pill-shaped tags and chips.
- `radius-sm` (4px) or `radius-md` (8px) for more structured badge treatments.

Avoid excessive badge and chip styling.

## 5.7 Modals and Overlays

Default treatment:

- `radius-lg` (12px) for standard modal surfaces.
- `radius-xl` (16px) for larger or prominently featured modal surfaces.

Ensure that the radius does not interfere with content visibility, scrolling, or responsive layouts.

Avoid overly rounded modal containers.

## 5.8 Hero and Section Containers

Do not automatically apply border radius to entire website sections.

Editorial sections should primarily rely on:

- Layout
- Spacing
- Typography
- Colour
- Photography
- Content composition

Use `radius-lg` or `radius-xl` only for specific hero components or content surfaces where the composition requires it.

Avoid enclosing every section within a rounded container.

---

# 6. Editorial Design Considerations

This project is an executive leadership portfolio, not a conventional product interface.

Therefore, radius should be applied thoughtfully while retaining the established five-level scale.

### Editorial Guidelines

- Prefer clean, open compositions.
- Allow large typography to sit naturally within the layout.
- Avoid enclosing every content group in a rounded card.
- Avoid unnecessary rounded image frames.
- Use square or minimally rounded surfaces where appropriate.
- Let whitespace establish separation between content sections.
- Use radius to support visual grouping, not to create grouping everywhere.
- Reserve larger radius values for selected featured elements.

The design should feel closer to a premium editorial publication and executive personal-brand website than a component-heavy application.

---

# 7. Consistency Rules

- Use the same radius treatment for components serving the same function.
- Keep button radius consistent across the system.
- Maintain consistency across related form elements.
- Use predictable radius patterns for similar cards.
- Avoid introducing unrelated radius values within one component family.
- Avoid excessive nesting of rounded containers.
- Use full radius only for intentional pill or circular elements.
- Ensure responsive layouts preserve the intended radius treatment.
- Reuse existing radius tokens wherever possible.
- Do not create additional radius values outside the approved five-level scale.

Radius should reinforce the design system rather than introduce unnecessary visual variation.

---

# 8. Responsive Behaviour

Border radius should remain consistent across:

- Desktop
- Tablet
- Mobile

Responsive layouts may require adjustments to component dimensions and composition, but they should not introduce arbitrary radius changes.

Guidelines:

- Preserve the established component radius.
- Avoid excessively rounded mobile containers.
- Ensure image rounding remains appropriate at different aspect ratios.
- Prevent rounded containers from clipping important content.
- Maintain consistent treatments across responsive navigation and controls.
- Use the same radius tokens across breakpoints.

Do not change radius simply because the viewport becomes smaller.

Any responsive radius variation must use one of the five approved values and have a clear design justification.

---

# 9. Prohibited Practices

The following practices are prohibited:

- Arbitrary radius values outside the approved five-level scale.
- Introducing a competing radius scale.
- Duplicating radius token definitions.
- Replacing the approved radius values without approval.
- Using full radius unnecessarily.
- Applying large radius to every card.
- Applying rounded corners to every image by default.
- Excessive rounding of hero sections.
- Unnecessary rounded section containers.
- Mixing unrelated radius styles within the same component family.
- Excessive nesting of rounded surfaces.
- Overriding radius values without a clear design-system justification.
- Using radius as a substitute for proper spacing and layout.
- Introducing additional radius tokens for individual components.

The portfolio must avoid the overly rounded visual language commonly associated with generic SaaS interfaces.

---

# 10. Implementation Rules

Before implementing or modifying border radius:

1. Inspect the existing `design-tokens.css`.
2. Identify the actual radius custom properties.
3. Verify whether the five approved radius tokens exist.
4. Confirm their values against the approved radius scale in this document.
5. Identify any discrepancies between the token file and this specification.
6. Map component requirements to the five approved radius tokens.
7. Reuse existing tokens throughout the implementation.
8. Avoid hardcoding repeated radius values.
9. Avoid duplicating token definitions.
10. Avoid modifying the original token system without approval.
11. Verify consistency across reusable components.

### Preferred Implementation Patterns

- Centralised radius tokens.
- Reusable component styles.
- Consistent button radius.
- Consistent form-control radius.
- Restrained card radius.
- Intentional image treatments.
- Minimal use of full-radius elements.

### Important Restrictions

- Do not create another radius token file.
- Do not replace `design-tokens.css`.
- Do not assume token names or values without inspection.
- Do not automatically apply radius values as repeated literal CSS declarations.
- Do not introduce arbitrary inline radius styles.
- Do not modify existing tokens without identifying the reason.
- Do not create new radius levels.

### Handling Token Discrepancies

The approved radius specification is:

- `radius-sm`: 4px
- `radius-md`: 8px
- `radius-lg`: 12px
- `radius-xl`: 16px
- `radius-full`: 10000px

If the existing `design-tokens.css` contains different values or missing tokens:

- Identify the affected token.
- Report the existing value.
- Report the approved value.
- Explain the discrepancy.
- Request or establish the appropriate correction before changing the token file.

Do not silently override existing definitions.

---

# 11. Radius Quality Assurance

Before considering the implementation complete, review the following.

### Token Consistency

- [ ] Existing radius tokens have been inspected.
- [ ] The five approved radius levels are available.
- [ ] `radius-sm` is 4px.
- [ ] `radius-md` is 8px.
- [ ] `radius-lg` is 12px.
- [ ] `radius-xl` is 16px.
- [ ] `radius-full` is 10000px.
- [ ] Approved tokens are reused.
- [ ] No competing radius system has been created.
- [ ] No duplicate token definitions exist.
- [ ] No arbitrary radius values have been introduced.

### Component Consistency

- [ ] Standard buttons use consistent radius.
- [ ] Form elements follow a consistent treatment.
- [ ] Related cards use predictable radius values.
- [ ] Image treatments are intentional.
- [ ] Full-radius elements are used appropriately.
- [ ] Unnecessary rounded containers have been avoided.
- [ ] Featured elements use larger radius only where justified.

### Visual Direction

- [ ] The interface feels refined and editorial.
- [ ] Radius is restrained rather than decorative.
- [ ] Layout and whitespace establish the primary visual structure.
- [ ] The website does not resemble a generic SaaS dashboard.
- [ ] Rounded elements do not overpower the content.
- [ ] The five-level radius scale is applied consistently.

### Responsive Behaviour

- [ ] Radius remains appropriate on desktop.
- [ ] Radius remains appropriate on tablet.
- [ ] Radius remains appropriate on mobile.
- [ ] Rounded surfaces do not clip content.
- [ ] Component treatments remain consistent across breakpoints.

---

# 12. Final Rule

Border radius is a supporting structural design-system property.

It should reinforce:

- Consistency
- Visual hierarchy
- Usability
- Composition
- Clarity
- Brand expression

The project must use the established five-level radius scale:

- Small: 4px
- Medium: 8px
- Large: 12px
- Extra Large: 16px
- Full: 10000px

The executive portfolio should favour restrained and intentional corner treatments.

Not every element needs to be rounded.

Every radius decision must map back to one of the five approved radius tokens and contribute meaningfully to the overall visual composition.
