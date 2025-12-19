import"./iframe-CTo8X2xm.js";import{r as i}from"./index-B0qHpU6P.js";import{_ as l}from"./jsx-runtime-COaHjrLd.js";import"./preload-helper-DlceIuYc.js";const u={};function t(){var e="/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRenderArgs/ReRenderArgs.tsx",a="1f74c558846cbf184cb91c372a88440da0ea7ae0",r=globalThis,n="__coverage__",p={path:"/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRenderArgs/ReRenderArgs.tsx",statementMap:{0:{start:{line:3,column:28},end:{line:8,column:1}},1:{start:{line:4,column:2},end:{line:7,column:5}},2:{start:{line:9,column:0},end:{line:22,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:28},end:{line:3,column:29}},loc:{start:{line:3,column:43},end:{line:8,column:1}},line:3}},branchMap:{},s:{0:0,1:0,2:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storybook-addon-vite-mock-test/storybook-addon-vite-mock-test/stories/ReRenderArgs/ReRenderArgs.tsx"],names:[],mappings:";AACA,OAAO,YAAY;AAWZ,aAAM,eAA0B,CAAC,EAAT,MAAiB,MAAI;AAClD,SAAO,qBAAC,OAAG;AAAA,IAAC,WAAW,OAAO;AAAA,cAAO;AAAA;AACvC;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1f74c558846cbf184cb91c372a88440da0ea7ae0"},s=r[n]||(r[n]={});(!s[e]||s[e].hash!==a)&&(s[e]=p);var m=s[e];return t=function(){return m},m}t();t().s[0]++;const d=({value:e})=>(t().f[0]++,t().s[1]++,l.jsx("div",{className:u.root,children:e}));t().s[2]++;d.__docgenInfo={description:`ReRenderArgs

@param {Props} { value: string }`,methods:[],displayName:"ReRenderArgs",props:{value:{required:!0,tsType:{name:"string"},description:""}}};const{expect:o,waitFor:A,within:v}=__STORYBOOK_MODULE_TEST__,y={component:d,args:{value:"Test"}},c={args:{},play:async({canvasElement:e,parameters:a,step:r})=>{const n=v(e);await r("first props",async()=>{o(n.getByText("Test")).toBeInTheDocument()}),await r("Re-render with new props",async()=>{i(a,{value:"Test2"}),await A(()=>{o(n.getByText("Test2")).toBeInTheDocument()}),i(a,{value:"Test3"}),await A(()=>{o(n.getByText("Test3")).toBeInTheDocument()}),i(a,{value:"Test4"}),await A(()=>{o(n.getByText("Test4")).toBeInTheDocument()})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const R=["Primary"];export{c as Primary,R as __namedExportsOrder,y as default};
//# sourceMappingURL=ReRenderArgs.stories-GmJ4h3L5.js.map
