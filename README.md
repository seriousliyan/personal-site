# Personal Website

A stylish, elegant one-page personal website built with Astro featuring smooth scroll animations and responsive design.

## Features

- Clean, modern design with gradient backgrounds
- Smooth scroll animations and fade-in effects
- Fully responsive (mobile and desktop)
- Interactive hover effects
- Parallax scrolling on hero section
- Lightweight and fast

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Visit `http://localhost:4321` in your browser

4. Build for production:
```bash
npm run build
```

The built site will be in the `dist/` folder.

## Customization

### Update Your Information

Edit `src/pages/index.astro` and replace:
- "Li Yan" with your actual name
- "Creative Developer & Designer" with your title
- Update the about section with your bio
- Add your projects to the work section
- Update contact links (email, GitHub, LinkedIn)

### Change Colors

Edit `src/styles/style.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #000000;
    --secondary-color: #333333;
    --text-dark: #000000;
    --text-light: #666666;
}
```

### Add Your Own Images

Replace the placeholder project images in `src/pages/index.astro`:
```html
<div class="placeholder-image">Project 1</div>
```

With:
```html
<img src="/images/your-project.jpg" alt="Project description">
```

Store images in the `public/` folder.

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder (`/dist`)
4. Save and wait for deployment

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Vercel

1. Import your Git repository
2. Framework preset: Astro
3. Deploy (auto-configured)

## Structure

```
personal-site/
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # Base layout component
│   ├── pages/
│   │   └── index.astro     # Main page
│   ├── styles/
│   │   └── style.css       # All styles
│   └── scripts/
│       └── animation.js    # Scroll animations
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## License

MIT
