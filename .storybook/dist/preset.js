import { mergeConfig } from "vite";
import { viteMockPlugin } from "./plugin/index.js";
export const managerEntries = (entry = []) => [
  require.resolve("./manager"),
  ...entry,
];
export const viteFinal = async (config, options) => {
  return mergeConfig(config, {
    plugins: [
      viteMockPlugin({
        exclude: (id) => id.includes("?v=") || options.exclude?.(id),
      }),
    ],
  });
};
export const previewAnnotations = (entry = []) => [
  require.resolve("./preview"),
  ...entry,
];
