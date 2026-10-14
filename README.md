# drjustinzhan.com: Maintenance Guide

A static site with no build step. Upload the folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, or UC web hosting).

```
drjustinzhan/
├── index.html         Home and biography
├── research.html      Research interests
├── teaching.html      Courses taught
├── js/
│   ├── data.js        ✏️ ALL CONTENT. This is the only file you normally edit.
│   ├── main.js        Layout logic. Leave alone.
│   └── theme.js       Colour palette (UC Red, Charcoal, Slate White)
└── images/
    └── headshot.jpg   Drop a professional photo here (portrait, about 1200px tall)
```

## Making common updates

Open `js/data.js` in any text editor and change the text between the quotation marks.

**Add a course.** Copy one line inside `teaching` and edit it:
```js
{ term: "Spring 2027", code: "CS 6000", title: "Course Title", level: "Graduate" },
```

**Add a link.** Replace `"#TODO"` with the full URL:
```js
scholar: { label: "Google Scholar", url: "https://scholar.google.com/citations?user=XXXX" },
```

**Add or edit a research area.** Copy one `{ title, description, keywords }` block inside `researchAreas`.

**Change the biography.** Edit the paragraphs under `person.bio`.

Save the file and refresh the browser. Nothing else needs to change.

## Local preview

Open `index.html` in a browser. For the most reliable preview, run `python3 -m http.server 8000` in the folder and visit `http://localhost:8000`.

## Deployment checklist for drjustinzhan.com

1. Replace every `#TODO` in `js/data.js`.
2. Add `images/headshot.jpg`.
3. Confirm the CincySI link points to `https://cincysi.si`.
4. Check the layout at phone, tablet, and desktop widths.
5. Point the domain's DNS records at the static host and enable HTTPS.
