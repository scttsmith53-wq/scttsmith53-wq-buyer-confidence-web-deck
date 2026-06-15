# Buyer Confidence Webinar — Coded Web Deck

This version fixes the PowerPoint problem by making the deck **code-driven**.

Instead of editing full-slide images every time wording changes, the text, order, cards, colors, and speaker notes live in editable code.

## What this includes

- Next.js web app
- Login page with username/password
- Protected presenter deck
- Arrow navigation
- Keyboard navigation
- Speaker notes panel
- Slide number/progress
- Fullscreen mode
- Data-driven slide content in `data/slides.ts`
- Native HTML/CSS text, so edits do not require re-generating slide images

## Login

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Then change:

```text
DECK_USERNAME=scott
DECK_PASSWORD=your-password
DECK_ACCESS_TOKEN=your-long-random-secret
```

Do **not** commit `.env.local` to GitHub.

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deploy to AWS Amplify

1. Push this folder to GitHub.
2. In AWS Amplify, connect the GitHub repo.
3. Use the build command:
   ```bash
   npm run build
   ```
4. Use the output/start command:
   ```bash
   npm run start
   ```
5. Add environment variables in Amplify:
   - `DECK_USERNAME`
   - `DECK_PASSWORD`
   - `DECK_ACCESS_TOKEN`
6. Add a custom domain such as:
   ```text
   deck.smithapprovesme.com
   ```

## How to edit slides

Open:

```text
data/slides.ts
```

Each slide has:
- `title`
- `type`
- `speakerNotes`
- content fields like `cards`, `items`, `headline`, etc.

Example:

```ts
{
  type: "overview",
  title: "5 Things Worth Knowing Before You Buy",
  cards: [
    { number: "01", title: "Know how much cash you need", image: "cash-options" },
    { number: "02", title: "Build the right team early", image: "team" }
  ]
}
```

## Images

Right now, image areas use clean branded placeholders based on the image map.  
To add real images, place files in:

```text
public/assets/
```

Then change the `image` field in `data/slides.ts` from a placeholder key to the image filename, such as:

```ts
image: "home-exterior.jpg"
```

This way the layout and wording stay editable in code.
