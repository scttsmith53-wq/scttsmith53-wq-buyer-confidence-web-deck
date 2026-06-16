# Buyer Confidence Webinar Web Deck — PPT Exact Version

This version displays the actual PowerPoint slides as full-slide images on the website.

It uses the deck with these requested changes already applied:
- Slide 4, item 01: Know how much cash you need
- Slide 4, item 04: Know where buyer leverage lies
- Slide 5: Know How Much Cash You Need
- Slide 6: Qualify with Less Cash
- Slide 6 third rectangle: You May Already Qualify

## Upload / GitHub Desktop

Copy everything in this folder into your GitHub repo folder.

Your repo should contain:

app/
public/
package.json
tsconfig.json
middleware.ts
next-env.d.ts
.gitignore
README.md

Do not upload:
node_modules
.next
.env.local

## Amplify

Use the same build settings:

Frontend build command:
npm run build

Build output directory:
.next

Custom login is disabled in middleware.ts.
Use AWS Amplify's built-in Access Control / password protection.
