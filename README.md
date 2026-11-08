# Character Counter

A responsive text analysis application built with React, TypeScript, Tailwind CSS, and Zustand. Analyze text in real time with character, word, and sentence counts, reading time estimates, and letter density visualization.

**[Live Demo](https://character-counter-gamma-ten.vercel.app/)** · **[GitHub Repository](https://github.com/jzzmiiinn/character-counter)**

## Features

- **Character Count:** Count characters in real time.
- **Word Count:** Automatically calculate the number of words.
- **Sentence Count:** Count sentences using sentence-ending punctuation.
- **Exclude Spaces:** Toggle whether whitespace is included in the character count.
- **Character Limit:** Set a custom character limit and receive a warning when exceeded.
- **Reading Time:** Estimate reading time based on an average reading speed of 200 words per minute.
- **Letter Density:** Analyze letter frequency and display percentages with visual progress bars.
- **Dark and Light Themes:** Switch between different themes.
- **Persistent Storage:** Preserve entered text and selected theme using Zustand's persist middleware and browser localStorage.
- **Responsive Design:** Optimized for desktop and mobile screens.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling and responsive design |
| Zustand | Global state management |
| Zustand Persist | State persistence |
| Vite | Development server and build tool |
| pnpm | Package management |

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jzzmiiinn/character-counter.git
   ```

2. Navigate to the project directory:

   ```bash
   cd character-counter
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open the local URL displayed in your terminal.

### Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Starts the development server |
| `pnpm build` | Type-checks and builds the application |
| `pnpm lint` | Runs ESLint |
| `pnpm preview` | Previews the production build |

## Project Structure

```text
character-counter/
├── design/
│   ├── desktop-design-light.png
│   ├── desktop-desigin-dark.png
│   ├── mobile-design-light.png
│   └── mobile-design-dark.png
│
├── public/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── DM_Sans/
│   │   └── images/
│   │       ├── bg-dark-theme.png
│   │       ├── bg-light-theme.png
│   │       ├── icon-check.svg
│   │       ├── icon-info.svg
│   │       ├── icon-moon.svg
│   │       ├── icon-sun.svg
│   │       ├── logo-dark-theme.svg
│   │       ├── logo-light-theme.svg
│   │       └── pattern-*.svg
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CharacterLimit.tsx
│   │   ├── Header.tsx
│   │   ├── LetterDensity.tsx
│   │   ├── MainContent.tsx
│   │   ├── ReadingTime.tsx
│   │   ├── StatsCard.tsx
│   │   └── TextInput.tsx
│   │
│   ├── context/
│   ├── store/
│   │   └── counterStore.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── utils/
│   │   └── textAnalyzer.ts
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## State Management

Zustand manages shared application state, including:

- Text input
- Exclude spaces setting
- Character limit settings
- Theme preference

The Zustand `persist` middleware uses browser localStorage to preserve the entered text and selected theme across page refreshes.

## Learning Objectives

Through this project, I practiced:

- Building reusable React components.
- Managing global state with Zustand.
- Working with TypeScript interfaces and types.
- Using JavaScript string methods and regular expressions.
- Implementing conditional rendering.
- Creating reusable utility functions.
- Implementing responsive layouts with Tailwind CSS.
- Persisting application state using localStorage.

## Acknowledgements

This project was completed as part of a [Frontend Mentor](https://www.frontendmentor.io/) challenge.

Design assets and challenge inspiration are provided by Frontend Mentor.
