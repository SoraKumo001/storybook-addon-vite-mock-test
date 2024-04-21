export const setMock = globalThis.___setMock;
export const getOriginal = globalThis.___getOriginal;
export const restoreMock = (func) => {
    const original = getOriginal(func);
    setMock(func, original);
    return original;
};
