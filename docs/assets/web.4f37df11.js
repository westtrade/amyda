const y={};let W=q;const E={},C=1,A=2,O={owned:null,cleanups:null,context:null,owner:null};var h=null;let N=null,g=null,x=null,c=null,a=null,U=0;function j(e,n){const t=g,s=h,i=e.length===0,f=i?O:{owned:null,cleanups:null,context:null,owner:n||s},o=i?e:()=>e(()=>L(f));h=f,g=null;try{return D(o,!0)}finally{g=t,h=s}}function T(e,n,t){const s=K(e,n,!1,C);G(s)}function v(e){if(x)return e();let n;const t=x=[];try{n=e()}finally{x=null}return D(()=>{for(let s=0;s<t.length;s+=1){const i=t[s];if(i.pending!==E){const f=i.pending;i.pending=E,F(i,f)}}},!1),n}function R(e){let n,t=g;return g=null,n=e(),g=t,n}function F(e,n,t){if(x)return e.pending===E&&x.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let s=!1;return e.value=n,e.observers&&e.observers.length&&D(()=>{for(let i=0;i<e.observers.length;i+=1){const f=e.observers[i];s&&N.disposed.has(f),(s&&!f.tState||!s&&!f.state)&&(f.pure?c.push(f):a.push(f),f.observers&&H(f)),s||(f.state=C)}if(c.length>1e6)throw c=[],new Error},!1),n}function G(e){if(!e.fn)return;L(e);const n=h,t=g,s=U;g=h=e,J(e,e.value,s),g=t,h=n}function J(e,n,t){let s;try{s=e.fn(n)}catch(i){Q(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?F(e,s):e.value=s,e.updatedAt=t)}function K(e,n,t,s=C,i){const f={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==O&&(h.owned?h.owned.push(f):h.owned=[f]),f}function M(e){const n=N;if(e.state===0||n)return;if(e.state===A||n)return m(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===C||n)G(e);else if(e.state===A||n){const i=c;c=null,m(e,t[0]),c=i}}function D(e,n){if(c)return e();let t=!1;n||(c=[]),a?t=!0:a=[],U++;try{const s=e();return X(t),s}catch(s){c||(a=null),Q(s)}}function X(e){c&&(q(c),c=null),!e&&(a.length?v(()=>{W(a),a=null}):a=null)}function q(e){for(let n=0;n<e.length;n++)M(e[n])}function m(e,n){const t=N;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===C||t?i!==n&&M(i):(i.state===A||t)&&m(i,n))}}function H(e){const n=N;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=A,s.pure?c.push(s):a.push(s),s.observers&&H(s))}}function L(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const f=i.pop(),o=t.observerSlots.pop();s<i.length&&(f.sourceSlots[o]=s,i[s]=f,t.observerSlots[s]=o)}}if(e.owned){for(n=0;n<e.owned.length;n++)L(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Q(e){throw e}function _(e,n){return R(()=>e(n||{}))}function Y(e,n,t){let s=t.length,i=n.length,f=s,o=0,l=0,r=n[i-1].nextSibling,u=null;for(;o<i||l<f;){if(n[o]===t[l]){o++,l++;continue}for(;n[i-1]===t[f-1];)i--,f--;if(i===o){const p=f<s?l?t[l-1].nextSibling:t[f-l]:r;for(;l<f;)e.insertBefore(t[l++],p)}else if(f===l)for(;o<i;)(!u||!u.has(n[o]))&&n[o].remove(),o++;else if(n[o]===t[f-1]&&t[l]===n[i-1]){const p=n[--i].nextSibling;e.insertBefore(t[l++],n[o++].nextSibling),e.insertBefore(t[--f],p),n[i]=t[f]}else{if(!u){u=new Map;let w=l;for(;w<f;)u.set(t[w],w++)}const p=u.get(n[o]);if(p!=null)if(l<p&&p<f){let w=o,b=1,P;for(;++w<i&&w<f&&!((P=u.get(n[w]))==null||P!==p+b);)b++;if(b>p-l){const V=n[o];for(;l<p;)e.insertBefore(t[l++],V)}else e.replaceChild(t[l++],n[o++])}else o++;else n[o++].remove()}}}function $(e,n,t){let s;return j(i=>{s=i,n===document?e():Z(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function z(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function Z(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return S(e,n,s,t);T(i=>S(e,n(),i,t),s)}function S(e,n,t,s,i){for(y.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const f=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,f==="string"||f==="number"){if(y.context)return t;if(f==="number"&&(n=n.toString()),o){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=d(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||f==="boolean"){if(y.context)return t;t=d(e,t,s)}else{if(f==="function")return T(()=>{let l=n();for(;typeof l=="function";)l=l();t=S(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[],r=t&&Array.isArray(t);if(B(l,n,t,i))return T(()=>t=S(e,l,t,s,!0)),()=>t;if(y.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return t=l}if(l.length===0){if(t=d(e,t,s),o)return t}else r?t.length===0?I(e,l,s):Y(e,t,l):(t&&d(e),I(e,l));t=l}else if(n instanceof Node){if(y.context&&n.parentNode)return t=o?[n]:n;if(Array.isArray(t)){if(o)return t=d(e,t,s,n);d(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function B(e,n,t,s){let i=!1;for(let f=0,o=n.length;f<o;f++){let l=n[f],r=t&&t[f];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=B(e,l,r)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=B(e,Array.isArray(l)?l:[l],r)||i}else e.push(l),i=!0;else{const u=String(l);r&&r.nodeType===3&&r.data===u?e.push(r):e.push(document.createTextNode(u))}}return i}function I(e,n,t){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function d(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let f=!1;for(let o=n.length-1;o>=0;o--){const l=n[o];if(i!==l){const r=l.parentNode===e;!f&&!o?r?e.replaceChild(i,l):e.insertBefore(i,t):r&&l.remove()}else f=!0}}else e.insertBefore(i,t);return[i]}export{_ as c,Z as i,$ as r,z as t};
//# sourceMappingURL=web.4f37df11.js.map