import"./iframe-c9USJka_.js";const f=(()=>{function g(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];var n=Array.from(typeof i=="string"?[i]:i);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var _=n.reduce(function(t,u){var a=u.match(/\n([\t ]+|(?!\s).)/g);return a?t.concat(a.map(function(d){var r,e;return(e=(r=d.match(/[\t ]/g))===null||r===void 0?void 0:r.length)!==null&&e!==void 0?e:0})):t},[]);if(_.length){var l=new RegExp(`
[	 ]{`+Math.min.apply(Math,_)+"}","g");n=n.map(function(t){return t.replace(l,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var c=n[0];return s.forEach(function(t,u){var a=c.match(/(?:^|\n)( *)$/),d=a?a[1]:"",r=t;typeof t=="string"&&t.includes(`
`)&&(r=String(t).split(`
`).map(function(e,h){return h===0?e:""+d+e}).join(`
`)),c+=r+n[u+1]}),c}return ___createMock({dedent:g,___default___:g})})(),{dedent:v}=f;f.___default___;export{v as d};
//# sourceMappingURL=index-fSN1-QT7.js.map
