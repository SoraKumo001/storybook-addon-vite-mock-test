import{w as p,e as A,c as M,g as k,a as v,u as C,b as f}from"./index-DluBSlvQ.js";import{r as a,R as d}from"./index-BB-koyIc.js";import"./types-BQZtEX2b.js";import"./index-CCuEBPTq.js";import"./iframe-c9USJka_.js";import"../sb-preview/runtime.js";function o(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockTest/MockTest.tsx",n="38a135617166a67b1eac02f095b1b19abf2da021",t=window,c="__coverage__",i={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockTest/MockTest.tsx",statementMap:{0:{start:{line:2,column:24},end:{line:8,column:1}},1:{start:{line:3,column:21},end:{line:3,column:33}},2:{start:{line:4,column:16},end:{line:6,column:8}},3:{start:{line:5,column:4},end:{line:5,column:20}},4:{start:{line:7,column:2},end:{line:7,column:143}},5:{start:{line:7,column:121},end:{line:7,column:131}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:24},end:{line:2,column:25}},loc:{start:{line:2,column:32},end:{line:8,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:4,column:24},end:{line:4,column:25}},loc:{start:{line:4,column:30},end:{line:6,column:3}},line:4},2:{name:"(anonymous_2)",decl:{start:{line:7,column:115},end:{line:7,column:116}},loc:{start:{line:7,column:121},end:{line:7,column:131}},line:7}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockTest/MockTest.tsx"],names:[],mappings:"AAAA,OAAO,SAAa,SAAS,gBAAgB;AAQtC,aAAM,WAAsB,CAAC,CAAC,MAAM;AACzC,QAAM,CAAC,EAAE,MAAM,IAAI,SAAS,CAAC,CAAC;AAC9B,QAAM,QAAQ,QAAQ,MAAM;AAC1B,WAAO;AAAA,EACT,GAAG,CAAC,CAAC;AACL,SACE,oCAAC,aACC,oCAAC,YAAO,SAAS,MAAM,OAAO,CAAC,CAAC,KAAI,KAAM,CAC5C;AAEJ;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"38a135617166a67b1eac02f095b1b19abf2da021"},s=t[c]||(t[c]={});(!s[e]||s[e].hash!==n)&&(s[e]=i);var r=s[e];return o=function(){return r},r}o();o().s[0]++;const y=({})=>{o().f[0]++;const[,e]=(o().s[1]++,a.useState({})),n=(o().s[2]++,a.useMemo(()=>(o().f[1]++,o().s[3]++,"Before"),[]));return o().s[4]++,d.createElement("div",null,d.createElement("button",{onClick:()=>(o().f[2]++,o().s[5]++,e({}))},n))},x={component:y},m={play:async({canvasElement:e})=>{const n=p(e);A(n.getByText("Before")).toBeInTheDocument()}},l={parameters:{moduleMock:{mock:()=>{const e=M(a.useMemo);return e.mockImplementation((n,t)=>{const c=k(a.useMemo)(n,t);return c==="Before"?"After":c}),[e]}}},play:async({canvasElement:e,parameters:n})=>{const t=p(e);A(t.getByText("After")).toBeInTheDocument();const c=v(n,a.useMemo);A(c).toBeCalled()}},u={parameters:{moduleMock:{mock:()=>{const e=M(a.useMemo);return e.mockImplementation(k(a.useMemo)),[e]}}},play:async({canvasElement:e,parameters:n})=>{const t=p(e);v(n,a.useMemo).mockImplementation((i,s)=>{const r=k(a.useMemo)(i,s);return r==="Before"?"Action":r}),C.click(await t.findByRole("button")),await f(()=>{A(t.getByText("Action")).toBeInTheDocument()})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Before")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(useMemo);
        mock.mockImplementation((fn: () => unknown, deps: DependencyList) => {
          const value = getOriginal(useMemo)(fn, deps);
          return value === "Before" ? "After" : value;
        });
        return [mock];
      }
    }
  },
  play: async ({
    canvasElement,
    parameters
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("After")).toBeInTheDocument();
    const mock = getMock(parameters, useMemo);
    expect(mock).toBeCalled();
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(useMemo);
        mock.mockImplementation(getOriginal(useMemo));
        return [mock];
      }
    }
  },
  play: async ({
    canvasElement,
    parameters
  }) => {
    const canvas = within(canvasElement);
    const mock = getMock(parameters, useMemo);
    mock.mockImplementation((fn: () => unknown, deps: DependencyList) => {
      const value = getOriginal(useMemo)(fn, deps);
      return value === "Before" ? "Action" : value;
    });
    userEvent.click(await canvas.findByRole("button"));
    await waitFor(() => {
      expect(canvas.getByText("Action")).toBeInTheDocument();
    });
  }
}`,...u.parameters?.docs?.source}}};const E=["Primary","Mock","Action"];export{u as Action,l as Mock,m as Primary,E as __namedExportsOrder,x as default};
//# sourceMappingURL=MockTest.stories-CZXk7Y76.js.map
