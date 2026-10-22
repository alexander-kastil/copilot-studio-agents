---
slide: "07-01"
topic: 07-evaluations
title: "Evaluating agents with test sets"
subtitle: "Fill a set, run it, change one thing, run it again"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/07-01-test-set-loop.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f, pastel fills, no heading inside the image. Left: three stacked blue boxes "Quick
  conversation set", "CSV upload" and "Write questions yourself", joined into one arrow to a purple
  box "Test set", then an arrow to a green box "Run". From Run a clockwise loop of elbow arrows: up
  to a grey box "Score and per-case verdicts", right and down to an amber box "Diagnose one failing
  case", down and left to a blue box "Change exactly one component", and left and up back to Run.
  SMIL animation on a 7 second loop: an amber outline steps from the three sources to Test set,
  Run, Score, Diagnose, Change and back to Run. Complete and readable at t=0.
order: 23
source: demos/06-cs-gh-copilot/07-evaluations/readme.md
gamma_prompt: >
  Slide titled "Evaluating agents with test sets", subtitle "Fill a set, run it, change one thing,
  run it again". Left column: five short bullets on what a test set holds and the three ways to
  fill it, the General quality test method, the user profile a run executes as, clearing Invalid
  and Error before reading Pass and Fail, and changing one thing per run. Right column, wider than
  the left: the provided diagram showing three ways to fill a test set feeding one run, then a loop
  from score and per-case verdicts to diagnosing one failing case, changing exactly one component
  and running again, at its natural 16:9 aspect ratio, never cropped. White background, calm pastel
  accents. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
---

# Evaluating agents with test sets

## Content

- **Test set**: conversations of user questions with optional expected responses, filled by Quick conversation set, CSV upload or by hand
- **General quality**: the one test method on the Evaluate tab; it judges relevance and completeness and does not compare to the expected response
- **User profile**: the identity a run executes as, matched to the access real users have
- **Invalid and Error**: about the run or the case, so clear them before reading Pass and Fail
- **One change per run**: baseline, one change, re-run the same set, compare the cases that flipped

## Speaker Notes

This slide shows how to test a GitHub Copilot agent before release: run a test set on the Evaluate tab, which sits between Preview and Monitor. Walk the diagram from the three ways to fill a set into the run and around the loop.

Test set: each conversation is one test case, a sequence of user questions with optional expected responses, and the evaluation is the named set they belong to. Quick conversation set generates ten conversations from the agent's own description and instructions, a CSV upload carries the set between environments, and writing questions by hand is the only way to get the guardrail and off-topic cases that hurt.

General quality: it is the only test method on the Evaluate tab, it applies to the whole set, and it judges relevance and completeness without comparing the answer to the expected response. A confidently worded wrong answer can therefore pass, so read what the agent said; the comparing graders are on a Standard agent's Evaluation page.

User profile: the run executes as this identity, which decides what knowledge and connections the agent can reach. An over-privileged profile produces the most flattering and least useful score, so match it to the audience and check that its connections show ready.

Invalid and Error: Invalid means the case could not be graded, and Error means the run itself failed, for example authentication under the selected user profile. Both are your problem rather than the agent's, so clear them before reading Pass and Fail.

One change per run: language-model graders move a few percent between runs, so a case that flips from fail to pass is the signal rather than a small score move. Change one component, re-run the identical set and record the result; a drop then blocks promotion until it is explained.
