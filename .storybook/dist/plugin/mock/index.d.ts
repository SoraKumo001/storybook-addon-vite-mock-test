export declare const setMock: <T extends Function>(func: T, custom: T) => T;
export declare const getOriginal: <T extends Function>(func: T) => T;
export declare const restoreMock: <T extends Function>(func: T) => T;
