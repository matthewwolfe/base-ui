(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{1420:function(a,b,c){"use strict";var d=c(5924),e=c(959);b.Z=function({className:a,fixed:b=!1,...c}){return e.createElement("table",{className:(0,d.Z)("table",a,{fixed:b}),...c})}},4729:function(a,b,c){"use strict";var d=c(959),e=c(5924),f=c(8712);b.Z=function({className:a,color:b,...c}){return d.createElement("div",{...c,className:(0,e.Z)("text",(0,f.Z)(b),a)})}},8102:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/variables/root",function(){return c(7633)}])},7633:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return l}});var d=c(1527),e=c(959),f=c(578),g=c(4729),h=c(1420),i=c(2055);function j(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function k(a){return function(a){if(Array.isArray(a))return j(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,b){if(a){if("string"==typeof a)return j(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return j(a,b)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(){var a=(0,e.useState)([]),b=a[0],c=a[1];return((0,e.useEffect)(function(){c(Array.from(document.styleSheets).filter(function(a){return null===a.href||a.href.startsWith(window.location.origin)}).reduce(function(a,b){var c=Array.from(b.cssRules).filter(function(a){return":root"===a.selectorText}).reduce(function(a,b){return k(a).concat(k(Array.from(b.style).filter(function(a){return a.startsWith("--")})))},[]);return k(a).concat(k(c))},[]).map(function(a){return{variable:a,value:getComputedStyle(document.documentElement).getPropertyValue(a).trim()}}))},[]),0===b.length)?null:(0,d.jsxs)(i.J,{name:"Root Variables",children:[(0,d.jsx)(f.Z,{mb:8,children:(0,d.jsx)(g.Z,{children:"These are all the global CSS variables that Bedrock UI provides. They primarily serve as the basis of the theme colors, and while these variables and the variables specific to components can all be overwritten, we recommend sticking to this general structure."})}),(0,d.jsxs)(h.Z,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Value"})]})}),(0,d.jsx)("tbody",{children:b.map(function(a,b){var c=a.variable,e=a.value;return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:c}),(0,d.jsx)("td",{children:e})]},b)})})]})]})}},2055:function(a,b,c){"use strict";c.d(b,{J:function(){return l}});var d=c(1527),e=c(578),f=c(2291),g=c(7647),h=c.n(g),i=function(a){var b=a.name;return(0,d.jsx)(e.Z,{className:h().banner,flexDirection:"column",children:(0,d.jsx)(f.Z,{level:1,children:b})})},j=c(1591),k=c.n(j),l=function(a){var b=a.children,c=a.name;return(0,d.jsxs)(e.Z,{className:k().container,flexDirection:"column",children:[(0,d.jsx)(i,{name:c}),b]})}},7647:function(a){a.exports={banner:"Banner_banner__wsj4G"}},1591:function(a){a.exports={container:"DocSection_container__f9Di_"}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8102)}),_N_E=a.O()}])