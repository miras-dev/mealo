# Mealo - Authentic Kerala Meals

A Next.js 14 website for Mealo, a meal delivery service offering authentic Kerala cuisine with calorie-aligned portions.

## 🚀 Features

- **Next.js 14 App Router** - Modern React framework with server components
- **Tailwind CSS** - Utility-first CSS framework with Relume UI components
- **Comprehensive SEO** - Meta tags, Open Graph, Twitter cards, JSON-LD schemas
- **Responsive Design** - Mobile-first approach with animations using Framer Motion
- **Dynamic Routes** - Individual blog posts and meal detail pages
- **Auto-generated Sitemap & Robots.txt** - SEO optimization

## 📁 Project Structure

```
mealo/
├── app/                      # Next.js App Router pages
│   ├── layout.jsx           # Root layout with SEO metadata
│   ├── page.jsx             # Home page
│   ├── about-us/            # About us page
│   ├── plans/               # Meal plans page
│   ├── blogs/               # Blog listing + [slug] dynamic route
│   ├── meals/               # Meals listing + [slug] dynamic route
│   ├── sitemap.js           # Auto-generated sitemap
│   └── robots.js            # Robots.txt configuration
├── components/              # React components
│   ├── shared/              # Shared components (Navbar, Footer, CTA)
│   ├── home/                # Home page components
│   ├── about-us/            # About page components
│   ├── plans/               # Plans page components
│   ├── blogs/               # Blogs page components
│   └── meal/                # Meals page components
├── lib/                     # Utility functions
│   └── seo.js              # SEO utilities and schema generators
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration with Relume presets
├── next.config.js           # Next.js configuration
├── .env.example             # Environment variables template
└── package.json             # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.0
- **Styling**: Tailwind CSS 3.4.0
- **UI Components**: Relume UI & Relume Tailwind
- **Animation**: Framer Motion 11.0.0
- **Icons**: React Icons 5.0.0
- **Language**: JavaScript (JSX)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/miras-dev/mealo.git
cd mealo
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

- **/** - Home page with hero, features, pricing, testimonials, and FAQ
- **/about-us** - Company story, values, team, and mission
- **/plans** - Meal plan options and pricing
- **/blogs** - Blog listing with nutrition and wellness insights
- **/blogs/[slug]** - Individual blog post pages
- **/meals** - This week's menu with calorie and macro information
- **/meals/[slug]** - Individual meal detail pages

## 🎨 Customization

### SEO Configuration

Edit `lib/seo.js` to customize:
- Site name and description
- Social media links
- Default OG images
- JSON-LD schemas

### Environment Variables

Add your keys to `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
# Add more as needed
```

### Styling

Tailwind configuration in `tailwind.config.js`:
- Extends Relume Tailwind presets
- Custom colors and theme extensions

## 📝 Adding Content

### Blog Posts

1. Create data source (CMS, API, or local files)
2. Edit `app/blogs/[slug]/page.jsx` to fetch content
3. Generate metadata for each post

### Meal Details

1. Create meal data structure
2. Edit `app/meals/[slug]/page.jsx` to fetch meal info
3. Add nutrition information and images

## 🔧 Configuration Files

- `next.config.js` - Next.js settings
- `tailwind.config.js` - Tailwind + Relume configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint rules
- `jsconfig.json` - Path aliases (@/ for root)

## 📱 Responsive Design

All components are mobile-first and responsive:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ⚡ Performance

- Server-side rendering (SSR)
- Static generation where possible
- Image optimization (configure with next/image)
- Automatic code splitting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is private and proprietary.

## 🐛 Known Issues

- Some components use `<img>` instead of `next/image` (warnings during build)
- Consider implementing actual CMS integration for blog posts and meals

## 📞 Support

For issues and questions:
- Create an issue in the repository
- Contact: [your-email@example.com]

---

Built with ❤️ for authentic Kerala cuisine
