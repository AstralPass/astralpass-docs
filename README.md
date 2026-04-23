# AstralPass Docs

Documentation site for AstralPass, built with Astro Starlight and intended for deployment on Cloudflare Pages.

## Domain

Production domain:
- `https://docs.astralpass.com`

## Stack

- Astro
- Starlight
- static output for Cloudflare Pages

## Project structure

```text
.
├── public/
│   └── brand/                 # public favicon and brand assets
├── src/
│   ├── assets/                # Astro-managed images (used by Starlight config)
│   ├── content/
│   │   └── docs/              # documentation content
│   │       ├── core/
│   │       ├── star-atlas/
│   │       ├── 404.mdx
│   │       └── index.mdx
│   └── styles/
│       └── custom.css         # brand-level Starlight overrides
├── astro.config.mjs
└── package.json
```

## Main sections

### Core
- About AstralPass
- Getting Started
- Linking Wallets
- Hardware Wallets
- Discord Roles
- Solo Players
- Troubleshooting
- FAQ

### Star Atlas
- Why AstralPass for Star Atlas
- Player Profiles
- Joining a DAC On-Chain
- DAC Membership and Discord Roles
- DAC Admin Basics
- Glossary

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Notes

- The site URL is configured as `https://docs.astralpass.com` in `astro.config.mjs`.
- Starlight's site logo uses an Astro-managed asset from `src/assets/`.
- Public brand files remain in `public/brand/` for direct URL use on pages like the home hero and the custom 404.
- The logo currently exists in both `src/assets/` and `public/brand/` on purpose because Starlight config needs an Astro-managed image while page-level direct URLs are simpler from `public/`.
- Copy should stay practical and user-facing. Avoid turning end-user docs into internal architecture notes.
