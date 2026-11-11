
# Spacing System Rules

This document defines how spacing is used across the Executive Portfolio project.

It establishes the spacing scale, usage principles, and consistency requirements. It does not prescribe specific page layouts or replace component-specific design decisions.

All spacing values must follow the approved spacing scale and be mapped to the existing design tokens wherever available.

---

# 1. Source of Truth

The source of truth for spacing implementation is:

- `design-tokens.css`

All spacing values used across the portfolio must reference the existing spacing tokens defined in this file.

Implementation rules:

- Inspect `design-tokens.css` before using any spacing values.
- Reuse existing CSS custom properties for spacing.
- Do not invent token names or assume that a token exists.
- Do not duplicate spacing definitions or introduce a competing token system.
- Do not silently overwrite existing token values.
- If a required spacing token is missing or differs from the approved scale below, identify the discrepancy before making changes.
- Do not modify `design-tokens.css` without explicit instruction.

This document defines the approved spacing scale and usage rules. The CSS token file remains the implementation reference.

---

# 2. Spacing Philosophy

The spacing system is designed to create:

- Consistent visual rhythm
- Clear content hierarchy
- Breathable layouts
- Predictable interface structure
- Editorial clarity
- Balanced relationships between content elements

The portfolio should feel:

- Calm
- Structured
- Spacious
- Intentional
- Refined

Spacing is a fundamental part of the visual identity. It should support the typography, colour, content hierarchy, and overall editorial experience.

Whitespace must be treated as an intentional design element rather than unused space.

---

# 3. Spacing Scale

The project follows a progressive spacing scale, providing flexibility while maintaining consistency across the interface.

## 3.1 Defined Spacing Tokens

| Token | Value |
|---|---:|
| spacing-0 | 0px |
| spacing-1 | 2px |
| spacing-2 | 4px |
| spacing-3 | 8px |
| spacing-4 | 12px |
| spacing-5 | 14px |
| spacing-6 | 16px |
| spacing-7 | 20px |
| spacing-8 | 24px |
| spacing-9 | 32px |
| spacing-10 | 36px |
| spacing-11 | 40px |
| spacing-12 | 44px |
| spacing-13 | 48px |
| spacing-14 | 52px |
| spacing-15 | 56px |
| spacing-16 | 60px |
| spacing-17 | 64px |
| spacing-18 | 72px |
| spacing-19 | 80px |
| spacing-20 | 96px |
| spacing-21 | 126px |

These values represent the approved spacing scale for the project.

Do not introduce additional spacing levels without explicit approval.

---

# 4. Spacing Usage Principles

Spacing should follow consistent relational logic. The appropriate token should be selected according to the relationship between elements, content hierarchy, and available space.

## 4.1 Micro Spacing (spacing-1 to spacing-4)

Used for:

- Icon-to-text gaps
- Inline text spacing
- Small interface elements
- Compact labels
- Closely related content
- Small alignment adjustments

These values should maintain proximity between elements that belong together.

## 4.2 UI Spacing (spacing-5 to spacing-9)

Used for:

- Button padding
- Form elements
- Small cards
- Navigation elements
- Grouped content
- Related interface components
- Internal component spacing

These values provide comfortable separation without making interface elements feel disconnected.

## 4.3 Layout Spacing (spacing-10 to spacing-15)

Used for:

- Content block separation
- Card padding
- Section groupings
- Editorial content groups
- Image and text relationships
- Supporting content areas

These values help establish structure and hierarchy within individual sections.

## 4.4 Page Spacing (spacing-16 to spacing-21)

Used for:

- Major section separation
- Hero composition
- Large content transitions
- Page-level breathing room
- Prominent editorial layouts
- Large visual and content groupings

These values establish the overall rhythm of the portfolio.

---

# 5. Layout Spacing Rules

This section provides general spacing guidance. It does not prescribe specific layouts or override individual component requirements.

## 5.1 Section Spacing

Major website sections should maintain a consistent vertical rhythm.

- Desktop sections should generally use spacing-16 to spacing-21, depending on hierarchy and content density.
- Related content within a section should use smaller spacing values.
- Visually distinct sections should have enough separation to establish a clear transition.
- Section spacing should remain consistent across pages unless the content structure justifies a variation.

Avoid making every section equally spacious when the content hierarchy requires different levels of emphasis.

## 5.2 Card Spacing

Cards should maintain consistent internal spacing.

- Default card padding: spacing-6 or spacing-7.
- Larger cards: spacing-8 or spacing-9.
- Spacing between related elements should be smaller than the card's overall internal padding.
- Similar cards should maintain consistent padding.

Cards should not introduce unnecessary internal whitespace or become visually dense.

## 5.3 Button Spacing

Buttons should use predictable padding.

- Vertical padding: spacing-3 or spacing-4.
- Horizontal padding: spacing-5 or spacing-6.
- Icon-to-label spacing should use an appropriate micro-spacing token.
- Buttons within the same interaction group should maintain consistent dimensions.

Button spacing should support usability and visual balance.

## 5.4 Navigation Spacing

Navigation elements should maintain consistent spacing.

- Use appropriate UI spacing between navigation items.
- Maintain clear separation between navigation groups.
- Ensure sufficient spacing around interactive elements.
- Avoid excessive gaps that make the navigation feel disconnected.

## 5.5 Form Spacing

Forms should maintain a clear relationship between labels, inputs, supporting text, and actions.

- Use smaller spacing between labels and their associated fields.
- Use consistent spacing between form fields.
- Keep validation messages visually connected to the relevant input.
- Provide adequate separation between form groups.
- Maintain comfortable spacing around form actions.

## 5.6 Image and Content Spacing

Images should have intentional relationships with adjacent text and content.

- Use consistent spacing between images and captions.
- Maintain appropriate separation between visual and written content.
- Avoid crowding images with surrounding text.
- Use larger spacing when images serve as major editorial elements.

---

# 6. Responsive Spacing

Spacing should adapt to the available viewport while preserving the established visual hierarchy.

## Desktop

- Use the larger spacing values where appropriate.
- Maintain generous section separation.
- Preserve the intended editorial rhythm.
- Avoid unnecessary compression of major content areas.

## Tablet

- Adjust large spacing values when the available width requires it.
- Maintain clear separation between content groups.
- Prevent layouts from becoming unnecessarily sparse.

## Mobile

- Reduce oversized desktop spacing where necessary.
- Maintain comfortable internal padding.
- Preserve readable relationships between headings, paragraphs, images, and interactive elements.
- Avoid excessive vertical whitespace that makes users scroll unnecessarily.
- Ensure touch targets have sufficient usable space.

Responsive adjustments must continue to use the approved spacing tokens.

Where responsive token variants already exist in `design-tokens.css`, reuse them rather than creating additional values.

---

# 7. Consistency Rules

The following rules apply across the entire portfolio:

- Use only values from the approved spacing scale.
- Map spacing values to existing design tokens.
- Avoid arbitrary pixel values in component styles.
- Maintain consistent spacing between similar components.
- Use spacing according to content hierarchy and element relationships.
- Avoid introducing unnecessary variations.
- Keep spacing consistent across corresponding sections and pages.

Consistency is more important than variety.

A different spacing value should only be used when there is a clear layout or hierarchy reason.

---

# 8. Editorial Layout Philosophy

The spacing system must support the portfolio's editorial and executive positioning.

The overall experience should feel:

- Spacious rather than dense
- Structured rather than chaotic
- Editorial rather than dashboard-heavy
- Refined rather than decorative
- Intentional rather than repetitive

Use whitespace to:

- Establish content hierarchy.
- Give important statements room to breathe.
- Separate major content themes.
- Improve reading flow.
- Create visual pauses between sections.
- Direct attention towards important content and actions.

Avoid applying large spacing values indiscriminately. Whitespace should have a clear purpose.

---

# 9. Prohibited Practices

The following practices are not permitted:

- Introducing spacing values outside the approved scale.
- Hardcoding arbitrary pixel spacing in components.
- Creating duplicate spacing tokens.
- Defining a competing spacing system.
- Using inconsistent spacing between similar components.
- Mixing unrelated spacing values without a clear reason.
- Applying large spacing values solely for decoration.
- Compressing content to accommodate unnecessary visual elements.
- Allowing responsive layouts to introduce arbitrary spacing values.

---

# 10. Implementation Rules

Before implementing spacing:

1. Inspect the existing `design-tokens.css` file.
2. Identify the spacing custom properties already defined.
3. Map the approved spacing scale to the existing tokens.
4. Use the appropriate token in component styles and layouts.
5. Check that spacing remains consistent across responsive breakpoints.
6. Identify any missing or conflicting token definitions before proposing changes.

Use CSS custom properties rather than hardcoded values.

Do not assume that the token names in this document correspond directly to existing CSS variable names. Verify the actual definitions first.

If a required token is unavailable, flag it rather than silently introducing a new token or modifying the source file.

---

# 11. Quality Assurance

Before considering spacing implementation complete, verify that:

- All spacing values follow the approved scale.
- Existing spacing tokens are reused correctly.
- Similar components have consistent internal spacing.
- Section separation reflects the content hierarchy.
- Typography and spacing work together to support readability.
- Images and text have balanced spatial relationships.
- Buttons and form elements have appropriate padding.
- Desktop, tablet, and mobile layouts maintain visual rhythm.
- No arbitrary spacing values have been introduced.
- No duplicate or competing spacing definitions exist.

---

# 12. Final Rule

Spacing defines the visual rhythm of the entire Omotola Portfolio experience.

Every spacing decision must respect:

- Hierarchy
- Readability
- Consistency
- Spatial balance
- Responsive behaviour
- Editorial clarity

The goal is not to use more whitespace, but to use whitespace intentionally.

A strong and consistent spacing system is essential to creating a premium, structured, and thoughtful portfolio experience.
