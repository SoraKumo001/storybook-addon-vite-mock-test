import{c as v,a as p,w as C,b as m,e as r,u as b,d as f}from"./index-DluBSlvQ.js";import"./types-BQZtEX2b.js";import"./iframe-c9USJka_.js";import{R as u}from"./index-BB-koyIc.js";import"./index-CCuEBPTq.js";import"../sb-preview/runtime.js";function a(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/action.ts",o="dabb9ad2e5c9d782082b6741c102e77ff736c1b7",t=window,n="__coverage__",s={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/action.ts",statementMap:{0:{start:{line:2,column:19},end:{line:9,column:6}},1:{start:{line:3,column:18},end:{line:3,column:26}},2:{start:{line:4,column:18},end:{line:4,column:26}},3:{start:{line:5,column:2},end:{line:8,column:5}},4:{start:{line:10,column:34},end:{line:10,column:44}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:20},end:{line:2,column:21}},loc:{start:{line:2,column:26},end:{line:9,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:3,column:18},end:{line:3,column:19}},loc:{start:{line:3,column:24},end:{line:3,column:26}},line:3},2:{name:"(anonymous_2)",decl:{start:{line:4,column:18},end:{line:4,column:19}},loc:{start:{line:4,column:24},end:{line:4,column:26}},line:4}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,file:null,sources:[],names:[],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"dabb9ad2e5c9d782082b6741c102e77ff736c1b7"},c=t[n]||(t[n]={});(!c[e]||c[e].hash!==o)&&(c[e]=s);var l=c[e];return a=function(){return l},l}a();const h=(a().s[0]++,(()=>{a().f[0]++,a().s[1]++;const e=()=>{a().f[1]++};a().s[2]++;const o=()=>{a().f[2]++};return a().s[3]++,___createMock({action1:e,action2:o})})()),{action1:k,action2:A}=(a().s[4]++,h);function i(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/MockReset.tsx",o="df374c5a421db38a9b066fc7102703b0b60dba7b",t=window,n="__coverage__",s={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/MockReset.tsx",statementMap:{0:{start:{line:3,column:25},end:{line:5,column:1}},1:{start:{line:4,column:2},end:{line:4,column:218}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:25},end:{line:3,column:26}},loc:{start:{line:3,column:33},end:{line:5,column:1}},line:3}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/MockReset/MockReset.tsx"],names:[],mappings:"AAAA,OAAO,WAAmB;AAC1B,SAAS,SAAS,eAAe;AAS1B,aAAM,YAAuB,CAAC,CAAC,MAAM;AAC1C,SACE,oCAAC,aACC,oCAAC,YAAO,SAAS,WAAS,SAAO,GACjC,oCAAC,YAAO,SAAS,WAAS,SAAO,CACnC;AAEJ;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"df374c5a421db38a9b066fc7102703b0b60dba7b"},c=t[n]||(t[n]={});(!c[e]||c[e].hash!==o)&&(c[e]=s);var l=c[e];return i=function(){return l},l}i();i().s[0]++;const M=({})=>(i().f[0]++,i().s[1]++,u.createElement("div",null,u.createElement("button",{onClick:k},"Button1"),u.createElement("button",{onClick:A},"Button2"))),S={component:M},d={parameters:{moduleMock:{mock:()=>{const e=v(k),o=v(A);return[e,o]}}},play:async({canvasElement:e,parameters:o})=>{const t=p(o,k),n=p(o,A),s=C(e);await m(()=>{r(t).not.toBeCalled(),r(n).not.toBeCalled()}),b.click(await s.findByText("Button1")),await m(()=>{r(t).toBeCalled(),r(n).not.toBeCalled()}),f(o),await m(()=>{r(t).not.toBeCalled(),r(n).not.toBeCalled()}),b.click(await s.findByText("Button2")),await m(()=>{r(t).not.toBeCalled(),r(n).toBeCalled()})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const R=["Primary"];export{d as Primary,R as __namedExportsOrder,S as default};
//# sourceMappingURL=MockReset.stories-BxvJZ0wx.js.map
