# Emergency 4 Modding Encyclopedia

A GitHub Pages-ready encyclopedia for Emergency 4 modding. It is designed to feel like an EM4 menu while staying safe to publish publicly by using original CSS instead of redistributing base-game UI assets.

## What Is Included

- `index.html`: the encyclopedia page.
- `assets/css/styles.css`: EM4-inspired menu styling.
- `assets/js/app.js`: searchable article database and navigation.
- `assets/img/em4-ui`: only the converted UI PNGs currently used by the site for a closer EM4/911:FR menu appearance.
- `docs/getting-started.md`: beginner setup, installing mods, editor loading, and safe first edits.
- `docs/mod-creation-workflow.md`: practical workflow for vehicles, persons, deployables, and callouts.
- `docs/editor-manual-reference.md`: official editor manual concepts summarized into practical modding notes.
- `docs/base-game-folder-reference.md`: folder-by-folder explanation of the base game data structure.
- `docs/sdk-reference.md`: explanation of the SDK files and major script API classes.
- `docs/sdk-deep-dive.md`: practical SDK usage guide for GameObject, Person, Vehicle, Game, Mission, Interface, and action queues.
- `docs/history-and-community.md`: game history and important community mod context.
- `docs/site-design-notes.md`: explains how the site imitates the EM4 menu feel without redistributing game assets.
- `docs/github-pages.md`: how to publish it on GitHub.
- `docs/content-style.md`: how to add clean articles.
- `docs/asset-notes.md`: how to handle EM4 screenshots and menu assets safely.

## How to Open It

Open `index.html` in a browser. No server or build tool is required.

## How to Publish It

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open `Settings > Pages`.
4. Set the source to deploy from the `main` branch and `/root`.
5. Wait for GitHub to publish the Pages URL.

## How to Add Articles

Open `assets/js/app.js` and add another object to the `articles` array:

```js
{
  category: "Scripting",
  title: "New Article Title",
  tags: ["script", "example"],
  body: `
    <p>Your article text here.</p>
  `
}
```

Keep entries practical. The most useful EM4 article explains:

- What the feature does.
- Which files are touched.
- Which commands, icons, audio, prototypes, and VOs are needed.
- How to test it.
- What errors commonly happen.
