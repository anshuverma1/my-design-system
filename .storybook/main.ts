import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (storybookConfig) => {
    // Add alias for @styles
    storybookConfig.resolve = {
      ...(storybookConfig.resolve || {}),
      alias: {
        ...(storybookConfig.resolve?.alias || {}),
        "@styles": path.resolve(__dirname, "../src/styles"),
      },
    };

    storybookConfig.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, "../src")],
            },
          },
        },
      ],
    });

    return storybookConfig;
  },
};

export default config;
