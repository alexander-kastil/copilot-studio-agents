---
slide: "05-02"
topic: 05-plugins
title: "Where plugins fit"
subtitle: "The dietitian plugin's skills beside the built-in Word skill"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/02-cowork/pptx/images/05-02-nutrition-packet.png
photo-link: demos/02-cowork/pptx/images/05-02-nutrition-packet.png
visual-prompt: >
  Screenshot from the plugins demo run (pool 02-05-016, 940x431), native crop 0,0,832,431 without the
  grey margin on the right: the top of Client Nutrition Packet - NUT-2041 in the Word preview, with
  the DRAFT header line, the bold DRAFT ONLY line under the title and Part 1, the internal clinical
  assessment, built from fictional training data.
order: 16
source: demos/02-cowork/05-plugins/demo-01-plugins.md
gamma_prompt: >
  Slide titled "Where plugins fit", subtitle "The dietitian plugin's skills beside the built-in Word
  skill". Left column: five short bullets on installing the dietitian plugin, its two skills, the
  Plugins list, the compiled packet and sharing. Right column, wider than the left: the provided
  screenshot of the client nutrition packet with its draft-only line, as an inline content image at
  its natural aspect ratio, never cropped. White background. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
---

# Where plugins fit

## Content

- **Upload** the dietitian package under Customize > Add > Upload and publish it to Only you
- Its skills **clinical-nutrition** and **dietary-communication** draft the assessment and the client handout
- Each loads with a **Reviewed custom skill** step and joins **Plugins** next to the built-in Word
- **Word** compiles both drafts into Client Nutrition Packet - NUT-2041, the DRAFT ONLY line on top
- Sharing with specific people needs **no admin**; the whole organization waits for admin approval

## Speaker Notes

This demo steps out of the Aurora Outdoor scenario on purpose, because a plugin brings expertise from its own domain. You play a registered dietitian, and the screenshot is the packet Cowork compiled from a fictional client intake form.

Upload: the dietitian plugin comes from the community awesome-copilot-cowork-plugins repository as a manifest.json, icon PNGs and a skills/ folder. Zip them with manifest.json at the root, upload under Customize > Add > Upload and keep Only you in the Publish dialog.

Two skills: clinical-nutrition calculates energy and protein needs and interprets the labs, and dietary-communication turns that into a plain-language handout. The handout keeps the client's West African dishes and gives amounts in cups and spoons.

Plugins list: each plugin skill loads with a Reviewed custom skill step and appears under Plugins as dietitian (clinical-nutrition), next to the built-in Word. There is no separate mode to switch into.

Word: the built-in Word skill compiles both drafts in a background task of around ten minutes. The bold DRAFT ONLY line sits directly under the title, and the client handout starts on its own page.

Sharing: Only you and Specific users in your organization need no admin, while publishing to the whole organization waits for admin approval. Public store listings go through Partner Center.
