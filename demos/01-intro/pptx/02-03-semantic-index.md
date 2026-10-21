---
slide: "02-03"
topic: 02-how-agents-work
title: "Semantic index and RAG"
subtitle: "Answering from your content with citations"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/02-03-semantic-index.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, headings #24292f, secondary text #57606a, minimum 28px type. No heading inside
  the image. Left: a blue #eaf2ff card "Search: time off policy" and a green #e9f7ef card "Document
  title: annual leave", joined by a dashed line labelled "Different words". Each card arrows into a row
  of eight bars, captioned "Embeddings: numeric representations of meaning". Both rows arrow into a grey
  #f6f8fa panel "Semantic index, your content stored by meaning", where the two points land close
  together inside a dashed ellipse, with an amber #fff6e5 pill "Close in meaning: a match".
order: 8
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "Semantic index and RAG", subtitle "Answering from your content with citations". Layout:
  Two columns. Left column: the bullets. Right column, wider than the left: the provided diagram as an
  inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never cropped, never
  used as a background or side accent. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Semantic index and RAG

## Content

- **RAG** fetches relevant snippets from your content at question time
- The **semantic index** stores content as embeddings, numeric representations of meaning
- A search for "time off policy" also finds **"annual leave"**
- Answers built from named sources carry **citations** you can audit

## Speaker Notes

A language model on its own only knows its training data, which is generic and frozen in time. Retrieval and the semantic index let an agent answer from your content instead.

RAG: Retrieval Augmented Generation fetches relevant snippets from your content at question time and hands them to the model as context. The answer is grounded in your documents rather than the model's memory.

Semantic index: it stores your content as embeddings, numeric representations of meaning, which is what lets retrieval find the right snippets.

Time off policy and annual leave: the two match because they are close in meaning, not just in words.

Citations: because the answer is built from named sources, Copilot can cite them, and you can audit where a claim came from. In Microsoft 365 the Semantic Index for Copilot builds this over your Graph content automatically.
