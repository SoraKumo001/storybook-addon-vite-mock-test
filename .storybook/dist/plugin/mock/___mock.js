const setGlobalFunction = (func) => {
  Object.entries(func).forEach(([key, value]) => {
    globalThis[key] = value;
  });
};
const funcMap = {};
const ___setMock = (func, custom) => {
  const key = "___symbol" in func && func.___symbol;
  if (!key) throw new Error("Function is not a mock");
  funcMap[key] = { ...funcMap[key], custom };
  return funcMap[key].original;
};
const ___getOriginal = (func) => {
  const key = "___symbol" in func && func.___symbol;
  if (!key) throw new Error("Function is not a mock");
  return funcMap[key].original;
};
const ___createMock = (exp) => {
  const v = Object.entries(exp).map(([key, original]) => {
    if (typeof original === "function") {
      const ___symbol = Symbol(key);
      const func = (...params) => {
        const f = funcMap[func.___symbol].custom;
        return f(...params);
      };
      func.___symbol = ___symbol;
      funcMap[___symbol] = { original, custom: original };
      Object.entries(original).forEach(([k, v]) => {
        func[k] = v;
      });
      Object.defineProperty(func, "name", { value: key });
      return [key, func];
    }
    return [key, original];
  });
  return Object.fromEntries(v);
};
const ___createCommonMock = (exp) => {
  if (typeof exp !== "object" || exp.prototype?.constructor === exp) return exp;
  if (typeof exp === "function") {
    const ___symbol = Symbol(exp.name);
    const func = (...args) => {
      const f = funcMap[func.___symbol].custom;
      return f(...args);
    };
    func.___symbol = ___symbol;
    funcMap[___symbol] = { original: exp, custom: exp };
    Object.setPrototypeOf(func, Object.getPrototypeOf(exp));
    const prototype = Object.getPrototypeOf(exp);
    const clonedObject = Object.create(prototype);
    return Object.assign(clonedObject, exp);
  }
  Object.entries(exp).forEach(([key, original]) => {
    if (
      typeof original === "function" &&
      original.prototype?.constructor !== original
    ) {
      const ___symbol = Symbol(key);
      const func = ((...params) => {
        const f = funcMap[func.___symbol].custom;
        return f(...params);
      }).bind(original);
      func.___symbol = ___symbol;
      funcMap[___symbol] = { original, custom: original };
      Object.entries(original).forEach(([k, v]) => {
        func[k] = v;
      });
      Object.setPrototypeOf(func, Object.getPrototypeOf(original));
      Object.defineProperty(func, "name", { value: key });
      exp[key] = func;
    }
  });
  return exp;
};
setGlobalFunction({
  ___setMock,
  ___createMock,
  ___createCommonMock,
  ___getOriginal,
});
export {};
