"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[477],{477:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(885),a=n(2791),s=n(5048),i=n(6960),o=n(6330),c=n(2977),u=n(6975),l="RegisterPage_title__Yjy6g",d="RegisterPage_form__9iStY",m="RegisterPage_input__9WI6M",p="RegisterPage_label__R5ZZF",f="RegisterPage_button__rEbXr",v=n(184);function h(){var e=(0,s.I0)(),r=(0,a.useState)(""),n=(0,t.Z)(r,2),h=n[0],g=n[1],_=(0,a.useState)(""),b=(0,t.Z)(_,2),y=b[0],Z=b[1],x=(0,a.useState)(""),P=(0,t.Z)(x,2),w=P[0],k=P[1],j=function(e){var r=e.target,n=r.name,t=r.value;switch(n){case"name":return g(t);case"email":return Z(t);case"password":return k(t);default:return}};return(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:l,children:"User registration"}),(0,v.jsxs)("form",{onSubmit:function(r){r.preventDefault(),w.length<6?i.Am.info("Password must be at least 7 sybmols long"):(e(o.r5.register({name:h,email:y,password:w})),g(""),Z(""),k(""))},className:d,autoComplete:"off",children:[(0,v.jsxs)("label",{className:p,children:["Name",(0,v.jsx)("input",{className:m,type:"text",name:"name",value:h,onChange:j})]}),(0,v.jsxs)("label",{className:p,children:["Email",(0,v.jsx)("input",{className:m,type:"email",name:"email",value:y,onChange:j})]}),(0,v.jsxs)("label",{className:p,children:["Password",(0,v.jsx)("input",{className:m,type:"password",name:"password",value:w,onChange:j})]}),(0,v.jsx)(c.Z,{className:f,spacing:2,direction:"row",children:(0,v.jsx)(u.Z,{variant:"outlined",type:"submit",children:"Register"})})]})]})}},2977:function(e,r,n){n.d(r,{Z:function(){return Z}});var t=n(4942),a=n(3366),s=n(7462),i=n(2791),o=n(2982),c=n(2466),u=n(6001),l=["sx"];function d(e){var r,n=e.sx,t=function(e){var r={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(n){u.Gc[n]?r.systemProps[n]=e[n]:r.otherProps[n]=e[n]})),r}((0,a.Z)(e,l)),i=t.systemProps,d=t.otherProps;return r=Array.isArray(n)?[i].concat((0,o.Z)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return(0,c.P)(e)?(0,s.Z)({},i,e):i}:(0,s.Z)({},i,n),(0,s.Z)({},d,{sx:r})}var m=n(1184),p=n(5682),f=n(1393),v=n(2507),h=n(184),g=["component","direction","spacing","divider","children"];function _(e,r){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,t,a){return e.push(t),a<n.length-1&&e.push(i.cloneElement(r,{key:"separator-".concat(a)})),e}),[])}var b=(0,f.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return[r.root]}})((function(e){var r=e.ownerState,n=e.theme,a=(0,s.Z)({display:"flex"},(0,m.k9)({theme:n},(0,m.P$)({values:r.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(r.spacing){var i=(0,p.hB)(n),o=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==r.spacing[n]&&null==r.direction[n]||(e[n]=!0),e}),{}),u=(0,m.P$)({values:r.direction,base:o}),l=(0,m.P$)({values:r.spacing,base:o});a=(0,c.Z)(a,(0,m.k9)({theme:n},l,(function(e,n){return{"& > :not(style) + :not(style)":(0,t.Z)({margin:0},"margin".concat((a=n?u[n]:r.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,p.NA)(i,e))};var a})))}return a})),y=i.forwardRef((function(e,r){var n=d((0,v.Z)({props:e,name:"MuiStack"})),t=n.component,i=void 0===t?"div":t,o=n.direction,c=void 0===o?"column":o,u=n.spacing,l=void 0===u?0:u,m=n.divider,p=n.children,f=(0,a.Z)(n,g),y={direction:c,spacing:l};return(0,h.jsx)(b,(0,s.Z)({as:i,ownerState:y,ref:r},f,{children:m?_(p,m):p}))})),Z=y}}]);
//# sourceMappingURL=477.5d3a1fd9.chunk.js.map