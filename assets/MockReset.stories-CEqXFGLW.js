import"./iframe-CTo8X2xm.js";import{a as p,b as M,c as v}from"./index-B0qHpU6P.js";import"./preload-helper-DlceIuYc.js";import{_ as A}from"./jsx-runtime-COaHjrLd.js";function a(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/action.ts",o="dabb9ad2e5c9d782082b6741c102e77ff736c1b7",n=globalThis,t="__coverage__",r={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/action.ts",statementMap:{0:{start:{line:2,column:19},end:{line:9,column:6}},1:{start:{line:3,column:18},end:{line:3,column:26}},2:{start:{line:4,column:18},end:{line:4,column:26}},3:{start:{line:5,column:2},end:{line:8,column:5}},4:{start:{line:10,column:34},end:{line:10,column:44}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:20},end:{line:2,column:21}},loc:{start:{line:2,column:26},end:{line:9,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:3,column:18},end:{line:3,column:19}},loc:{start:{line:3,column:24},end:{line:3,column:26}},line:3},2:{name:"(anonymous_2)",decl:{start:{line:4,column:18},end:{line:4,column:19}},loc:{start:{line:4,column:24},end:{line:4,column:26}},line:4}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,file:null,sources:[],names:[],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"dabb9ad2e5c9d782082b6741c102e77ff736c1b7"},c=n[t]||(n[t]={});(!c[e]||c[e].hash!==o)&&(c[e]=r);var i=c[e];return a=function(){return i},i}a();const b=(a().s[0]++,(()=>{a().f[0]++,a().s[1]++;const e=()=>{a().f[1]++};a().s[2]++;const o=()=>{a().f[2]++};return a().s[3]++,___createMock({action1:e,action2:o})})()),{action1:u,action2:k}=(a().s[4]++,b);function l(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/MockReset.tsx",o="a22f681f8c6919d7c114f40aa6465cdc52b2d717",n=globalThis,t="__coverage__",r={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/MockReset.tsx",statementMap:{0:{start:{line:3,column:25},end:{line:16,column:1}},1:{start:{line:4,column:2},end:{line:15,column:5}},2:{start:{line:17,column:0},end:{line:21,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:25},end:{line:3,column:26}},loc:{start:{line:3,column:33},end:{line:16,column:1}},line:3}},branchMap:{},s:{0:0,1:0,2:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/MockReset.tsx"],names:[],mappings:";AACA,SAAS,SAAS,eAAe;AAS1B,aAAM,YAAY,CAAC,CAAY,MAAP;AAC7B,SACE,sBAAC,OAAG;AAAA;MACF,qBAAC,UAAM;AAAA,QAAC,SAAS;AAAA,QAAS,UAAA;AAAA;MAC1B,qBAAC,UAAM;AAAA,QAAC,SAAS;AAAA,QAAS,UAAA;AAAA;;;AAGhC;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a22f681f8c6919d7c114f40aa6465cdc52b2d717"},c=n[t]||(n[t]={});(!c[e]||c[e].hash!==o)&&(c[e]=r);var i=c[e];return l=function(){return i},i}l();l().s[0]++;const h=({})=>(l().f[0]++,l().s[1]++,A.jsxs("div",{children:[A.jsx("button",{onClick:u,children:"Button1"}),A.jsx("button",{onClick:k,children:"Button2"})]}));l().s[2]++;h.__docgenInfo={description:`MockReset

@param {Props} { }`,methods:[],displayName:"MockReset"};const{expect:s,userEvent:f,waitFor:m,within:_}=__STORYBOOK_MODULE_TEST__,g={component:h},d={parameters:{moduleMock:{mock:()=>{const e=v(u),o=v(k);return[e,o]}}},play:async({canvasElement:e,parameters:o})=>{const n=p(o,u),t=p(o,k),r=_(e);await m(()=>{s(n).not.toBeCalled(),s(t).not.toBeCalled()}),f.click(await r.findByText("Button1")),await m(()=>{s(n).toBeCalled(),s(t).not.toBeCalled()}),M(o),await m(()=>{s(n).not.toBeCalled(),s(t).not.toBeCalled()}),f.click(await r.findByText("Button2")),await m(()=>{s(n).not.toBeCalled(),s(t).toBeCalled()})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    moduleMock: {
      mock: () => {
        // The mock to be used is created here
        const mock1 = createMock(action1);
        const mock2 = createMock(action2);
        return [mock1, mock2];
      }
    }
  },
  play: async ({
    canvasElement,
    parameters
  }) => {
    const mock1 = getMock(parameters, action1);
    const mock2 = getMock(parameters, action2);
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(mock1).not.toBeCalled();
      expect(mock2).not.toBeCalled();
    });
    userEvent.click(await canvas.findByText("Button1"));
    await waitFor(() => {
      expect(mock1).toBeCalled();
      expect(mock2).not.toBeCalled();
    });

    // Reset all mock
    resetMock(parameters);
    await waitFor(() => {
      expect(mock1).not.toBeCalled();
      expect(mock2).not.toBeCalled();
    });
    userEvent.click(await canvas.findByText("Button2"));
    await waitFor(() => {
      expect(mock1).not.toBeCalled();
      expect(mock2).toBeCalled();
    });
  }
}`,...d.parameters?.docs?.source}}};const x=["Primary"];export{d as Primary,x as __namedExportsOrder,g as default};
//# sourceMappingURL=MockReset.stories-CEqXFGLW.js.map
