import"./iframe-c9USJka_.js";import"../sb-preview/runtime.js";const E=(()=>{let e;const t=new Uint8Array(16);function r(){if(!e&&(e=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(t)}return typeof r=="function"?___createMock({___default___:r}):{___default___:___createMock(r)}})(),x=E.___default___,T=(()=>{const e=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;return typeof e=="function"?___createMock({___default___:e}):{___default___:___createMock(e)}})(),v=T.___default___,S=(()=>{function e(t){return typeof t=="string"&&v.test(t)}return typeof e=="function"?___createMock({___default___:e}):{___default___:___createMock(e)}})(),D=S.___default___,y=(()=>{const e=[];for(let _=0;_<256;++_)e.push((_+256).toString(16).slice(1));function t(_,n=0){return e[_[n+0]]+e[_[n+1]]+e[_[n+2]]+e[_[n+3]]+"-"+e[_[n+4]]+e[_[n+5]]+"-"+e[_[n+6]]+e[_[n+7]]+"-"+e[_[n+8]]+e[_[n+9]]+"-"+e[_[n+10]]+e[_[n+11]]+e[_[n+12]]+e[_[n+13]]+e[_[n+14]]+e[_[n+15]]}function r(_,n=0){const o=t(_,n);if(!D(o))throw TypeError("Stringified UUID is invalid");return o}return ___createMock({unsafeStringify:t,___default___:r})})(),{unsafeStringify:w}=y;y.___default___;const A=(()=>{const t={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};return typeof t=="function"?___createMock({___default___:t}):{___default___:___createMock(t)}})(),g=A.___default___,M=(()=>{function e(t,r,_){if(g.randomUUID&&!r&&!t)return g.randomUUID();t=t||{};const n=t.random||(t.rng||x)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,r){_=_||0;for(let o=0;o<16;++o)r[_+o]=n[o];return r}return w(n)}return typeof e=="function"?___createMock({___default___:e}):{___default___:___createMock(e)}})(),b=M.___default___,{addons:I}=__STORYBOOK_MODULE_PREVIEW_API__,{global:s}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:U}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var k="storybook/actions",j=`${k}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},O=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:O(r,t)},C=e=>!!(typeof e=="object"&&e&&O(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),K=e=>{if(C(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),_=r?.value;return typeof _=="object"&&_?.constructor.name==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(_.constructor.prototype)}),t}return e},L=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?b():Date.now().toString(36)+Math.random().toString(36).substring(2);function d(e,t={}){let r={...V,...t},_=function(...n){if(t.implicit){let l=("__STORYBOOK_PREVIEW__"in s?s.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(l){let a=!window?.FEATURES?.disallowImplicitActionsInRenderV8,p=new U({phase:l.phase,name:e,deprecated:a});if(a)console.warn(p);else throw p}}let o=I.getChannel(),i=L(),c=5,u=n.map(K),R=n.length>1?u:u[0],h={id:i,count:0,data:{name:e,args:R},options:{...r,maxDepth:c+(r.depth||3),allowFunction:r.allowFunction||!1}};o.emit(j,h)};return _.isAction=!0,_.implicit=t.implicit,_}var m=(e,t)=>typeof t[e]>"u"&&!(e in t),B=e=>{let{initialArgs:t,argTypes:r,id:_,parameters:{actions:n}}=e;if(!n||n.disable||!n.argTypesRegex||!r)return{};let o=new RegExp(n.argTypesRegex);return Object.entries(r).filter(([i])=>!!o.test(i)).reduce((i,[c,u])=>(m(c,t)&&(i[c]=d(c,{implicit:!0,id:_})),i),{})},P=e=>{let{initialArgs:t,argTypes:r,parameters:{actions:_}}=e;return _?.disable||!r?{}:Object.entries(r).filter(([n,o])=>!!o.action).reduce((n,[o,i])=>(m(o,t)&&(n[o]=d(typeof i.action=="string"?i.action:o)),n),{})},W=[P,B],f=!1,Y=e=>{let{parameters:{actions:t}}=e;if(!t?.disable&&!f&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in s&&typeof s.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=s.__STORYBOOK_TEST_ON_MOCK_CALL__;r((_,n)=>{let o=_.getMockName();(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>o.startsWith(i)))&&d(o)(n)}),f=!0}},F=[Y];export{W as argsEnhancers,F as loaders};
//# sourceMappingURL=preview-CZtwpzyK.js.map