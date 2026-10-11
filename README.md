<h1 align="center">GameStorm — Gaming Studio Landing Page</h1>

<p align="center"><b>A long-form gaming studio landing page with a hero slider, feature blocks, testimonials and store CTAs.</b></p>

<p align="center">
[![Live Demo](https://img.shields.io/badge/Live_Demo-▶-2ea44f?style=for-the-badge&logo=vercel&logoColor=white)](https://mister2314.github.io/Final-Project/)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=flat-square&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?style=flat-square&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-f7df1e?style=flat-square&logoColor=white)
</p>

<p align="center">[**Live demo**](https://mister2314.github.io/Final-Project/) · [Quick start](#quick-start) · [Features](#features) · [Architecture](#architecture) · [FAQ](#faq)</p>

<p align="center">
  <a href="https://mister2314.github.io/Final-Project/">
    <img src="docs/demo.gif" alt="GameStorm — Gaming Studio Landing Page — animated demo" width="88%">
  </a>
</p>

<p align="center"><sub>Live capture of the real build — 111 KB, loops forever.</sub></p>

## Overview

A full-length marketing page for a fictional game studio — the kind of page that has to hold attention across ten scroll lengths without losing its rhythm.

It covers the whole landing-page vocabulary: a hero slider, an about block, a feature grid, an office gallery, a team section, Instagram-style social proof, testimonials and app-store download buttons. Layout is CSS grid and flexbox throughout, with a JavaScript-driven slider in the hero.

## At a glance

| Field | Detail |
| --- | --- |
| **Type** | Static site — no build step |
| **Primary language** | HTML |
| **Live demo** | [mister2314.github.io/Final-Project](https://mister2314.github.io/Final-Project/) |
| **Repository** | [Mister2314/Final-Project](https://github.com/Mister2314/Final-Project) |

## Features

- Auto-advancing hero slider with manual controls
- About, feature, office-gallery and team sections
- Testimonial block with portrait cards
- Instagram-style social proof grid
- App Store / Google Play download CTAs
- Fully responsive across the whole page length
- Custom image assets prepared for each section

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (grid, flexbox, custom properties) |
| Logic | Vanilla JavaScript slider |
| Deploy | GitHub Pages |

## Architecture

```mermaid
flowchart LR
  A["Browser"] --> B["Markup<br/>HTML5"] --> C["Styling<br/>CSS3 (grid"] --> D["Logic<br/>Vanilla JavaScript slider"] --> E["Deploy<br/>GitHub Pages"] --> F["Deploy"]
```

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| <img src="docs/preview.png" alt="Desktop view"> | <img src="docs/preview-mobile.png" alt="Mobile view" width="230"> |

## Quick Start

```bash
git clone https://github.com/Mister2314/Final-Project.git
cd Final-Project

# open it directly
start index.html      # Windows
open  index.html      # macOS

# or serve the folder
npx serve .
```

## Project Structure

```
index.html — the full page, section by section
assets/css/style.css — layout and component styles
assets/js/index.js — hero slider behaviour
assets/img/ — section imagery
```

## Notes

This is the largest single-page build I have done. The lesson was about discipline: ten sections of markup only stay manageable if the class naming stays consistent from top to bottom.

## Author

**Xəyal Hüseynli** — Junior Front-End Developer

[Portfolio](https://hypnosdev.vercel.app) · [GitHub](https://github.com/Mister2314) · [LinkedIn](https://www.linkedin.com/in/x%C9%99yal-h%C3%BCseynli-3487b91ba/) · [xeyalhuseynli06@gmail.com](mailto:xeyalhuseynli06@gmail.com)
