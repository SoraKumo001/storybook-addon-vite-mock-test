export declare const ADDON_ID = "storybook-addon-node-info";
export declare const TAB_ID = "storybook-addon-node-info/tab";
export type NodeInfo = {
    tag: string;
    role: string;
    accessibility: {
        [key: string]: string;
    };
    label: string | null;
    display: string | undefined;
    testId: string | null;
    placeholder: string | null;
    text: string | undefined;
};
