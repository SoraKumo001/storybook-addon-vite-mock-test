import { jest } from "@storybook/jest";
import {
  restoreMock,
  setMock,
  getOriginal as _getOriginal,
} from "../plugin/mock/index.js";
const hookFn = (hook) => {
  const fnSrc = jest.fn();
  const fn = Object.assign((...args) => {
    const result = fnSrc(...args);
    hook(fnSrc);
    return result;
  }, fnSrc);
  fn.bind(fnSrc);
  Object.defineProperty(fn, "mock", {
    get: () => {
      return fnSrc.mock;
    },
  });
  return fn;
};
export const createMock = (module) => {
  const fn = hookFn(() => {
    fn.__event?.();
  });
  const original = setMock(module, fn);
  fn.mockRestore = () => {
    restoreMock(module);
  };
  return Object.assign(fn, {
    __module: module,
    __name: `${String(module.name)}`,
    __original: original,
  });
};
export const getOriginal = (module) => {
  return _getOriginal(module);
};
export const getMock = (parameters, module) => {
  const mock = parameters.moduleMock.mocks?.find((mock) => {
    return mock.__module === module;
  });
  if (!mock) throw new Error("Can't find mock");
  return mock;
};
export const resetMock = (parameters) => {
  parameters.moduleMock.mocks?.forEach((mock) => {
    return mock.mockReset();
  });
};
export const clearMock = (parameters) => {
  parameters.moduleMock.mocks?.forEach((mock) => {
    return mock.mockClear();
  });
};
export const render = (parameters, args) => {
  parameters.moduleMock.render(args);
};
