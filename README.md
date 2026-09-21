# A Quiet Check-In

A small, calming, interactive web app for a short daily mental wellness check-in. Open it, answer a few gentle questions about how you're doing, and leave with a short reflection and one small optional thing you could do.

**This is a personal interest project, built for fun and design practice.** It is **not** a mental health resource, a substitute for professional support, or a place to turn to in a crisis. If you or someone you know is struggling or in danger, please contact a real crisis line or emergency services — see [Not a substitute for real support](#not-a-substitute-for-real-support) below.

## What it does

- A single, unhurried call to action: "Check in with yourself"
- Three short questions, answered one at a time with simple buttons (how you're feeling, how your day has gone, what feels most important right now)
- A short, personalized, non-generic reflection built from those answers, plus a grounding thought and a small optional action to try
- No accounts, no login, no name or email, no database, no analytics, no persistent storage — answers live only in memory for the current visit and disappear on refresh or navigation away
- A quiet, always-available link to crisis resources in the footer

## Not a substitute for real support

This app does not diagnose, treat, or claim to address any mental health condition, and it is not therapy. It's a two-minute pause, nothing more. If a check-in suggests things may be heavier than a quiet moment can hold, the app surfaces crisis resources (e.g. 988 Suicide & Crisis Lifeline, Crisis Text Line) — but those resources, and a trusted person in your life, are the real answer, not this project.

## Tech stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4

Check-in questions, reflections, grounding thoughts, and suggested actions are structured data in [`src/data/checkinData.ts`](src/data/checkinData.ts), so the content is easy to extend. The app is entirely frontend — no API, no database, no auth.

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Building

```bash
npm run build
```

## Privacy

Your check-in stays with you. Answers are held only in local component state while you're on the page — nothing is sent to a server, and nothing is written to `localStorage`, cookies, or any other persistent storage. Refreshing or leaving the page clears everything.
