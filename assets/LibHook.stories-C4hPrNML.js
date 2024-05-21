import{w as k,e as A,c as v,a as b,u as g,b as f}from"./index-DluBSlvQ.js";import"./types-BQZtEX2b.js";import{r as M,R as p}from"./index-BB-koyIc.js";import"./iframe-c9USJka_.js";import"./index-CCuEBPTq.js";import"../sb-preview/runtime.js";function a(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/message.ts",n="06ac5ba5d923b510d5d568bfe95fb1e9a12a7417",o=window,s="__coverage__",d={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/message.ts",statementMap:{0:{start:{line:2,column:19},end:{line:9,column:6}},1:{start:{line:3,column:21},end:{line:5,column:3}},2:{start:{line:4,column:4},end:{line:4,column:20}},3:{start:{line:6,column:2},end:{line:8,column:5}},4:{start:{line:10,column:28},end:{line:10,column:38}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:20},end:{line:2,column:21}},loc:{start:{line:2,column:26},end:{line:9,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:3,column:21},end:{line:3,column:22}},loc:{start:{line:3,column:27},end:{line:5,column:3}},line:3}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:[],names:[],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"06ac5ba5d923b510d5d568bfe95fb1e9a12a7417"},t=o[s]||(o[s]={});(!t[e]||t[e].hash!==n)&&(t[e]=d);var r=t[e];return a=function(){return r},r}a();const y=(a().s[0]++,(()=>{a().f[0]++,a().s[1]++;const e=()=>(a().f[1]++,a().s[2]++,"Before");return a().s[3]++,___createMock({getMessage:e})})()),{getMessage:m}=(a().s[4]++,y);function c(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/LibHook.tsx",n="a5064fcc48da5d4caeafe03c51ea57eb0085db13",o=window,s="__coverage__",d={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/LibHook.tsx",statementMap:{0:{start:{line:3,column:23},end:{line:7,column:1}},1:{start:{line:4,column:21},end:{line:4,column:33}},2:{start:{line:5,column:16},end:{line:5,column:28}},3:{start:{line:6,column:2},end:{line:6,column:143}},4:{start:{line:6,column:121},end:{line:6,column:131}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:23},end:{line:3,column:24}},loc:{start:{line:3,column:31},end:{line:7,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:6,column:115},end:{line:6,column:116}},loc:{start:{line:6,column:121},end:{line:6,column:131}},line:6}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/LibHook.tsx"],names:[],mappings:"AAAA,OAAO,SAAa,gBAAgB;AACpC,SAAS,kBAAkB;AASpB,aAAM,UAAqB,CAAC,CAAC,MAAM;AACxC,QAAM,CAAC,EAAE,MAAM,IAAI,SAAS,CAAC,CAAC;AAC9B,QAAM,QAAQ,WAAW;AACzB,SACE,oCAAC,aACC,oCAAC,YAAO,SAAS,MAAM,OAAO,CAAC,CAAC,KAAI,KAAM,CAC5C;AAEJ;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a5064fcc48da5d4caeafe03c51ea57eb0085db13"},t=o[s]||(o[s]={});(!t[e]||t[e].hash!==n)&&(t[e]=d);var r=t[e];return c=function(){return r},r}c();c().s[0]++;const h=({})=>{c().f[0]++;const[,e]=(c().s[1]++,M.useState({})),n=(c().s[2]++,m());return c().s[3]++,p.createElement("div",null,p.createElement("button",{onClick:()=>(c().f[1]++,c().s[4]++,e({}))},n))},E={component:h},l={play:async({canvasElement:e})=>{const n=k(e);A(n.getByText("Before")).toBeInTheDocument()}},i={parameters:{moduleMock:{mock:()=>{const e=v(m);return e.mockReturnValue("After"),[e]}}},play:async({canvasElement:e,parameters:n})=>{const o=k(e);A(o.getByText("After")).toBeInTheDocument();const s=b(n,m);A(s).toBeCalled()}},u={parameters:{moduleMock:{mock:()=>[v(m)]}},play:async({canvasElement:e,parameters:n})=>{const o=k(e);b(n,m).mockReturnValue("Action"),g.click(await o.findByRole("button")),await f(()=>{A(o.getByText("Action")).toBeInTheDocument()})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Before")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(getMessage);
        mock.mockReturnValue("After");
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
    const mock = getMock(parameters, getMessage);
    expect(mock).toBeCalled();
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(getMessage);
        return [mock];
      }
    }
  },
  play: async ({
    canvasElement,
    parameters
  }) => {
    const canvas = within(canvasElement);
    const mock = getMock(parameters, getMessage);
    mock.mockReturnValue("Action");
    userEvent.click(await canvas.findByRole("button"));
    await waitFor(() => {
      expect(canvas.getByText("Action")).toBeInTheDocument();
    });
  }
}`,...u.parameters?.docs?.source}}};const T=["Primary","Mock","Action"];export{u as Action,i as Mock,l as Primary,T as __namedExportsOrder,E as default};
//# sourceMappingURL=LibHook.stories-C4hPrNML.js.map
