// scripts/create-component.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Please provide a component name");
  process.exit(1);
}

const componentDir = path.join(
  __dirname,
  "..",
  "src",
  "components",
  componentName
);

// Template contents for each file
const templates: Record<string, string> = {
  [`${componentName}.tsx`]: `import React from "react";
import "./${componentName}.scss";

interface ${componentName}Props {
  children?: React.ReactNode;
}

const ${componentName}: React.FC<${componentName}Props> = ({ children }) => {
  return <div className="${componentName.toLowerCase()}">{children}</div>;
};

export default ${componentName};
`,

  [`${componentName}.scss`]: `.${componentName.toLowerCase()} {
  /* styles go here */
}
`,

  [`${componentName}.stories.tsx`]: `import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "./${componentName}";

const meta: Meta<typeof ${componentName}> = {
  title: "Components/${componentName}",
  component: ${componentName},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
    children: "${componentName} works!",
  },
};
`,

  [`${componentName}.test.tsx`]: `
import React from "react";
import { render, screen } from "@testing-library/react";
import ${componentName} from "./${componentName}";

test("renders ${componentName}", () => {
  render(<${componentName}>Hello</${componentName}>);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
`,

  [`${componentName}.mdx`]: `import { Canvas, Meta, Controls } from "@storybook/addon-docs/blocks";
import * as ${componentName}Stories  from "./${componentName}.stories";

<Meta of={${componentName}Stories} />

# ${componentName}

<Canvas of={${componentName}Stories.Default} />
<Controls />
`,

  ["index.ts"]: `export { default } from "./${componentName}";
`,
};

// Create folder and files
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

Object.entries(templates).forEach(([fileName, content]) => {
  const filePath = path.join(componentDir, fileName);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Created ${fileName}`);
  } else {
    console.log(`⚠️ Skipped ${fileName} (already exists)`);
  }
});

// Update root src/index.ts
const rootIndexPath = path.join(__dirname, "..", "src", "index.ts");
const exportLine = `export { default as ${componentName} } from "./components/${componentName}/${componentName}";\n`;

// Append if not already there
let current = "";
if (fs.existsSync(rootIndexPath)) {
  current = fs.readFileSync(rootIndexPath, "utf8");
}
if (!current.includes(exportLine)) {
  fs.appendFileSync(rootIndexPath, exportLine);
}

console.log(`✅ Component ${componentName} created and index.ts updated!`);
