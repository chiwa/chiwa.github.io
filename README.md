# Chiwa Kantawong · Portfolio

A single-page personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. GitHub Actions builds the static site for free on GitHub Pages at [chiwa.github.io](https://chiwa.github.io/).

## Local development

Use Node.js 24 LTS and npm.

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` type-checks the React source and writes the deployable site to `dist/`. Vite prints the local URLs for the development server and production preview.

## Update the content

Edit [src/data/portfolio.ts](src/data/portfolio.ts) for the introduction, biography, skill groups, leadership topics, contact links, career timeline, education, gallery, and projects.

- Replace the two `journey` examples with verified entries in reverse chronological order. Give each entry a unique `id`, a `title`, and a `description`. Add `organization` and `period` when available.
- Add the official Mamase Podcast URL to that project's `url` and set an `action` label, such as `Listen to the podcast`.
- Update the title, description, canonical URL, and social preview metadata in [index.html](index.html) when changing public branding. The social preview at `public/images/social-card.jpg` is a 1200 × 630 JPEG. Keep [public/sitemap.xml](public/sitemap.xml) and [public/robots.txt](public/robots.txt) aligned if the domain changes.

## Replace photographs

| Folder | Intended contents |
| --- | --- |
| `public/images/profile/` | Professional portrait |
| `public/images/professional/` | Workspace and technology photos |
| `public/images/fitness/` | Fitness and weight training photos |
| `public/images/lifestyle/` | Learning and everyday life photos |

1. Export web-sized WebP or JPEG copies of photos you have permission to publish. Use approximately 1200 px on the portrait's long side and 800–1200 px for gallery photos. Remove location metadata before uploading.
2. Add the files in the relevant folders. Set `profilePhoto` and each gallery item's `photo` in the data file. Use paths beginning with `/images/`, actual pixel dimensions, and a short descriptive `alt` value. Add a CSS `position` such as `50% 30%` to adjust the crop.
3. Set `galleryIsIllustrative` to `false` after replacing all the illustrative photography. The default hero uses the CK monogram until a portrait is configured.

## Add the full CV

Put the final PDF in `public/cv/`. Set `links.cv` to its path, for example `/cv/chiwa-kantawong-cv.pdf`, and set `links.cvIsProfile` to `false`. Both download buttons will then use the full CV and its label. The included PDF is a one-page summary based on the supplied career and education details.

## Deploy to GitHub Pages

1. In the [repository’s Pages settings](https://github.com/chiwa/chiwa.github.io/settings/pages), select **GitHub Actions** under **Build and deployment → Source**.
2. Push to `main`. You can also open **Actions → Build and deploy portfolio → Run workflow** and select `main`.
3. Check that the build and deploy jobs pass, then open [chiwa.github.io](https://chiwa.github.io/) and verify the gallery, social links, and CV download.

Pull requests run the build for validation. No backend, custom domain, paid service, or deployment secret is required. Vite uses the root path as required by a GitHub user site. See [GitHub’s Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) for deployment troubleshooting.
