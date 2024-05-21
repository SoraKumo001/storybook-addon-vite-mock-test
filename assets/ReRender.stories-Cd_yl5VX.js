import{c as v,w as A,a as b,r as d,b as k,e as p}from"./index-DluBSlvQ.js";import"./types-BQZtEX2b.js";import"./iframe-c9USJka_.js";import{R as g}from"./index-BB-koyIc.js";import"./index-CCuEBPTq.js";import"../sb-preview/runtime.js";function o(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/message.ts",r="ead0b8d700f54c2cdac32afee4b41bcb6a32bf7e",t=window,a="__coverage__",i={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/message.ts",statementMap:{0:{start:{line:2,column:19},end:{line:9,column:6}},1:{start:{line:3,column:21},end:{line:5,column:3}},2:{start:{line:4,column:4},end:{line:4,column:20}},3:{start:{line:6,column:2},end:{line:8,column:5}},4:{start:{line:10,column:28},end:{line:10,column:38}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:20},end:{line:2,column:21}},loc:{start:{line:2,column:26},end:{line:9,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:3,column:21},end:{line:3,column:22}},loc:{start:{line:3,column:27},end:{line:5,column:3}},line:3}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:[],names:[],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ead0b8d700f54c2cdac32afee4b41bcb6a32bf7e"},n=t[a]||(t[a]={});(!n[e]||n[e].hash!==r)&&(n[e]=i);var s=n[e];return o=function(){return s},s}o();const f=(o().s[0]++,(()=>{o().f[0]++,o().s[1]++;const e=()=>(o().f[1]++,o().s[2]++,"Before");return o().s[3]++,___createMock({getMessage:e})})()),{getMessage:u}=(o().s[4]++,f);function c(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/ReRender.tsx",r="43e9ef9938625e429e99cb6edebb8c6d12cbdd2f",t=window,a="__coverage__",i={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/ReRender.tsx",statementMap:{0:{start:{line:3,column:24},end:{line:6,column:1}},1:{start:{line:4,column:16},end:{line:4,column:28}},2:{start:{line:5,column:2},end:{line:5,column:65}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:24},end:{line:3,column:25}},loc:{start:{line:3,column:32},end:{line:6,column:1}},line:3}},branchMap:{},s:{0:0,1:0,2:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/ReRender.tsx"],names:[],mappings:"AAAA,OAAO,WAAmB;AAC1B,SAAS,kBAAkB;AASpB,aAAM,WAAsB,CAAC,CAAC,MAAM;AACzC,QAAM,QAAQ,WAAW;AACzB,SAAO,oCAAC,aAAK,KAAM;AACrB;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"43e9ef9938625e429e99cb6edebb8c6d12cbdd2f"},n=t[a]||(t[a]={});(!n[e]||n[e].hash!==r)&&(n[e]=i);var s=n[e];return c=function(){return s},s}c();c().s[0]++;const h=({})=>{c().f[0]++;const e=(c().s[1]++,u());return c().s[2]++,g.createElement("div",null,e)},B={component:h},m={},l={parameters:{moduleMock:{mock:()=>[v(u)]}},play:async({canvasElement:e,parameters:r})=>{const t=A(e),a=b(r,u);a.mockReturnValue("Test1"),d(r),await k(()=>{p(t.getByText("Test1")).toBeInTheDocument()}),a.mockReturnValue("Test2"),d(r),await k(()=>{p(t.getByText("Test2")).toBeInTheDocument()})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    mock.mockReturnValue("Test1");
    render(parameters);
    await waitFor(() => {
      expect(canvas.getByText("Test1")).toBeInTheDocument();
    });
    mock.mockReturnValue("Test2");
    render(parameters);
    await waitFor(() => {
      expect(canvas.getByText("Test2")).toBeInTheDocument();
    });
  }
}`,...l.parameters?.docs?.source}}};const x=["Primary","ReRenderTest"];export{m as Primary,l as ReRenderTest,x as __namedExportsOrder,B as default};
//# sourceMappingURL=ReRender.stories-Cd_yl5VX.js.map
