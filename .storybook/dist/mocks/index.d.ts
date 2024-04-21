import { ModuleMock } from "../ModuleMock/types.js";
import type { Parameters as P } from "@storybook/react";
export declare const createMock: <T extends (...args: any[]) => unknown>(module: T) => ModuleMock<T>;
export declare const getOriginal: <T extends (...args: any[]) => unknown>(module: T) => T;
export declare const getMock: <T extends (...args: any[]) => unknown>(parameters: P, module: T) => ModuleMock<T>;
export declare const resetMock: (parameters: P) => void;
export declare const clearMock: (parameters: P) => void;
export declare const render: (parameters: P, args?: {
    [key: string]: unknown;
}) => void;
