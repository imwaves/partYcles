import{c as w}from"./common/commonjsHelpers-eb5a497e.js";var A=s=>encodeURIComponent(s).replace(/[!'()*]/g,a=>`%${a.charCodeAt(0).toString(16).toUpperCase()}`),v="%[a-f0-9]{2}",x=new RegExp(v,"gi"),S=new RegExp("("+v+")+","gi");function b(s,a){try{return decodeURIComponent(s.join(""))}catch(g){}if(s.length===1)return s;a=a||1;var l=s.slice(0,a),f=s.slice(a);return Array.prototype.concat.call([],b(l),b(f))}function C(s){try{return decodeURIComponent(s)}catch(f){for(var a=s.match(x),l=1;l<a.length;l++)s=b(a,l).join(""),a=s.match(x);return s}}function U(s){for(var a={"%FE%FF":"��","%FF%FE":"��"},l=S.exec(s);l;){try{a[l[0]]=decodeURIComponent(l[0])}catch(u){var f=C(l[0]);f!==l[0]&&(a[l[0]]=f)}l=S.exec(s)}a["%C2"]="�";for(var g=Object.keys(a),d=0;d<g.length;d++){var y=g[d];s=s.replace(new RegExp(y,"g"),a[y])}return s}var $=function(s){if(typeof s!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof s+"`");try{return s=s.replace(/\+/g," "),decodeURIComponent(s)}catch(a){return U(s)}},I=(s,a)=>{if(!(typeof s=="string"&&typeof a=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(a==="")return[s];const l=s.indexOf(a);return l===-1?[s]:[s.slice(0,l),s.slice(l+a.length)]},R=function(s,a){for(var l={},f=Object.keys(s),g=Array.isArray(a),d=0;d<f.length;d++){var y=f[d],u=s[y];(g?a.indexOf(y)!==-1:a(y,u,s))&&(l[y]=u)}return l},q=w(function(s,a){const l=r=>r==null,f=Symbol("encodeFragmentIdentifier");function g(r){switch(r.arrayFormat){case"index":return t=>(n,e)=>{const o=n.length;return e===void 0||r.skipNull&&e===null||r.skipEmptyString&&e===""?n:e===null?[...n,[u(t,r),"[",o,"]"].join("")]:[...n,[u(t,r),"[",u(o,r),"]=",u(e,r)].join("")]};case"bracket":return t=>(n,e)=>e===void 0||r.skipNull&&e===null||r.skipEmptyString&&e===""?n:e===null?[...n,[u(t,r),"[]"].join("")]:[...n,[u(t,r),"[]=",u(e,r)].join("")];case"comma":case"separator":case"bracket-separator":{const t=r.arrayFormat==="bracket-separator"?"[]=":"=";return n=>(e,o)=>o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?e:(o=o===null?"":o,e.length===0?[[u(n,r),t,u(o,r)].join("")]:[[e,u(o,r)].join(r.arrayFormatSeparator)])}default:return t=>(n,e)=>e===void 0||r.skipNull&&e===null||r.skipEmptyString&&e===""?n:e===null?[...n,u(t,r)]:[...n,[u(t,r),"=",u(e,r)].join("")]}}function d(r){let t;switch(r.arrayFormat){case"index":return(n,e,o)=>{if(t=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),!t){o[n]=e;return}o[n]===void 0&&(o[n]={}),o[n][t[1]]=e};case"bracket":return(n,e,o)=>{if(t=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),!t){o[n]=e;return}if(o[n]===void 0){o[n]=[e];return}o[n]=[].concat(o[n],e)};case"comma":case"separator":return(n,e,o)=>{const i=typeof e=="string"&&e.includes(r.arrayFormatSeparator),c=typeof e=="string"&&!i&&m(e,r).includes(r.arrayFormatSeparator);e=c?m(e,r):e;const p=i||c?e.split(r.arrayFormatSeparator).map(N=>m(N,r)):e===null?e:m(e,r);o[n]=p};case"bracket-separator":return(n,e,o)=>{const i=/(\[\])$/.test(n);if(n=n.replace(/\[\]$/,""),!i){o[n]=e&&m(e,r);return}const c=e===null?[]:e.split(r.arrayFormatSeparator).map(p=>m(p,r));if(o[n]===void 0){o[n]=c;return}o[n]=[].concat(o[n],c)};default:return(n,e,o)=>{if(o[n]===void 0){o[n]=e;return}o[n]=[].concat(o[n],e)}}}function y(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(r,t){return t.encode?t.strict?A(r):encodeURIComponent(r):r}function m(r,t){return t.decode?$(r):r}function j(r){return Array.isArray(r)?r.sort():typeof r=="object"?j(Object.keys(r)).sort((t,n)=>Number(t)-Number(n)).map(t=>r[t]):r}function k(r){const t=r.indexOf("#");return t!==-1&&(r=r.slice(0,t)),r}function E(r){let t="";const n=r.indexOf("#");return n!==-1&&(t=r.slice(n)),t}function F(r){r=k(r);const t=r.indexOf("?");return t===-1?"":r.slice(t+1)}function h(r,t){return t.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):t.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function O(r,t){t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t),y(t.arrayFormatSeparator);const n=d(t),e=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return e;for(const o of r.split("&")){if(o==="")continue;let[i,c]=I(t.decode?o.replace(/\+/g," "):o,"=");c=c===void 0?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?c:m(c,t),n(m(i,t),c,e)}for(const o of Object.keys(e)){const i=e[o];if(typeof i=="object"&&i!==null)for(const c of Object.keys(i))i[c]=h(i[c],t);else e[o]=h(i,t)}return t.sort===!1?e:(t.sort===!0?Object.keys(e).sort():Object.keys(e).sort(t.sort)).reduce((o,i)=>{const c=e[i];return Boolean(c)&&typeof c=="object"&&!Array.isArray(c)?o[i]=j(c):o[i]=c,o},Object.create(null))}a.extract=F,a.parse=O,a.stringify=(r,t)=>{if(!r)return"";t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t),y(t.arrayFormatSeparator);const n=c=>t.skipNull&&l(r[c])||t.skipEmptyString&&r[c]==="",e=g(t),o={};for(const c of Object.keys(r))n(c)||(o[c]=r[c]);const i=Object.keys(o);return t.sort!==!1&&i.sort(t.sort),i.map(c=>{const p=r[c];return p===void 0?"":p===null?u(c,t):Array.isArray(p)?p.length===0&&t.arrayFormat==="bracket-separator"?u(c,t)+"[]":p.reduce(e(c),[]).join("&"):u(c,t)+"="+u(p,t)}).filter(c=>c.length>0).join("&")},a.parseUrl=(r,t)=>{t=Object.assign({decode:!0},t);const[n,e]=I(r,"#");return Object.assign({url:n.split("?")[0]||"",query:O(F(r),t)},t&&t.parseFragmentIdentifier&&e?{fragmentIdentifier:m(e,t)}:{})},a.stringifyUrl=(r,t)=>{t=Object.assign({encode:!0,strict:!0,[f]:!0},t);const n=k(r.url).split("?")[0]||"",e=a.extract(r.url),o=a.parse(e,{sort:!1}),i=Object.assign(o,r.query);let c=a.stringify(i,t);c&&(c=`?${c}`);let p=E(r.url);return r.fragmentIdentifier&&(p=`#${t[f]?u(r.fragmentIdentifier,t):r.fragmentIdentifier}`),`${n}${c}${p}`},a.pick=(r,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[f]:!1},n);const{url:e,query:o,fragmentIdentifier:i}=a.parseUrl(r,n);return a.stringifyUrl({url:e,query:R(o,t),fragmentIdentifier:i},n)},a.exclude=(r,t,n)=>{const e=Array.isArray(t)?o=>!t.includes(o):(o,i)=>!t(o,i);return a.pick(r,e,n)}});export default q;
