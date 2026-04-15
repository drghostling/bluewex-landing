# Bluewex — Landing Page

Landing page for [Bluewex](https://bluewex.co) — privacy scanner app for iOS & Android.

## Structure

```
bluewex/
├── index.html        # Main landing page
├── privacy.html      # Privacy Policy + Terms of Use
├── assets/
│   └── screenshots.png   # App screenshot image
└── README.md
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. No build configuration needed — Vercel detects static HTML automatically
4. Add custom domain `bluewex.co` in Vercel project settings

## Features

- EN / ES / TR language switcher (client-side JS, no dependencies)
- Phosphor Icons via CDN
- All download CTAs use Adjust magic link (auto-detects iOS/Android)
- Fully responsive
- No build step required

## Download Links

All download buttons use the Adjust magic link:
```
https://app.adjust.com/1z8biw5h
```
This automatically redirects to App Store on iOS and Google Play on Android.

## Customization

- Colors: Edit CSS variables in `index.html` (`:root` block)
- Translations: Edit the `T` object in the `<script>` at the bottom of `index.html`
- Screenshots: Replace `assets/screenshots.png`
