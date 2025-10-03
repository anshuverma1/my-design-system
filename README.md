# React Design System

A reusable **React + SCSS component library** with **Storybook, Jest, ESLint, and Webpack**.  
The library can be published to **npm** and Storybook is hosted for free via **Vercel + GitHub**.

---

## 🚀 Features

- **React + SCSS** component library (fully reusable across projects).
- **Storybook** for interactive component docs & usage examples.
- **MDX support** in Storybook for rich documentation pages.
- **Webpack** for bundling components.
- **Jest + React Testing Library** for unit testing.
- **ESLint** with rules for code style and React Hooks.
- **Component Generator Script** to quickly scaffold new components with boilerplate code.
- **Auto index export**: each new component is automatically exported from `src/index.ts` for npm publishing.
- Free hosting for Storybook docs on **Vercel**.
- Free publishing to **npm** for open-source/public packages.

---

## 📦 Project Structure

```
src/
  components/
    Button/
      Button.tsx
      Button.scss
      Button.stories.tsx
      Button.test.tsx
      Button.mdx
      index.ts
  index.ts        // exports all components for npm
scripts/
  create-component.ts
.storybook/       // Storybook config
```

---

## 🛠️ Getting Started

### Install Dependencies

```bash
npm install
```

### Run Storybook

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Lint Code

```bash
npm run lint
```

---

## 📚 Creating a New Component

We use a custom script to generate boilerplate for new components.

```bash
npm run create:component Button
```

This will create:

```
src/components/Button/
  Button.tsx
  Button.scss
  Button.stories.tsx
  Button.test.tsx
  Button.mdx
  index.ts
```

And automatically update `src/index.ts` with:

```ts
export { default as Button } from "./components/Button/Button";
```

---

## 📖 Storybook Docs

For each component, you can write stories in both **CSF (`.stories.tsx`)** and **MDX (`.mdx`)** formats.

Example `Button.mdx`:

```mdx
import { Canvas, Meta, Controls } from "@storybook/addon-docs/blocks";
import * as ButtonStories from "./Button.stories";

<Meta of={ButtonStories} />

# Button

<Canvas of={ButtonStories.Default} />
<Controls />
```

---

## ✅ Testing

We use **Jest** + **React Testing Library** with support for SCSS imports.

Example test (`Button.test.tsx`):

```tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders Button", () => {
  render(<Button>Hello</Button>);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
```

---

## 🧹 Linting & Code Style

- Enforces **semicolons**, **no extra empty lines**, and **React Hooks rules**.
- ESLint config includes:
  - `eslint:recommended`
  - `plugin:react/recommended`
  - `plugin:react-hooks/recommended`
  - `plugin:@typescript-eslint/recommended`

---

## 📦 Publishing to npm

1. Build your library:
   ```bash
   npm run build
   ```
2. Login to npm:
   ```bash
   npm login
   ```
3. Publish:
   ```bash
   npm publish --access public
   ```

---

## 🌐 Hosting Storybook

- Push your repo to GitHub.
- Connect it with **Vercel**.
- Deploy Storybook automatically with every commit.

---

## 📝 Roadmap

- [ ] Add `delete:component` script for cleanup.
- [ ] Add CI pipeline for testing & linting before publish.
- [ ] Improve Storybook theme and branding.

---

## 🤝 Contributing

PRs are welcome! Follow the coding style enforced by ESLint and write unit tests for all new components.

---

## 📄 License

MIT
