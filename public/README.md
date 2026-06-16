# Buyer Confidence Webinar Web Deck — Clean Efficient Fixed Version

This is the simplified website deck.

It uses:
- `app/page.tsx` for the slide viewer
- `app/globals.css` for styling and overlays
- rendered slide images in `public/slides/`
- optional PPT download in `public/downloads/`
- AWS Amplify password protection instead of custom login

Included fixes:
- Keeps the web viewer simple and efficient
- Uses the PowerPoint slide images instead of rebuilding the deck in HTML
- Replaces corrected slide image files for slides 4, 5, and 6
- Hides old baked-in footers on slides 2–21
- Adds the correct footer only on slide 1
- Adds the full compliance block only on slide 22
- Adds readable overlay fixes for slides 8 and 16
- Keeps navigation, fullscreen, slide count, and PPT download

Upload steps:
1. Unzip this file.
2. Delete the old app/public/config files from the GitHub repo folder.
3. Copy all contents of this folder into the repo folder.
4. Commit: `Replace with clean efficient fixed web deck`
5. Push origin.
6. Let Amplify rebuild.

Do not upload:
- `node_modules`
- `.next`
- `.env.local`
