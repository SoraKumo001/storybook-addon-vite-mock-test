import{_ as g}from"./iframe-CTo8X2xm.js";import{a as v,c as f}from"./index-B0qHpU6P.js";import{_ as p}from"./jsx-runtime-COaHjrLd.js";import"./preload-helper-DlceIuYc.js";function c(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/message.ts",n="06ac5ba5d923b510d5d568bfe95fb1e9a12a7417",o=globalThis,s="__coverage__",d={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/message.ts",statementMap:{0:{start:{line:2,column:19},end:{line:9,column:6}},1:{start:{line:3,column:21},end:{line:5,column:3}},2:{start:{line:4,column:4},end:{line:4,column:20}},3:{start:{line:6,column:2},end:{line:8,column:5}},4:{start:{line:10,column:28},end:{line:10,column:38}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:20},end:{line:2,column:21}},loc:{start:{line:2,column:26},end:{line:9,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:3,column:21},end:{line:3,column:22}},loc:{start:{line:3,column:27},end:{line:5,column:3}},line:3}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:[],names:[],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"06ac5ba5d923b510d5d568bfe95fb1e9a12a7417"},a=o[s]||(o[s]={});(!a[e]||a[e].hash!==n)&&(a[e]=d);var r=a[e];return c=function(){return r},r}c();const h=(c().s[0]++,(()=>{c().f[0]++,c().s[1]++;const e=()=>(c().f[1]++,c().s[2]++,"Before");return c().s[3]++,___createMock({getMessage:e})})()),{getMessage:m}=(c().s[4]++,h);function t(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/LibHook.tsx",n="9081f60cb11496554f11f16911036bfccaaa4af8",o=globalThis,s="__coverage__",d={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/LibHook.tsx",statementMap:{0:{start:{line:4,column:23},end:{line:13,column:1}},1:{start:{line:5,column:21},end:{line:5,column:33}},2:{start:{line:6,column:16},end:{line:6,column:28}},3:{start:{line:7,column:2},end:{line:12,column:5}},4:{start:{line:9,column:21},end:{line:9,column:31}},5:{start:{line:14,column:0},end:{line:18,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:23},end:{line:4,column:24}},loc:{start:{line:4,column:31},end:{line:13,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:9,column:15},end:{line:9,column:16}},loc:{start:{line:9,column:21},end:{line:9,column:31}},line:9}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/LibHook/LibHook.tsx"],names:[],mappings:";AAAA,SAAgB,gBAAoB;AACpC,SAAS,kBAAkB;AASpB,aAAM,UAAU,CAAC,CAAY,MAAP;AAC3B,QAAM,CAAC,EAAE,MAAM,IAAI,SAAS,CAAC,CAAC;AAC9B,QAAM,QAAQ,WAAW;AACzB,SACE,qBAAC,OAAG;AAAA,IACF,UAAA,qBAAC,UAAM;AAAA,MAAC,SAAS,MAAI,OAAS,CAAC,CAAC;AAAA,MAAI,UAAA;AAAA;;AAG1C;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9081f60cb11496554f11f16911036bfccaaa4af8"},a=o[s]||(o[s]={});(!a[e]||a[e].hash!==n)&&(a[e]=d);var r=a[e];return t=function(){return r},r}t();t().s[0]++;const b=({})=>{t().f[0]++;const[,e]=(t().s[1]++,g.useState({})),n=(t().s[2]++,m());return t().s[3]++,p.jsx("div",{children:p.jsx("button",{onClick:()=>(t().f[1]++,t().s[4]++,e({})),children:n})})};t().s[5]++;b.__docgenInfo={description:`LibHook

@param {Props} { }`,methods:[],displayName:"LibHook"};const{expect:u,userEvent:M,waitFor:_,within:k}=__STORYBOOK_MODULE_TEST__,S={component:b},l={play:async({canvasElement:e})=>{const n=k(e);u(n.getByText("Before")).toBeInTheDocument()}},i={parameters:{moduleMock:{mock:()=>{const e=f(m);return e.mockReturnValue("After"),[e]}}},play:async({canvasElement:e,parameters:n})=>{const o=k(e);u(o.getByText("After")).toBeInTheDocument();const s=v(n,m);u(s).toBeCalled()}},A={parameters:{moduleMock:{mock:()=>[f(m)]}},play:async({canvasElement:e,parameters:n})=>{const o=k(e);v(n,m).mockReturnValue("Action"),M.click(await o.findByRole("button")),await _(()=>{u(o.getByText("Action")).toBeInTheDocument()})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const T=["Primary","Mock","Action"];export{A as Action,i as Mock,l as Primary,T as __namedExportsOrder,S as default};
//# sourceMappingURL=LibHook.stories-BWTCV6dF.js.map
