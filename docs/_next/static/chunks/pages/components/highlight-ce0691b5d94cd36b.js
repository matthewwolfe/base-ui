(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{9021:function(e,n,t){"use strict";var i=t(959),r=t(5924),o=t(4552);function l({className:e,...n}){return i.createElement("div",{...n,className:(0,r.Z)("grid",e)})}l.Col=function({className:e,span:n,...t}){return i.createElement("div",{...t,className:(0,r.Z)("grid-item",(0,o.Z)(n,{prefix:"col-"}))})},n.Z=l},5041:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/highlight",function(){return t(4300)}])},4300:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var i=t(1527),r=t(9021),o=t(3775),l=t(959),s=t(5924),c=function({className:e,text:n,highlight:t,...i}){let r=(0,l.useMemo)(()=>n.split(/(\s+)/).map(e=>({word:e,match:Array.isArray(t)?t.includes(e):t===e})),[n,t]);return l.createElement("div",{...i,className:(0,s.Z)("highlight",e)},r.map(({word:e,match:n})=>n?l.createElement("mark",null,e):l.createElement("span",null,e)))},a=t(510),u=t(5898);let d="\nimport { Highlight } from '@bedrock-ui/core';\n".trim(),m='\n<Highlight \n  highlight="consectetur" \n  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."\n/>\n'.trim(),h="\n<Highlight \n  highlight={['consectetur', 'dolore']}\n  text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"\n/>\n".trim();var g=function(){return(0,i.jsxs)(u.J,{name:"Highlight",children:[(0,i.jsx)(a.P,{children:d}),(0,i.jsxs)(r.Z,{style:{marginTop:64,marginBottom:64},children:[(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(o.Z,{level:3,children:"Single Word"})}),(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(a.P,{children:m})}),(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(c,{highlight:"consectetur",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),(0,i.jsxs)(r.Z,{style:{marginBottom:64},children:[(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(o.Z,{level:3,children:"Multiple Words"})}),(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(a.P,{children:h})}),(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(c,{highlight:["consectetur","dolore"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})]})}},510:function(e,n,t){"use strict";t.d(n,{P:function(){return c}});var i=t(1527),r=t(702),o=t(7194),l=t(2154);r.Z.registerLanguage("tsx",o.Z);let s={fontSize:"16px"};var c=function(e){let{children:n}=e;return(0,i.jsx)(r.Z,{customStyle:s,language:"tsx",style:l.Z,children:n})}},5898:function(e,n,t){"use strict";t.d(n,{J:function(){return d}});var i=t(1527),r=t(8648),o=t(3775),l=t(4290),s=t.n(l),c=function(e){let{name:n}=e;return(0,i.jsx)(r.Z,{className:s().banner,flexDirection:"column",children:(0,i.jsx)(o.Z,{level:1,children:n})})},a=t(4951),u=t.n(a),d=function(e){let{children:n,name:t}=e;return(0,i.jsxs)(r.Z,{className:u().container,flexDirection:"column",children:[(0,i.jsx)(c,{name:t}),n]})}},4290:function(e){e.exports={banner:"Banner_banner__wsj4G"}},4951:function(e){e.exports={container:"DocSection_container__f9Di_"}}},function(e){e.O(0,[706,774,888,179],function(){return e(e.s=5041)}),_N_E=e.O()}]);