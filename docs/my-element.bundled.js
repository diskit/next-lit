/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const o=globalThis.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,h=`lit$${(Math.random()+"").slice(9)}$`,l="?"+h,r=`<${l}>`,u=document,d=(t="")=>u.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,p=/>/g,y=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,b=/'/g,g=/"/g,m=/^(?:script|style|textarea)$/i,w=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),S=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),C=new WeakMap,k=u.createTreeWalker(u,129,null,!1),x=(t,i)=>{const s=t.length-1,e=[];let o,l=2===i?"<svg>":"",u=v;for(let i=0;i<s;i++){const s=t[i];let n,d,c=-1,a=0;for(;a<s.length&&(u.lastIndex=a,d=u.exec(s),null!==d);)a=u.lastIndex,u===v?"!--"===d[1]?u=f:void 0!==d[1]?u=p:void 0!==d[2]?(m.test(d[2])&&(o=RegExp("</"+d[2],"g")),u=y):void 0!==d[3]&&(u=y):u===y?">"===d[0]?(u=null!=o?o:v,c=-1):void 0===d[1]?c=-2:(c=u.lastIndex-d[2].length,n=d[1],u=void 0===d[3]?y:'"'===d[3]?g:b):u===g||u===b?u=y:u===f||u===p?u=v:(u=y,o=void 0);const w=u===y&&t[i+1].startsWith("/>")?" ":"";l+=u===v?s+r:c>=0?(e.push(n),s.slice(0,c)+"$lit$"+s.slice(c)+h+w):s+h+(-2===c?(e.push(void 0),i):w)}const d=l+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==n?n.createHTML(d):d,e]};class T{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,r=0;const u=t.length-1,c=this.parts,[a,v]=x(t,i);if(this.el=T.createElement(a,s),k.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=k.nextNode())&&c.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(h)){const s=v[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(h),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?E:"?"===i[1]?N:"@"===i[1]?U:A})}else c.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(m.test(e.tagName)){const t=e.textContent.split(h),i=t.length-1;if(i>0){e.textContent=o?o.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],d()),k.nextNode(),c.push({type:2,index:++n});e.append(t[i],d())}}}else if(8===e.nodeType)if(e.data===l)c.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(h,t+1));)c.push({type:7,index:n}),t+=h.length-1}n++}}static createElement(t,i){const s=u.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){var o,n,h,l;if(i===S)return i;let r=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const u=c(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r.O)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r.T(t,s,e)),void 0!==e?(null!==(h=(l=s).Σi)&&void 0!==h?h:l.Σi=[])[e]=r:s.Σo=r),void 0!==r&&(i=M(t,r.S(t,i.values),r,e)),i}class O{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:u).importNode(s,!0);k.currentNode=o;let n=k.nextNode(),h=0,l=0,r=e[0];for(;void 0!==r;){if(h===r.index){let i;2===r.type?i=new j(n,n.nextSibling,this,t):1===r.type?i=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(i=new R(n,this,t)),this.l.push(i),r=e[++l]}h!==(null==r?void 0:r.index)&&(n=k.nextNode(),h++)}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class j{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=M(this,t,i),c(t)?t===$||null==t||""===t?(this.H!==$&&this.R(),this.H=$):t!==this.H&&t!==S&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return a(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(u.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=T.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else{const t=new O(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new T(t)),i}g(t){a(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new j(this.k(d()),this.k(d()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class A{constructor(t,i,s,e,o){this.type=1,this.H=$,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill($),this.strings=s):this.H=$}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=M(this,t,i,0),n=!c(t)||t!==this.H&&t!==S,n&&(this.H=t);else{const e=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=M(this,e[s+h],i,h),l===S&&(l=this.H[h]),n||(n=!c(l)||l!==this.H[h]),l===$?t=$:t!==$&&(t+=(null!=l?l:"")+o[h+1]),this.H[h]=l}n&&!e&&this.W(t)}W(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class E extends A{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===$?void 0:t}}class N extends A{constructor(){super(...arguments),this.type=4}W(t){t&&t!==$?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class U extends A{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=M(this,t,i,0))&&void 0!==s?s:$)===S)return;const e=this.H,o=t===$&&e!==$||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==$&&(e===$||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class R{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){M(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,T,j),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol();class P{constructor(t,i){if(i!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return _&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const I=new Map,W=_?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new P(t+"",z))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var L,H,q,B;const D={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},J=(t,i)=>i!==t&&(i==i||t==t),K={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J};class Z extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=K){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||K}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(W(t))}else void 0!==t&&i.push(W(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{_?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=K){var e,o;const n=this.constructor.Πp(t,s);if(void 0!==n&&!0===s.reflect){const h=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:D.toAttribute)(i,s.type);this.Πh=t,null==h?this.removeAttribute(n):this.setAttribute(n,h),this.Πh=null}}K(t,i){var s,e,o;const n=this.constructor,h=n.Πm.get(t);if(void 0!==h&&this.Πh!==h){const t=n.getPropertyOptions(h),l=t.converter,r=null!==(o=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==o?o:D.fromAttribute;this.Πh=h,this[h]=r(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||J)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V,F,G,Q,X,Y;Z.finalized=!0,Z.shadowRootOptions={mode:"open"},null===(H=(L=globalThis).reactiveElementPlatformSupport)||void 0===H||H.call(L,{ReactiveElement:Z}),(null!==(q=(B=globalThis).reactiveElementVersions)&&void 0!==q?q:B.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(V=(Y=globalThis).litElementVersions)&&void 0!==V?V:Y.litElementVersions=[]).push("3.0.0-rc.1");class tt extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let h=n._$litPart$;if(void 0===h){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=h=new j(i.insertBefore(d(),t),t,void 0,s)}return h.I(t),h})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return S}}tt.finalized=!0,tt._$litElement$=!0,null===(G=(F=globalThis).litElementHydrateSupport)||void 0===G||G.call(F,{LitElement:tt}),null===(X=(Q=globalThis).litElementPlatformSupport)||void 0===X||X.call(Q,{LitElement:tt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):it(t,i)
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var et=function(t,i,s,e){for(var o,n=arguments.length,h=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(h=(n<3?o(h):n>3?o(i,s,h):o(i,s))||h);return n>3&&h&&Object.defineProperty(i,s,h),h};let ot=class extends tt{constructor(){super(...arguments),this.name="World",this.count=0}render(){return w`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}foo(){return"foo"}};ot.styles=((t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof P)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=I.get(s);return void 0===e&&I.set(s,e=new P(s,z)),e})`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,et([st()],ot.prototype,"name",void 0),et([st({type:Number})],ot.prototype,"count",void 0),ot=et([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i))("my-element")],ot);export{ot as MyElement};
