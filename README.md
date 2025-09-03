# Personal Website & Learning Platform

A modern React-based personal website featuring a portfolio, blog, thoughts, and learning platform focused on Data Structures & Algorithms and Web Development.

## 🚀 Features

- **Portfolio**: Personal branding with hero section, stats, and highlights
- **Blog Articles**: Technical articles with full content management
- **Thoughts**: Short-form content and micro-blogging
- **Learning Platform**: Video courses for DSA and Web Development
- **Discord Community**: Direct integration with Discord community
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **3D Graphics**: Interactive particle systems with Three.js
- **Responsive Design**: Mobile-first approach

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Radix UI components
- **3D Graphics**: Three.js for particle systems
- **Animations**: GSAP + Framer Motion
- **Deployment**: Netlify ready

## 📦 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production (Netlify)

```bash
# Build for Netlify deployment
npm run build:netlify
```

## 🌐 Deployment

This project is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Set build command: `npm run build:netlify`
3. Set publish directory: `dist/public`
4. Deploy!

The `netlify.toml` file is already configured with:
- Build settings
- Redirect rules for client-side routing
- Environment variables

## 📝 Content Management

- Articles are stored in `client/src/data/articles.json`
- Thoughts are stored in `client/src/data/thoughts.json`
- Course data is managed in `client/src/pages/learn.tsx`

## 🎯 Focus Areas

This platform specifically focuses on:
- **Data Structures & Algorithms**: Comprehensive DSA learning materials
- **Web Development**: Modern web development techniques and best practices

## 🔧 Configuration

Update the Discord invite link in `client/src/components/sections/NewsletterSection.tsx`:

```typescript
const handleDiscordJoin = () => {
  window.open('https://discord.gg/YOUR_DISCORD_INVITE', '_blank');
};
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance

- Static site generation for fast loading
- Optimized images and assets
- Efficient code splitting
- Modern JavaScript features