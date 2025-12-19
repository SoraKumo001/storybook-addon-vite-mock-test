import"./iframe-CTo8X2xm.js";import{a as A,r as u,c as b}from"./index-B0qHpU6P.js";import"./preload-helper-DlceIuYc.js";import{_ as g}from"./jsx-runtime-COaHjrLd.js";function o(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/message.ts",r="ead0b8d700f54c2cdac32afee4b41bcb6a32bf7e",t=globalThis,a="__coverage__",i={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/message.ts",statementMap:{0:{start:{line:2,column:19},end:{line:9,column:6}},1:{start:{line:3,column:21},end:{line:5,column:3}},2:{start:{line:4,column:4},end:{line:4,column:20}},3:{start:{line:6,column:2},end:{line:8,column:5}},4:{start:{line:10,column:28},end:{line:10,column:38}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:20},end:{line:2,column:21}},loc:{start:{line:2,column:26},end:{line:9,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:3,column:21},end:{line:3,column:22}},loc:{start:{line:3,column:27},end:{line:5,column:3}},line:3}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:[],names:[],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ead0b8d700f54c2cdac32afee4b41bcb6a32bf7e"},n=t[a]||(t[a]={});(!n[e]||n[e].hash!==r)&&(n[e]=i);var s=n[e];return o=function(){return s},s}o();const f=(o().s[0]++,(()=>{o().f[0]++,o().s[1]++;const e=()=>(o().f[1]++,o().s[2]++,"Before");return o().s[3]++,___createMock({getMessage:e})})()),{getMessage:d}=(o().s[4]++,f);function c(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/ReRender.tsx",r="1b82ecf061ac3d033bd9e5b459cfe64ad1aad9c2",t=globalThis,a="__coverage__",i={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/ReRender.tsx",statementMap:{0:{start:{line:3,column:24},end:{line:8,column:1}},1:{start:{line:4,column:16},end:{line:4,column:28}},2:{start:{line:5,column:2},end:{line:7,column:5}},3:{start:{line:9,column:0},end:{line:13,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:24},end:{line:3,column:25}},loc:{start:{line:3,column:32},end:{line:8,column:1}},line:3}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRender/ReRender.tsx"],names:[],mappings:";AACA,SAAS,kBAAkB;AASpB,aAAM,WAAW,CAAC,CAAY,MAAP;AAC5B,QAAM,QAAQ,WAAW;AACzB,SAAO,qBAAC,OAAI;AAAA,cAAC;AAAA;AACf;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1b82ecf061ac3d033bd9e5b459cfe64ad1aad9c2"},n=t[a]||(t[a]={});(!n[e]||n[e].hash!==r)&&(n[e]=i);var s=n[e];return c=function(){return s},s}c();c().s[0]++;const v=({})=>{c().f[0]++;const e=(c().s[1]++,d());return c().s[2]++,g.jsx("div",{children:e})};c().s[3]++;v.__docgenInfo={description:`ReRender

@param {Props} { }`,methods:[],displayName:"ReRender"};const{expect:p,waitFor:k,within:h}=__STORYBOOK_MODULE_TEST__,T={component:v},m={},l={parameters:{moduleMock:{mock:()=>[b(d)]}},play:async({canvasElement:e,parameters:r})=>{const t=h(e),a=A(r,d);a.mockReturnValue("Test1"),u(r),await k(()=>{p(t.getByText("Test1")).toBeInTheDocument()}),a.mockReturnValue("Test2"),u(r),await k(()=>{p(t.getByText("Test2")).toBeInTheDocument()})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const B=["Primary","ReRenderTest"];export{m as Primary,l as ReRenderTest,B as __namedExportsOrder,T as default};
//# sourceMappingURL=ReRender.stories-C26sv6U5.js.map
