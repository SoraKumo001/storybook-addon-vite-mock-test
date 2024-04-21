import { Plugin } from "vite";
export declare const viteMockPlugin: (props?: {
    debug?: string;
    exclude?: (id: string) => boolean;
}) => Plugin;
