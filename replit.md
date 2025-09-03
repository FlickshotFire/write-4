# Personal Website/Blog Platform

## Overview
A full-stack React application featuring a personal portfolio, blog, thoughts, and video learning platform. Built with TypeScript, Express.js backend, React frontend with Vite, and PostgreSQL database integration.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + Radix UI components
- **3D Graphics**: Three.js for particle systems
- **Animations**: GSAP + Framer Motion

## Current State
- ✅ Development environment configured
- ✅ Dependencies installed (Node.js packages)
- ✅ Development server running on port 5000
- ✅ Frontend and backend integrated
- ✅ Vite configured for Replit proxy (allowedHosts: true)
- ✅ Mock data routes for articles and thoughts
- 🔄 Database schema defined but migrations not yet run

## Key Features
- Personal portfolio with hero section, about, stats
- Article/blog system with full content management
- Thoughts/micro-blog functionality
- Video learning platform structure
- Interactive particle systems with Three.js
- Responsive design with modern UI components

## Database Schema
Tables defined in `shared/schema.ts`:
- `articles` - Blog posts with content, categories, likes, comments
- `thoughts` - Short-form content/micro-blogs
- `courses` - Video course metadata
- `videos` - Individual video content within courses
- `users` - User authentication system

## API Routes
- `GET /api/articles` - List all articles
- `GET /api/articles/:id` - Get specific article
- `GET /api/thoughts` - List all thoughts
- `GET /api/thoughts/:id` - Get specific thought

## Pages Structure
- **Home (/)** - Landing page with hero section, stats, and highlights
- **Articles (/articles)** - Complete articles listing with category filtering
- **Thoughts (/thoughts)** - Clean thoughts feed without social features
- **Learn (/learn)** - Video learning platform with featured courses
- **About (/about)** - Personal profile and professional information
- **Individual content pages**: /article/:id, /thought/:id, /course/:id

## Development
- Run: `npm run dev` (configured as workflow on port 5000)
- Build: `npm run build`
- Database: `npm run db:push` (when PostgreSQL configured)

## Recent Changes (Latest Updates)
- 2025-09-03: Imported from GitHub, configured for Replit environment
- 2025-09-03: Fixed dependencies, configured development workflow
- 2025-09-03: Verified frontend/backend integration working
- 2025-09-03: Application successfully running with mock data
- 2025-09-03: **MAJOR TRANSFORMATION COMPLETED**:
  - Reverted to original electric blue/purple color scheme (user preference)
  - Fixed header overlap issues and improved code snippet styling
  - Enhanced playlist page with real YouTube videos and embedded players
  - Removed like/comment functionality from thoughts section (no database)
  - Created dedicated pages: Articles (/articles), Thoughts (/thoughts), Learn (/learn), About (/about)
  - Updated navigation system to use page routing instead of section scrolling
  - Polished all components for premium, billion-dollar-worthy platform experience

## User Preferences
- Full-stack TypeScript development
- Modern React patterns with hooks
- Comprehensive component library (Radix UI)
- Professional portfolio/blog platform