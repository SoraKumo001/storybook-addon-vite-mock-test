/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
    {
      name: "storybook-addon-vite-mock",
      options: {
        exclude: ({ id }) => id.includes(".stories."),
        // debugPath: "tmp",
      },
    },
  ],
  build: {
    test: {
      disabledAddons: [],
    },
  },
  framework: {
    name: "@storybook/react-vite",
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
