# Muusmart Landing Page - Agent Instructions

## Project Overview

**Muusmart** is a modern, responsive landing page for a premium digital livestock marketplace platform designed for cattle producers, buyers, and veterinarians in Peru.

- **Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4
- **Internationalization**: i18next (Spanish, English, Mandarin Chinese)
- **UI Libraries**: Material-UI, Lucide React Icons, Emotion CSS-in-JS, Motion (animations)
- **Design System**: Glassmorphism with forest-green/lime-neon color palette

## Quick Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check linting
```

## Architecture & Key Files

### Component Structure
- **Page Components**: [src/components/](src/components/) - 15 reusable UI components
- **Routing**: [src/App.tsx](src/App.tsx) - Main app with HomePage & RedirectToApp routes
- **i18n Config**: [src/i18n.ts](src/i18n.ts) - Multi-language setup (ES default)

### Main Landing Page Flow
```
Hero → FairSection → AboutUs → Features → Prices → MobileApp → CallToAction → Footer
```

### Important URLs & Endpoints
- **Web App Redirect**: `https://muusmart.netlify.app` (login/register)
- **Email Contact**: `hello@muusmart.com`
- **Support**: `support@muusmart.com`

## Internationalization

### Supported Languages
- 🇪🇸 Spanish (es) - Default language - [es.json](src/i18n/es.json)
- 🇬🇧 English (en) - [en.json](src/i18n/en.json)
- 🇨🇳 Chinese Mandarin (zh) - [zh.json](src/i18n/zh.json)

### Translation Key Patterns
- `navbar.*` - Navigation bar translations
- `hero.*` - Hero section content
- `fair.*` - Fair/marketplace features
- `aboutus.*` - About us section
- `features.*` - Platform features
- `prices.*` - Pricing plans & CTA
- `testimonials.*` - User testimonials
- `mobileapp.*` - Mobile app section
- `callToAction.*` - Final CTA section
- `footer.*` - Footer links & contact

### Usage in Components
```typescript
const { t } = useTranslation();
// Access translation: t('section.key')
// Object arrays: t('section.array', { returnObjects: true }) as Array<Type>
```

## Design System & Styling

### Colors (Tailwind Custom Properties)
- **Primary**: `forest-green` (#1D3620) - Main brand color
- **Accent**: `lime-neon` (#B4FF3B) - Highlights & CTAs
- **Background**: `light-gray` (#F5F2EB) - Default page background

### Typography
- **Font**: Mulish (main), Cormorant Garamond (serif), Bebas Neue (display), Outfit
- **Font Classes**: `font-mulish`, `font-display` (custom Tailwind classes)

### Effects & Animations
- **Glassmorphism**: `backdrop-blur-sm`, `bg-opacity-96` for frosted glass effects
- **Motion Library**: Used in Hero, Features, Prices, Testimonials sections
- **Hover Effects**: Scale transforms, color transitions on interactive elements

### Responsive Breakpoints (Tailwind Standard)
- Mobile-first approach with `md:` (768px) and `lg:` (1024px) prefixes
- Drawer navigation for mobile (Material-UI Drawer component)

## Key Development Patterns

### 1. Component Structure
```typescript
export function ComponentName() {
  const { t } = useTranslation(); // Always include i18n
  const data = t('section.key', { returnObjects: true }) as Type;
  
  return (
    <motion.div // Wrap sections in motion for animations
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {/* Component JSX */}
    </motion.div>
  );
}
```

### 2. Tailwind Class Patterns
```typescript
// Gradient backgrounds
className="bg-gradient-to-b from-[#f5f2eb] to-[#eef3e6]"

// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// Hover states with transitions
className="hover:bg-lime-neon hover:text-forest-green transition-all duration-300"

// Glassmorphism
className="backdrop-blur-sm bg-white/10 border border-white/20"
```

### 3. Translation Integration
Always wrap component text with `t()` function. Use `returnObjects: true` for arrays/objects:
```typescript
const items = t('section.items', { returnObjects: true }) as Array<Item>;
items.map((item, i) => <div key={i}>{item.title}</div>)
```

### 4. Routing
- Landing page sections use hash scrolling (e.g., `onClick={() => handleScroll("features")}`)
- External navigation to web app via `window.location.href = 'https://muusmart.netlify.app/...'`
- Protected routes with `BlockedOverlay` component for restricted content

## Common Tasks

### Adding a New Component
1. Create file in [src/components/](src/components/) following existing naming convention
2. Add translations to all three i18n files
3. Import and add to HomePage flow in [src/App.tsx](src/App.tsx)
4. Wrap in motion animation with standard settings

### Updating Translation
1. Edit [src/i18n/es.json](src/i18n/es.json) (main language)
2. Update [src/i18n/en.json](src/i18n/en.json)
3. Update [src/i18n/zh.json](src/i18n/zh.json)
4. Use `t('path.to.key')` in components

### Changing Brand URLs/Emails
- Web app URL: Search for `muusmart.netlify.app` in component files
- Email: Search for `hello@muusmart.com` and `support@muusmart.com`
- Brand name: Already updated globally to "Muusmart"

## Design Quality Standards

### Accessibility (WCAG 2.1 AA Target)
- [ ] Semantic HTML (headings, buttons, links hierarchy)
- [ ] ARIA labels for interactive elements (`aria-label`, `aria-describedby`)
- [ ] Color contrast ratio ≥ 4.5:1 for text (lime-neon on light may need review)
- [ ] Keyboard navigation support (all interactive elements)
- [ ] Mobile touch targets ≥ 44x44px

### Performance Optimization
- Use `lazy` with Suspense for heavy components
- Optimize images (WebP format, responsive sizes)
- Tree-shake unused Tailwind classes
- Minimize bundle size (check with `npm run build`)

### Mobile-First Design
- Test on device sizes: 320px, 480px, 768px, 1024px, 1440px
- Ensure touch-friendly buttons (min 44px height/width)
- Readable font sizes on small screens
- Proper viewport meta tags

## File Organization

```
src/
├── components/          # Reusable UI components (15 total)
├── features/            # Feature modules (campaigns, dashboard, fair, home, marketplace, plans)
├── shared/              # Shared utilities, components, data, layouts
├── i18n/                # Translation files (ES, EN, ZH)
├── utils/               # Helper functions (consent management, etc.)
├── assets/              # Images, icons, static files
├── App.tsx              # Main routing component
├── i18n.ts              # i18next configuration
├── main.tsx             # React DOM entry point
└── index.css            # Global CSS styles
```

## Testing Notes

### Before Deployment
- [ ] Test all routes (/, /login, /register)
- [ ] Verify translations load in all 3 languages
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Test external links to muusmart.netlify.app
- [ ] Verify analytics/consent tracking if enabled

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- CSS features: CSS Grid, Flexbox, CSS custom properties

## Common Issues & Solutions

### i18n Keys Not Rendering
- Verify key path in JSON matches component `t()` call
- Check default language is Spanish (`es`)
- Inspect browser console for missing key warnings

### Style Not Applying
- Check Tailwind CSS file imports in [src/index.css](src/index.css)
- Verify custom color names in tailwind config (if exists)
- Use `@apply` directive for complex styles

### Animation Performance
- Motion library can cause jank on low-end devices
- Use `viewport` to trigger animations on scroll
- Test with Chrome DevTools Performance tab

## Related Documentation

- [Tailwind CSS Docs](https://tailwindcss.com) - Styling utility guide
- [React i18next Docs](https://react.i18next.com) - Multi-language setup
- [Motion Library Docs](https://www.framer.com/motion) - Animation patterns
- [Material-UI Components](https://mui.com) - Component library reference
