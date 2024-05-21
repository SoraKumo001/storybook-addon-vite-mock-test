import{w as d,e as s,r as i,b as m}from"./index-DluBSlvQ.js";import"./types-BQZtEX2b.js";import{R as l}from"./index-BB-koyIc.js";import"./index-CCuEBPTq.js";import"./iframe-c9USJka_.js";import"../sb-preview/runtime.js";const u={};function r(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRenderArgs/ReRenderArgs.tsx",n="436a44ee605b4f98dc747802cc33836cec98f948",a=window,t="__coverage__",p={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRenderArgs/ReRenderArgs.tsx",statementMap:{0:{start:{line:3,column:28},end:{line:5,column:1}},1:{start:{line:4,column:2},end:{line:4,column:87}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:28},end:{line:3,column:29}},loc:{start:{line:3,column:43},end:{line:5,column:1}},line:3}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRenderArgs/ReRenderArgs.tsx"],names:[],mappings:"AAAA,OAAO,WAAmB;AAC1B,OAAO,YAAY;AAWZ,aAAM,eAA0B,CAAC,EAAE,MAAM,MAAM;AACpD,SAAO,oCAAC,SAAI,WAAW,OAAO,QAAO,KAAM;AAC7C;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"436a44ee605b4f98dc747802cc33836cec98f948"},o=a[t]||(a[t]={});(!o[e]||o[e].hash!==n)&&(o[e]=p);var A=o[e];return r=function(){return A},A}r();r().s[0]++;const v=({value:e})=>(r().f[0]++,r().s[1]++,l.createElement("div",{className:u.root},e)),B={component:v,args:{value:"Test"}},c={args:{},play:async({canvasElement:e,parameters:n,step:a})=>{const t=d(e);await a("first props",async()=>{s(t.getByText("Test")).toBeInTheDocument()}),await a("Re-render with new props",async()=>{i(n,{value:"Test2"}),await m(()=>{s(t.getByText("Test2")).toBeInTheDocument()}),i(n,{value:"Test3"}),await m(()=>{s(t.getByText("Test3")).toBeInTheDocument()}),i(n,{value:"Test4"}),await m(()=>{s(t.getByText("Test4")).toBeInTheDocument()})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement,
    parameters,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("first props", async () => {
      expect(canvas.getByText("Test")).toBeInTheDocument();
    });
    await step("Re-render with new props", async () => {
      // Re-render with new props
      render(parameters, {
        value: "Test2"
      });
      await waitFor(() => {
        expect(canvas.getByText("Test2")).toBeInTheDocument();
      });

      // Re-render with new props
      render(parameters, {
        value: "Test3"
      });
      await waitFor(() => {
        expect(canvas.getByText("Test3")).toBeInTheDocument();
      });

      // Re-render with new props
      render(parameters, {
        value: "Test4"
      });
      await waitFor(() => {
        expect(canvas.getByText("Test4")).toBeInTheDocument();
      });
    });
  }
}`,...c.parameters?.docs?.source}}};const f=["Primary"];export{c as Primary,f as __namedExportsOrder,B as default};
//# sourceMappingURL=ReRenderArgs.stories-DNJy9MXq.js.map
