# WebDesigno Agency Website - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern agency leaders (Vercel, Linear, Awwwards winners) with emphasis on bold typography, generous whitespace, and project-first showcases. Focus on creating a portfolio experience that demonstrates technical excellence while maintaining creative edge.

## Typography System
- **Primary Font**: Inter or DM Sans (Google Fonts) - clean, professional sans-serif
- **Display Font**: Cabinet Grotesk or Space Groteblock (Google Fonts) - bold, modern headlines
- **Hierarchy**:
  - Hero Headlines: text-6xl to text-8xl, font-bold, tight tracking
  - Section Headers: text-4xl to text-5xl, font-semibold
  - Body Text: text-base to text-lg, leading-relaxed
  - Captions/Labels: text-sm, uppercase, letter-spacing-wide

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 md:py-32
- Component spacing: gap-8 to gap-16
- Container: max-w-7xl with px-6 md:px-8
- Grid gutters: gap-6 md:gap-8

## Core Sections & Layout Strategy

### 1. Hero Section (Full Viewport)
- Large, high-impact background image showing modern workspace/design process
- Overlay with gradient for text readability
- Centered content with bold headline (e.g., "We Build Digital Experiences That Convert")
- Subheading explaining value proposition
- Dual CTAs: Primary "View Our Work" + Secondary "Start a Project" (blurred background buttons)
- Trust indicator: "Trusted by 50+ companies" with small logo strip

### 2. Services Section (Multi-Column)
- 3-column grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each service card: Icon (Heroicons), title, description, subtle hover lift
- Services: Web Development, UI/UX Design, E-commerce, Brand Identity, Mobile Apps, SEO Optimization

### 3. Portfolio Showcase (Masonry/Staggered Grid)
- Featured projects in staggered 2-column layout (asymmetric)
- Project cards: Large preview image, project title, category tags, brief description
- Hover reveal: "View Case Study" overlay with blurred background
- 6-8 showcase projects minimum

### 4. Process Section (Horizontal Timeline)
- 4-step process visualization: Discovery → Design → Development → Launch
- Number-driven design with connecting lines
- Each step: Large number, title, description

### 5. Metrics/Impact Section (4-Column Stats)
- Bold statistics: "100+ Projects Delivered", "98% Client Satisfaction", "5 Years Experience", "24/7 Support"
- Large numbers with animated count-up feel (static implementation)

### 6. Client Testimonials (2-Column Cards)
- 4 testimonials in 2x2 grid
- Include client photo, name, company, quote
- Company logos displayed separately as trust bar

### 7. Technology Stack Section
- Logo cloud of technologies: React, Next.js, Tailwind, Node.js, etc.
- Grid layout with grayscale logos, subtle animation

### 8. Contact/CTA Section (Split Layout)
- Left: Contact form (Name, Email, Project Type, Message)
- Right: Contact info, office hours, social links
- Bold headline: "Let's Build Something Amazing Together"

### 9. Footer (Rich Information)
- 4-column layout: About, Services, Quick Links, Newsletter
- Newsletter signup form
- Social media icons (Font Awesome)
- Copyright and legal links

## Component Library

### Navigation
- Fixed header with blur background on scroll
- Logo left, nav links center, "Get Started" CTA right
- Mobile: Hamburger menu with full-screen overlay

### Buttons
- Primary: Large, rounded-lg, font-semibold, px-8 py-4
- Secondary: Outlined variant
- On-image buttons: backdrop-blur-md with semi-transparent background

### Cards
- Portfolio cards: Rounded corners (rounded-xl), shadow-lg, overflow-hidden
- Service cards: Bordered, subtle shadow, p-8
- Hover states: Gentle lift (transform: translateY)

### Forms
- Input fields: Rounded borders, focus states with ring
- Labels above inputs, consistent spacing
- Submit button as primary CTA style

## Images Section

**Hero Image**: Modern, bright workspace with designers collaborating - high energy, professional atmosphere. Full-width, 80vh minimum height.

**Portfolio Images**: 6-8 high-quality screenshots/mockups of completed websites - diverse industries (e-commerce, SaaS, portfolio, corporate). Minimum 1200x800px each.

**Testimonial Photos**: 4 professional headshots of clients - diverse, approachable.

**About/Team Image** (Optional for About section if added): Team working together in modern office.

**Technology Logos**: React, Next.js, Tailwind CSS, Node.js, MongoDB, TypeScript, Figma, WordPress (SVG format preferred).

## Animations & Interactions
- Minimal, purposeful animations only
- Scroll-triggered fade-ins for sections (subtle)
- Smooth scroll navigation
- Hover effects on cards and buttons (no parallax or complex scroll effects)

## Accessibility
- Semantic HTML throughout
- ARIA labels for icons and interactive elements
- Keyboard navigation support
- Form validation with clear error states
- Sufficient contrast ratios for all text