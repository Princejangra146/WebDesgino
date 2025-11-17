# WebDesigno Agency Website

## Overview

WebDesigno is a modern web development agency website built as a single-page application (SPA). The project showcases the agency's services, portfolio, process, and capabilities through an elegant, high-performance interface. It features a contact form for lead generation and follows contemporary design principles inspired by leading tech companies like Vercel and Linear.

The application is built with React and TypeScript on the frontend, Express.js on the backend, and uses Drizzle ORM for database operations. The UI leverages shadcn/ui components for a consistent, polished design system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework and Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast hot module replacement (HMR)
- **Wouter** for lightweight client-side routing (single-page navigation)
- **React Query (@tanstack/react-query)** for server state management and API calls

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom CSS variables for theming (light/dark mode support infrastructure)
- Component aliases configured via path mapping (`@/components`, `@/lib`, etc.)

**Design System**
- Typography hierarchy using Google Fonts (DM Sans for body, display fonts for headlines)
- Consistent spacing primitives based on Tailwind's spacing scale
- Custom border radius values (9px, 6px, 3px) for visual consistency
- Elevation system using subtle shadows and overlays
- Hover and active states with visual feedback through custom CSS classes

**Page Structure**
The home page is composed of modular sections:
- Hero with full viewport height and background image overlay
- Services grid (responsive 1-2-3 column layout)
- Portfolio showcase with staggered/masonry layout
- Process timeline (4-step horizontal visualization)
- Metrics section displaying key statistics
- Testimonials with customer quotes and avatars
- Technology stack icon grid
- Contact form with validation
- Footer with newsletter signup and navigation

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server framework
- Custom request/response logging middleware with performance tracking
- JSON body parsing with raw body preservation for webhook support

**API Design**
- RESTful endpoints under `/api` prefix
- `POST /api/contact` - Submit contact form data
- `GET /api/contact` - Retrieve all contact submissions (likely for admin use)
- Validation using Zod schemas with helpful error messages
- Consistent JSON response format

**Development vs Production**
- Development mode uses Vite middleware for SSR and HMR
- Production mode serves static assets from `dist/public`
- Environment-based configuration through `NODE_ENV`

### Data Layer

**ORM and Database**
- **Drizzle ORM** for type-safe database queries
- PostgreSQL dialect configured (via `@neondatabase/serverless`)
- Schema definition in `shared/schema.ts` for code sharing between client and server

**Data Models**
- `contactSubmissions` table with fields:
  - `id` (UUID, auto-generated)
  - `name`, `email`, `projectType`, `message` (text fields)
  - `createdAt` (timestamp with default now)
- Zod schema for validation with custom error messages and field constraints

**Storage Layer**
- Interface-based storage abstraction (`IStorage`)
- In-memory implementation (`MemStorage`) for development/testing
- Ready for database implementation swap without changing application code
- Operations: `createContactSubmission`, `getAllContactSubmissions`

**Form Validation**
- Client-side validation using React Hook Form with Zod resolver
- Server-side validation using the same Zod schemas (shared schema pattern)
- Email format validation, minimum length requirements for name and message
- User-friendly error messages displayed in the UI

### Asset Management

**Static Assets**
- Generated images stored in `attached_assets/generated_images/`
- Hero background, portfolio project previews, testimonial photos
- Alias configuration `@assets` for clean import paths
- Images optimized for web delivery

### Development Tooling

**TypeScript Configuration**
- Strict mode enabled for maximum type safety
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Incremental compilation for faster builds
- ESNext module system with bundler resolution

**Build Process**
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- ESM module format throughout the application
- External packages not bundled in server build

**Development Experience**
- Replit-specific plugins for error overlay, cartographer, and dev banner
- Hot module replacement for instant feedback
- Type checking available via `npm run check`
- Database push command via `npm run db:push` (Drizzle Kit)

## External Dependencies

### UI Component Libraries
- **Radix UI** - Headless, accessible component primitives (dialogs, dropdowns, forms, etc.)
- **shadcn/ui** - Pre-styled component library configuration
- **lucide-react** - Icon library for consistent iconography
- **react-icons** - Additional icons (technology logos via Simple Icons)

### Styling and Design
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant styles
- **clsx** & **tailwind-merge** - Conditional className utilities

### Forms and Validation
- **React Hook Form** - Performant form state management
- **Zod** - Schema validation for TypeScript
- **@hookform/resolvers** - Integration between React Hook Form and Zod

### Data Fetching
- **@tanstack/react-query** - Server state management, caching, and synchronization
- Custom `apiRequest` helper for fetch-based API calls

### Database and ORM
- **Drizzle ORM** - Lightweight TypeScript ORM
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **Drizzle Kit** - Database migrations and schema management

### Additional Libraries
- **wouter** - Lightweight routing (~1.2KB)
- **date-fns** - Date utility library
- **embla-carousel-react** - Carousel/slider component
- **cmdk** - Command palette component
- **nanoid** - Unique ID generation

### Fonts
- **Google Fonts** - DM Sans (primary), additional display fonts
- Font loading optimized with preconnect hints

### Potential PostgreSQL Integration
The application is configured for PostgreSQL through Drizzle, with the database URL expected via environment variable (`DATABASE_URL`). The in-memory storage implementation serves as a placeholder that can be replaced with a database-backed implementation using the same interface.