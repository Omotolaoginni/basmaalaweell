
---
name: executive-portfolio-design
description: A specialised design and development skill for creating sophisticated, editorial, human-centred executive leadership portfolio websites. Use this skill when planning, designing, implementing, refining, or reviewing the executive portfolio project. Follow the project's agent.md instructions and use design-tokens.css as the source of truth for existing design tokens.
---

# Executive Portfolio Design Skill

## 1. Skill Purpose

This skill defines the design thinking, visual direction, implementation standards, and quality expectations for creating a sophisticated executive leadership portfolio website.

The goal is to create a premium, editorial, human-centred digital experience that communicates the client's professional identity, leadership experience, strategic expertise, and measurable impact.

The website must feel intentional, credible, contemporary, and refined.

It must not resemble a generic corporate website, product designer portfolio, agency website, or conventional online CV.

All design and implementation decisions must support the client's positioning as an experienced executive leader working across social impact, philanthropy, inclusive economic growth, community development, and cross-sector partnerships.

---

## 2. Project Context & Source of Truth

Before making any design or development decisions:

1. Read the project's root `agent.md` file to understand the complete project requirements, client background, website structure, audience, and creative direction.
2. Inspect the existing `design-tokens.css` file and understand its actual contents.
3. Identify the existing colour, typography, spacing, sizing, radius, border, shadow, and other visual tokens.
4. Understand how the existing design tokens are structured and referenced.
5. Reuse the existing token definitions throughout the implementation.
6. Review the existing project structure and codebase before introducing or modifying components.

### Design Token Requirements

- Treat `design-tokens.css` as the single source of truth for the existing design system.
- Do not assume token names, values, or structures without inspecting the file.
- Reuse existing CSS custom properties wherever applicable.
- Do not create a competing design token system.
- Do not duplicate existing token definitions.
- Do not arbitrarily introduce new colours, typography values, spacing values, radii, or other visual primitives when suitable tokens already exist.
- If a required token is missing, use a restrained local value only when necessary.
- Do not silently overwrite or modify the original token file.
- Maintain consistent token usage across all sections and reusable components.

If the token file cannot be accessed, report the limitation rather than pretending it has been inspected.

---

## 3. Design Thinking & Decision-Making

Approach the project as an experienced digital designer creating an executive personal-brand platform.

Every design decision should consider:

- The client's professional identity.
- The seniority and credibility of the client.
- The expectations of the intended audience.
- The purpose of each website section.
- The relationship between content, imagery, typography, and layout.
- The visitor's journey from discovering the client to understanding her work and initiating engagement.

### Core Design Principles

- Clarity over decoration.
- Purposeful composition over visual complexity.
- Strong hierarchy over excessive visual elements.
- Editorial storytelling over conventional corporate layouts.
- Authenticity over generic visual treatments.
- Consistency over unnecessary variation.
- Meaningful interactions over decorative animation.
- Accessibility and usability throughout the experience.

Do not introduce visual elements simply because they look attractive. Every component, interaction, and visual treatment must serve a clear purpose.

---

## 4. General Design Rules

- Maintain a minimal, modern, and sophisticated visual style throughout the portfolio.
- Prioritise clarity, hierarchy, readability, and intentional spacing.
- Create a premium editorial experience that communicates executive credibility and professional depth.
- Maintain consistency in alignment, spacing, typography, and visual language.
- Avoid cluttered interfaces and excessive visual noise.
- Use whitespace intentionally to create visual focus and improve readability.
- Ensure every section feels purposeful, balanced, and easy to navigate.
- Use strong typography hierarchy to distinguish important information from supporting content.
- Avoid generic corporate templates, repetitive card grids, excessive gradients, glassmorphism, decorative blobs, and unnecessary visual effects.
- Ensure the overall visual identity feels timeless, thoughtful, confident, and human-centred.

---

## 5. Visual Design Methodology

### 5.1 Visual Hierarchy

Establish a clear visual hierarchy throughout the website.

Prioritise:

1. Primary messaging and page titles.
2. Section headings and key statements.
3. Supporting descriptions and contextual information.
4. Professional highlights and supporting details.
5. Metadata, captions, labels, and secondary information.
6. Navigation and calls to action.

Use typography, spacing, alignment, scale, and contrast to guide attention.

Avoid giving every element the same visual importance.

### 5.2 Editorial Composition

Use editorial design principles to create a distinctive and sophisticated experience.

- Use varied layouts to maintain visual interest.
- Combine text and imagery thoughtfully.
- Create strong relationships between headings, descriptions, and supporting content.
- Use asymmetric compositions where they improve the overall balance.
- Allow important content to occupy sufficient visual space.
- Avoid repeating identical section structures throughout the website.
- Use intentional whitespace to separate ideas and create breathing room.
- Ensure each section has its own visual identity while remaining part of a consistent design system.

### 5.3 Layout & Structure Rules

- Use a responsive grid-based layout system.
- Maintain consistent spacing and alignment across sections.
- Use whitespace to establish hierarchy and improve readability.
- Create a clear visual rhythm between sections, content blocks, imagery, and calls to action.
- Avoid overcrowded content containers.
- Ensure content widths support comfortable reading.
- Use varied editorial compositions rather than forcing all content into cards.
- Balance text and imagery appropriately.
- Ensure layouts scale naturally across desktop, tablet, and mobile devices.
- Preserve visual hierarchy at every breakpoint.

---

## 6. Typography System

The portfolio uses two primary typefaces:

- **Cormorant Garamond**
- **DM Sans**

Both typefaces are already represented in the existing `design-tokens.css` file. Inspect the file and use its actual font definitions, token names, and values.

Do not introduce duplicate font imports, font-face declarations, or competing typography definitions when the existing system already provides them.

### 6.1 Cormorant Garamond — Display Typography

Use Cormorant Garamond for display and heading typography.

Its intended applications include:

- Hero headlines.
- Main page titles.
- Primary section headings.
- Editorial headings.
- Prominent statements.
- Large display text.
- Other high-emphasis heading treatments.

Use this typeface to establish the portfolio's editorial character, visual elegance, and distinctive executive brand identity.

Ensure that display text remains legible and appropriately balanced across different screen sizes.

### 6.2 DM Sans — Supporting Typography

Use DM Sans for body text and supporting interface typography.

Its intended applications include:

- Body text.
- Paragraphs.
- Descriptions.
- Navigation text.
- Buttons and calls to action.
- Labels.
- Captions.
- Metadata.
- Supporting information.
- Form labels and inputs.
- Secondary interface text.

Use DM Sans to maintain clarity, readability, and usability throughout the website.

### 6.3 Typography Implementation Rules

- Maintain a clear distinction between display typography and supporting typography.
- Do not interchange the two typefaces arbitrarily.
- Use Cormorant Garamond for headings and prominent editorial text.
- Use DM Sans for body copy, labels, captions, navigation, and supporting interface elements.
- Maintain consistent font sizes, weights, line heights, and letter spacing for each typographic role.
- Limit unnecessary font-weight variations.
- Avoid excessive font-size variation and decorative text treatments.
- Ensure body text remains highly readable across all screen sizes.
- Use appropriate text widths and line heights for comfortable reading.
- Maintain semantic heading levels for accessibility and scanability.
- Reference the existing typography tokens in `design-tokens.css` for implementation.
- Do not create a separate typography system that conflicts with the existing tokens.

---

## 7. Color System Rules

- Use the existing design token system in design-token.css as the source of truth for all colours.
- Maintain a restrained and consistent colour palette.
- Use colour intentionally to establish hierarchy, distinguish content areas, and guide attention.
- Avoid arbitrary accent colours and unnecessary decorative colour treatments.
- Maintain appropriate contrast between text, backgrounds, borders, and interactive elements.
- Use semantic colour tokens consistently.
- Ensure interactive states use appropriate existing token values.
- Preserve visual consistency across all sections and components.

---

## 8. Component Design & Reusability

Build reusable components that maintain visual consistency throughout the portfolio.

### Component Requirements

- Establish shared styling patterns for navigation, buttons, section headings, links, image treatments, content blocks, and calls to action.
- Maintain consistent padding, spacing, typography, borders, and radius values.
- Use components according to their purpose and content.
- Avoid forcing every section into the same component arrangement.
- Avoid excessive card-based layouts and repetitive visual patterns.
- Ensure interactive elements have clear visual hierarchy.
- Keep hover, active, and focus states subtle and intentional.
- Use descriptive component names.
- Ensure reusable components remain responsive and accessible.

### Naming Conventions

Use clear, descriptive, and scalable naming conventions for sections, components, styles, and variables.

Examples:

- `site-navigation`
- `hero-section`
- `section-heading`
- `leadership-highlight`
- `experience-section`
- `speaking-section`
- `writing-list`
- `contact-section`
- `button-primary`
- `button-secondary`
- `editorial-image`
- `text-body-large`

Avoid ambiguous, duplicated, or inconsistent naming patterns.

---

## 9. Website Information Architecture

The website contains six primary sections:

1. Home
2. About Me
3. Work With Me
4. Speaking
5. Writing
6. Contact Me

Each section must serve a distinct purpose while contributing to one coherent executive personal brand.

### 9.1 Home

The homepage should establish the client's identity, positioning, and value immediately.

- Use the headline: **Big Ideas, Real Impact.**
- Introduce the client through concise, compelling positioning.
- Communicate her leadership experience and areas of impact.
- Create a strong visual introduction using approved imagery where available.
- Provide clear pathways to explore the rest of the website.
- Include purposeful calls to action.
- Avoid overcrowding the hero section with too much information.

### 9.2 About Me

This section should communicate the client's professional journey, leadership philosophy, experience, and lived perspective.

- Present her background across engineering, finance, and nonprofit leadership.
- Communicate her experience in social impact and inclusive economic growth.
- Explain her approach to collaboration, equity, and community-driven change.
- Present her lived refugee experience with sensitivity and authenticity.
- Highlight relevant professional milestones where verified information is available.
- Use a readable editorial layout rather than presenting the entire section as a conventional CV.

### 9.3 Work With Me

This section should help visitors understand the client's areas of expertise and potential engagement opportunities.

Relevant areas may include:

- Strategic advisory.
- Cross-sector partnerships.
- Philanthropy and grantmaking strategy.
- Coalition building.
- Organisational growth and transition.
- Programme strategy and implementation.
- Community development.
- Governance and advisory support.
- Field capacity strengthening.
- Inclusive economic growth initiatives.

Only present services and engagement areas supported by the client's actual experience and confirmed preferences.

Do not invent formal service offerings, consulting packages, or commercial arrangements.

### 9.4 Speaking

This section should establish the client's perspective and credibility as a speaker and thought leader.

- Present verified speaking topics and areas of expertise.
- Use clear editorial headings and concise descriptions.
- Highlight confirmed speaking engagements where information is available.
- Use approved event photographs where available.
- Provide a clear enquiry pathway for speaking opportunities.
- Do not invent event appearances, organisations, dates, or speaking credentials.

### 9.5 Writing

This section should present the client's written work, insights, perspectives, and thought leadership.

- Prioritise published articles and verified written contributions.
- Use clear titles, concise descriptions, and relevant publication metadata.
- Establish a readable editorial layout.
- Link to original publications where verified URLs are available.
- Do not invent article titles, publication names, dates, or links.
- Do not create fictional publications to fill empty content areas.

### 9.6 Contact Me

This section should provide a clear and accessible way for visitors to initiate professional engagement.

- Present confirmed contact information only.
- Use clear calls to action.
- Keep contact forms simple and accessible where implemented.
- Ensure form fields have descriptive labels.
- Provide clear validation and submission feedback.
- Do not invent email addresses, phone numbers, social media accounts, or other contact details.

---

## 10. Content & Storytelling Rules

The portfolio should prioritise concise, meaningful, and credible storytelling.

### Content Principles

- Present the client's professional journey through leadership, experience, expertise, and impact.
- Highlight strategic contributions, significant initiatives, partnerships, and outcomes where verified information is available.
- Communicate the relationship between professional expertise and lived experience with sensitivity.
- Make content easy to scan using clear headings, short paragraphs, lists, and intentional groupings.
- Establish a clear hierarchy between titles, descriptions, supporting information, dates, and metadata.
- Use confident, thoughtful, and human-centred language.
- Avoid generic corporate language, exaggerated claims, unnecessary repetition, and overly dense paragraphs.
- Preserve the client's voice and professional identity.

### Content Integrity

Never invent:

- Organisations.
- Job titles.
- Professional roles.
- Employment dates.
- Programme names.
- Financial figures.
- Performance metrics.
- Awards.
- Credentials.
- Publications.
- Testimonials.
- Partnerships.
- Governance positions.
- Speaking engagements.
- Contact details.

Use only information supplied by the client or verified through approved project materials.

Where information is missing, omit it or use a clearly identifiable placeholder for client confirmation.

Do not present assumptions as established facts.

---

## 11. Photography & Visual Asset Rules

- Prioritise authentic, approved photographs of the client.
- Use imagery to reinforce her identity, leadership, professional journey, and work.
- Prefer relevant professional photographs over generic stock imagery.
- Avoid stereotypical or exploitative imagery when representing refugee, immigrant, or underserved communities.
- Do not imply that the client attended an event, led an initiative, or worked with an organisation unless the available content confirms it.
- Maintain consistent image quality, cropping, aspect ratios, and visual treatment.
- Use image compositions that complement the editorial layout.
- Optimise images for performance without compromising quality.
- Provide descriptive alternative text for meaningful images.
- Do not fabricate client portraits or use AI-generated imagery as though it were authentic photography of the client.

---

## 12. Interaction & Motion Rules

- Use subtle motion and transitions only where they improve the browsing experience.
- Keep interactions purposeful, smooth, and understated.
- Use restrained hover effects for navigation links, buttons, images, and interactive elements.
- Avoid excessive animation, distracting transitions, unnecessary parallax effects, and decorative motion.
- Ensure interactions provide clear and immediate feedback.
- Prioritise performance and accessibility when implementing motion.
- Respect reduced-motion preferences where applicable.
- Ensure navigation and calls to action behave consistently.
- Preserve a calm, refined, and professional browsing experience.

---

## 13. Responsive Design Rules

The website must function seamlessly across:

- Desktop.
- Tablet.
- Mobile.

### Responsive Requirements

- Design mobile layouts intentionally rather than simply shrinking desktop compositions.
- Ensure content reflows naturally across screen sizes.
- Preserve typography hierarchy and readability.
- Adjust navigation, spacing, image proportions, and content arrangements appropriately.
- Prevent horizontal scrolling, clipped content, overlapping elements, and broken layouts.
- Ensure buttons, links, and interactive elements remain usable on touch devices.
- Maintain appropriate spacing and visual balance on smaller screens.
- Ensure the overall experience remains coherent across all supported breakpoints.

---

## 14. Accessibility Rules

- Maintain accessible colour contrast throughout the website.
- Ensure text remains readable across all devices.
- Support keyboard navigation for interactive elements.
- Use semantic HTML elements and a logical heading structure.
- Provide descriptive alternative text for meaningful images.
- Ensure links and buttons have clear, descriptive labels.
- Make focus states visible and consistent.
- Do not rely on colour alone to communicate meaning.
- Ensure navigation, forms, and interactive elements remain accessible.
- Respect reduced-motion preferences.
- Avoid accessibility regressions during design iterations.

---

## 15. Performance & Code Quality

- Optimise the website for fast loading and responsive interaction.
- Keep layouts and components lightweight.
- Optimise image assets and use appropriate image formats.
- Avoid unnecessary scripts and performance-heavy visual effects.
- Use efficient and reusable frontend components.
- Prevent layout shifts and ensure content renders consistently.
- Maintain clean, readable, and maintainable code.
- Avoid unnecessary dependencies.
- Ensure the website performs reliably across modern browsers and devices.
- Preserve existing project functionality when making changes.

---

## 16. Design Review & Quality Assurance

Review the website continuously during implementation, not only at the end.

### Visual Review

- Check typography hierarchy and typeface usage.
- Confirm Cormorant Garamond is used for display and heading text.
- Confirm DM Sans is used for body text, labels, captions, and supporting interface text.
- Verify that typography references the existing design tokens.
- Check spacing, alignment, and visual balance.
- Review colour consistency.
- Ensure image treatments are consistent.
- Identify repetitive layouts and unnecessary decorative elements.
- Confirm the overall design feels editorial, sophisticated, and intentional.

### Functional Review

- Test all navigation links.
- Verify all buttons and calls to action.
- Test contact form behaviour where applicable.
- Check hover, active, focus, and disabled states.
- Verify that all interactive elements work correctly.
- Check for broken links and missing assets.

### Responsive Review

- Test desktop, tablet, and mobile layouts.
- Check for horizontal overflow.
- Verify text wrapping and readability.
- Check image proportions and positioning.
- Review navigation behaviour on smaller screens.
- Ensure no content is clipped, hidden, or overlapping.

### Accessibility Review

- Check colour contrast.
- Verify keyboard navigation.
- Review semantic heading structure.
- Confirm interactive elements have accessible labels.
- Verify image alternative text.
- Check visible focus states.

### Performance Review

- Check image optimisation.
- Review loading behaviour.
- Identify unnecessary scripts or heavy assets.
- Check for layout shifts.
- Ensure interactions remain responsive.

---

## 17. Execution Behaviour

When working on this project:

1. Understand the relevant requirements in `agent.md` before implementing changes.
2. Inspect the existing project structure and relevant files.
3. Reference `design-tokens.css` before making styling decisions.
4. Plan the implementation before making significant structural changes.
5. Reuse existing components and patterns where appropriate.
6. Maintain the established typography and design system.
7. Avoid unnecessary changes to unrelated sections or functionality.
8. Check the implementation at relevant responsive breakpoints.
9. Validate both visual quality and functional behaviour.
10. Report missing content, inaccessible files, or unresolved requirements rather than inventing solutions or claiming completion.

Do not treat every design request as permission to redesign the entire website.

When asked to refine one section, preserve the rest of the established experience unless a broader change is necessary.

When implementing a new component, ensure it follows the existing design system and contributes to the overall visual consistency.

---

## 18. Definition of Done

The project is ready for final review when:

- All six website sections are implemented.
- The client's professional positioning is communicated clearly.
- The visual experience feels sophisticated, editorial, minimal, and human-centred.
- Cormorant Garamond is consistently used for display and heading typography.
- DM Sans is consistently used for body text, labels, captions, navigation, and supporting interface text.
- Both typefaces reference the existing definitions in `design-tokens.css`.
- Existing design tokens are reused consistently.
- Components are reusable and visually consistent.
- Content is accurate and does not contain fabricated information.
- Approved imagery is used appropriately.
- Navigation and interactive elements function correctly.
- Desktop, tablet, and mobile layouts have been reviewed.
- Accessibility requirements have been considered and tested.
- Performance and code quality have been reviewed.
- The complete website provides a coherent executive personal-brand experience.

---

## 19. Final Design Standard

The final portfolio experience should feel:

- Minimal.
- Strategic.
- Editorial.
- Sophisticated.
- Human-centred.
- Confident.
- Thoughtful.
- Contemporary.
- Timeless.
- Premium.

The website should communicate executive credibility, strategic leadership, cross-sector influence, authentic professional identity, and a clear record of meaningful impact.

Visitors should be able to understand:

- Who the client is.
- What she stands for.
- The experience and expertise she brings.
- The challenges and opportunities her work addresses.
- The impact of her leadership.
- How they can engage or collaborate with her.

Every design and implementation decision must support these objectives.

The priority is not to make the website visually complicated. It is to create a distinctive, polished, and purposeful digital experience that reflects the depth of the client's leadership and work.
