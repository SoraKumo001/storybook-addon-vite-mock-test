import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          exclude: ["virtual:___mock.js"],
        },
      },
    },
    {
      name: "storybook-addon-vite-mock",
      options: {
        exclude: ({ id }) => id.includes(".stories."),
        // debugPath: "tmp",
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
