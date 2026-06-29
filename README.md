# Samarjeet & Anuradha — Luxury Hindu Wedding Website

A cinematic, fully responsive Indian Hindu wedding website built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Swiper, React Hook Form, and EmailJS.

## Features

- Cinematic loading screen with progress animation
- Premium digital wedding invitation card with 3D opening animation
- Welcome popup with Namaste greeting
- Sticky glassmorphism navigation
- Hero, countdown, love story, couple profiles
- All 13 Hindu wedding events with interactive timeline
- Masonry gallery with lightbox
- Family section, venue with Google Maps
- RSVP & contact forms via EmailJS
- Petal rain, floating hearts, sparkles, cursor trail, scroll progress

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Add a service and email template
3. Copy your IDs into `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Customization

Edit `src/data/site.ts` for couple details, events, gallery images, and family members.

## Tech Stack

- Next.js 15 · React 19 · TypeScript
- Tailwind CSS · Framer Motion · GSAP ScrollTrigger
- Lenis smooth scroll · Swiper.js
- React Hook Form · Zod · EmailJS
