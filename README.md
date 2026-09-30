# QuizPlay React + Vite + Vercel

This is a front-end quiz-platform demo inspired by the visual patterns of modern interactive quiz websites.

## Important
This project intentionally uses original branding, copy, illustrations and CSS instead of copying a proprietary website's exact assets or source code.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option A — GitHub (recommended)
1. Create a GitHub repository.
2. Upload all files from this folder.
3. Go to Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect Vite automatically.
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click Deploy.
9. Copy the generated `vercel.app` URL and share it with your professor.

### Option B — Vercel Drop
Vercel also supports dragging a project folder/zip into its Drop workflow. If Vercel asks for build settings, use:
- Framework: Vite
- Build command: npm run build
- Output directory: dist

## What is implemented

- Responsive navigation
- Hero section with QR-style visual
- Create / Host / Play / Learn feature cards
- Social gathering section
- Kids learning section
- Study section
- Pricing cards
- FAQ accordion
- Join-game modal with PIN and nickname
- Login/start-account demo modals
- Host-game demo
- Study-set demo
- Toast notifications
- Mobile responsive layout

## Backend note

The live multiplayer behavior of a real quiz platform needs a server/realtime database. This project focuses on the front end as requested. The Join and Host flows are interactive simulations using browser state.
