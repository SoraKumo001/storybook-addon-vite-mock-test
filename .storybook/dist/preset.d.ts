import type { Options, StorybookConfig } from "@storybook/types";
import { AddonOptions } from "./types.js";
export declare const managerEntries: (entry?: string[]) => string[];
export declare const viteFinal: (config: object, options: Options & AddonOptions) => Promise<Record<string, any>>;
export declare const previewAnnotations: StorybookConfig["previewAnnotations"];
