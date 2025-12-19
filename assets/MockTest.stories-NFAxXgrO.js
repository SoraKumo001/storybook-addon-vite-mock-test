import{_ as a}from"./iframe-CTo8X2xm.js";import{a as M,c as v,g as k}from"./index-B0qHpU6P.js";import{_ as p}from"./jsx-runtime-COaHjrLd.js";import"./preload-helper-DlceIuYc.js";function n(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockTest/MockTest.tsx",o="991a6c48839788e7a4828824c5193b71e360abf0",t=globalThis,c="__coverage__",i={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockTest/MockTest.tsx",statementMap:{0:{start:{line:3,column:24},end:{line:14,column:1}},1:{start:{line:4,column:21},end:{line:4,column:33}},2:{start:{line:5,column:16},end:{line:7,column:8}},3:{start:{line:6,column:4},end:{line:6,column:20}},4:{start:{line:8,column:2},end:{line:13,column:5}},5:{start:{line:10,column:21},end:{line:10,column:31}},6:{start:{line:15,column:0},end:{line:19,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:24},end:{line:3,column:25}},loc:{start:{line:3,column:32},end:{line:14,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:5,column:24},end:{line:5,column:25}},loc:{start:{line:5,column:30},end:{line:7,column:3}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:10,column:15},end:{line:10,column:16}},loc:{start:{line:10,column:21},end:{line:10,column:31}},line:10}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockTest/MockTest.tsx"],names:[],mappings:";AAAA,SAAoB,SAAS,gBAAgB;AAQtC,aAAM,WAAW,CAAC,CAAY,MAAP;AAC5B,QAAM,CAAC,EAAE,MAAM,IAAI,SAAS,CAAC,CAAC;AAC9B,QAAM,QAAQ,QAAQ,MAAI;AACxB,WAAO;AAAA,EACT,GAAG,CAAC,CAAC;AACL,SACE,qBAAC,OAAG;AAAA,IACF,UAAA,qBAAC,UAAM;AAAA,MAAC,SAAS,MAAI,OAAS,CAAC,CAAC;AAAA,MAAI,UAAA;AAAA;;AAG1C;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"991a6c48839788e7a4828824c5193b71e360abf0"},s=t[c]||(t[c]={});(!s[e]||s[e].hash!==o)&&(s[e]=i);var r=s[e];return n=function(){return r},r}n();n().s[0]++;const f=({})=>{n().f[0]++;const[,e]=(n().s[1]++,a.useState({})),o=(n().s[2]++,a.useMemo(()=>(n().f[1]++,n().s[3]++,"Before"),[]));return n().s[4]++,p.jsx("div",{children:p.jsx("button",{onClick:()=>(n().f[2]++,n().s[5]++,e({})),children:o})})};n().s[6]++;f.__docgenInfo={description:`MockTest

@param {Props} { }`,methods:[],displayName:"MockTest"};const{expect:u,userEvent:y,waitFor:g,within:d}=__STORYBOOK_MODULE_TEST__,_={component:f},m={play:async({canvasElement:e})=>{const o=d(e);u(o.getByText("Before")).toBeInTheDocument()}},A={parameters:{moduleMock:{mock:()=>{const e=v(a.useMemo);return e.mockImplementation((o,t)=>{const c=k(a.useMemo)(o,t);return c==="Before"?"After":c}),[e]}}},play:async({canvasElement:e,parameters:o})=>{const t=d(e);u(t.getByText("After")).toBeInTheDocument();const c=M(o,a.useMemo);u(c).toBeCalled()}},l={parameters:{moduleMock:{mock:()=>{const e=v(a.useMemo);return e.mockImplementation(k(a.useMemo)),[e]}}},play:async({canvasElement:e,parameters:o})=>{const t=d(e);M(o,a.useMemo).mockImplementation((i,s)=>{const r=k(a.useMemo)(i,s);return r==="Before"?"Action":r}),y.click(await t.findByRole("button")),await g(()=>{u(t.getByText("Action")).toBeInTheDocument()})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Before")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const x=["Primary","Mock","Action"];export{l as Action,A as Mock,m as Primary,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=MockTest.stories-NFAxXgrO.js.map
