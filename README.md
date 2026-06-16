# Buyer Confidence Webinar Web Deck — Fixed v3

This version fixes the issue where the previous upload still showed old slide images.

Key changes:
- Uses JPG slide files: public/slides/slide-01.jpg through slide-22.jpg
- The website code points to .jpg files, not old .png files
- Slide 1 footer/disclosure is baked into slide-01.jpg
- Slides 2–21 have old baked footers removed from the images
- Slide 22 compliance block is baked into slide-22.jpg
- Slide 4, 5, 6, 8, 14, and 16 are corrected as images
- CSS now forces the full slide to fit in the viewer instead of cropping

IMPORTANT: When uploading this to GitHub, delete the old public/slides folder first.
If old slide-04.png files remain, they will not be used by this version, but deleting the old folder avoids confusion.
