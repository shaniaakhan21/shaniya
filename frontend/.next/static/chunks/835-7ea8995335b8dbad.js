"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{1193:function(t,r,e){e.d(r,{Z:function(){return s}});var n=e(5748),o=e(9424),i=e(9808),u=e(2737);let a=(0,e(2296).Z)("MuiBox",["root"]),l=(0,i.Z)();var s=(0,n.Z)({themeId:u.Z,defaultTheme:l,defaultClassName:a.root,generateClassName:o.Z.generate})},1360:function(t,r,e){e.d(r,{Z:function(){return Z}});var n=e(2265),o=e(4839),i=e(6990),u=e(9325),a=e(7437),l=e(3536),s=e(339),c=e(7698),p=e(2272),f=e(8958);let h={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},y=u.Z,d=t=>{let{align:r,gutterBottom:e,noWrap:n,paragraph:o,variant:u,classes:a}=t,l={root:["root",u,"inherit"!==t.align&&"align".concat((0,p.Z)(r)),e&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,i.Z)(l,f.f,a)},g=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{let{ownerState:e}=t;return[r.root,e.variant&&r[e.variant],"inherit"!==e.align&&r["align".concat((0,p.Z)(e.align))],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})((0,s.Z)(t=>{var r;let{theme:e}=t;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(t=>{let[r,e]=t;return"inherit"!==r&&e&&"object"==typeof e}).map(t=>{let[r,e]=t;return{props:{variant:r},style:e}}),...Object.entries(e.palette).filter(t=>{let[,r]=t;return r&&r.main}).map(t=>{let[r]=t;return{props:{color:r},style:{color:(e.vars||e).palette[r].main}}}),...Object.entries((null===(r=e.palette)||void 0===r?void 0:r.text)||{}).filter(t=>{let[,r]=t;return"string"==typeof r}).map(t=>{let[r]=t;return{props:{color:"text".concat((0,p.Z)(r))},style:{color:(e.vars||e).palette.text[r]}}}),{props:t=>{let{ownerState:r}=t;return"inherit"!==r.align},style:{textAlign:"var(--Typography-textAlign)"}},{props:t=>{let{ownerState:r}=t;return r.noWrap},style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:t=>{let{ownerState:r}=t;return r.gutterBottom},style:{marginBottom:"0.35em"}},{props:t=>{let{ownerState:r}=t;return r.paragraph},style:{marginBottom:16}}]}})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"};var Z=n.forwardRef(function(t,r){let{color:e,...n}=(0,c.i)({props:t,name:"MuiTypography"}),i=!h[e],u=y({...n,...i&&{color:e}}),{align:l="inherit",className:s,component:p,gutterBottom:f=!1,noWrap:Z=!1,paragraph:m=!1,variant:b="body1",variantMapping:x=v,...w}=u,P={...u,align:l,color:e,className:s,component:p,gutterBottom:f,noWrap:Z,paragraph:m,variant:b,variantMapping:x},O=p||(m?"p":x[b]||v[b])||"span",j=d(P);return(0,a.jsx)(g,{as:O,ref:r,className:(0,o.Z)(j.root,s),...w,ownerState:P,style:{..."inherit"!==l&&{"--Typography-textAlign":l},...w.style}})})},8958:function(t,r,e){e.d(r,{f:function(){return i}});var n=e(2296),o=e(587);function i(t){return(0,o.ZP)("MuiTypography",t)}let u=(0,n.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);r.Z=u},5748:function(t,r,e){e.d(r,{Z:function(){return c}});var n=e(2265),o=e(4839),i=e(9948),u=e(5263),a=e(9325),l=e(6588),s=e(7437);function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:r,defaultTheme:e,defaultClassName:c="MuiBox-root",generateClassName:p}=t,f=(0,i.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(u.Z);return n.forwardRef(function(t,n){let i=(0,l.Z)(e),{className:u,component:h="div",...y}=(0,a.Z)(t);return(0,s.jsx)(f,{as:h,ref:n,className:(0,o.Z)(u,p?p(c):c),theme:r&&i[r]||i,...y})})}},9325:function(t,r,e){e.d(r,{Z:function(){return u}});var n=e(424),o=e(2437);let i=t=>{let r={systemProps:{},otherProps:{}},e=t?.theme?.unstable_sxConfig??o.Z;return Object.keys(t).forEach(n=>{e[n]?r.systemProps[n]=t[n]:r.otherProps[n]=t[n]}),r};function u(t){let r;let{sx:e,...o}=t,{systemProps:u,otherProps:a}=i(o);return r=Array.isArray(e)?[u,...e]:"function"==typeof e?(...t)=>{let r=e(...t);return(0,n.P)(r)?{...u,...r}:u}:{...u,...e},{...a,sx:r}}},6588:function(t,r,e){e.d(r,{Z:function(){return l}});var n=e(7173),o=e(2265),i=e(3209),u=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o.useContext(i.T);return r&&0!==Object.keys(r).length?r:t};let a=(0,n.Z)();var l=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return u(t)}},8136:function(t,r,e){e.d(r,{Z:function(){return n}});function n(t){try{return t.matches(":focus-visible")}catch(t){}return!1}},8553:function(t,r,e){e.d(r,{Z:function(){return i}});var n=e(2265);let o={};function i(t,r){let e=n.useRef(o);return e.current===o&&(e.current=t(r)),e}},9311:function(t,r,e){e.d(r,{V:function(){return u},Z:function(){return a}});var n=e(8553),o=e(2265);let i=[];class u{static create(){return new u}start(t,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,r()},t)}constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}}function a(){var t;let r=(0,n.Z)(u.create).current;return t=r.disposeEffect,o.useEffect(t,i),r}},4145:function(t,r,e){var n=e(2265);r.Z=n.createContext(null)},7802:function(t,r,e){function n(t,r){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t})(t,r)}function o(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,n(t,r)}e.d(r,{Z:function(){return o}})},3950:function(t,r,e){e.d(r,{Z:function(){return n}});function n(t,r){if(null==t)return{};var e={};for(var n in t)if(({}).hasOwnProperty.call(t,n)){if(r.includes(n))continue;e[n]=t[n]}return e}}}]);