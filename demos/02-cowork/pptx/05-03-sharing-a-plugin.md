---
slide: "05-03"
topic: 05-plugins
title: "Sharing a plugin"
subtitle: "Who can use an uploaded plugin and who approves it"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/02-cowork/pptx/images/05-03-sharing-a-plugin.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. A white box "Upload plugin, .zip
  package" points down into the first of four steps rising left to right like a staircase: green
  "Only you" (Share dialog, no admin), green "Specific users in your organization" (Share dialog, no
  admin), amber "Whole organization" (waits for admin approval) and grey "Public store" (submitted
  through Partner Center). Static.
order: 17
source: demos/02-cowork/05-plugins/readme.md
gamma_prompt: >
  Slide titled "Sharing a plugin", subtitle "Who can use an uploaded plugin and who approves it". Left
  column: five short bullets. Right column, wider than the left: the provided diagram showing four
  rising steps of reach for an uploaded plugin, from only you to a public store listing, with the
  admin approval step marked in amber, at its natural 16:9 aspect ratio, never cropped. White
  background, calm pastel accents. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Sharing a plugin

## Content

- A plugin is a **Microsoft 365 app**: `manifest.json`, `color.png`, `outline.png` and a `skills/` folder
- **Upload plugin** takes a `.zip`, and converts a Claude or other compatible package automatically
- **Only you** and **Specific users in your organization** need no admin
- Publishing to the **whole organization** waits for admin approval
- `wiqd` (preview) scaffolds, validates, packages and shares; store listings go through **Partner Center**

## Speaker Notes

With a plugin of your own, the next question is who can use it. This slide follows an uploaded package from your own tasks to a public listing.

Package format: a plugin uses the same Microsoft 365 app format as Teams apps, with a manifest, two icons and a skills folder of SKILL.md folders. Each skill uses the open SKILL.md format from custom skills, which is why plugin skills behave like the ones you write.

Upload: select Upload plugin under Customize > Plugins and pick a .zip package. A Claude or other compatible plugin package is converted automatically, bundled skills and connectors included.

Share without an admin: the Share dialog offers Only you or Specific users in your organization, and neither needs an admin.

Wider reach: publishing to the whole organization waits for admin approval, and public store listings are submitted through Partner Center. For code-first authoring, the preview wiqd tool scaffolds, validates, packages and shares plugins.
