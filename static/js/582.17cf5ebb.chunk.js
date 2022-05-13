(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[582],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},1582:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(885),o=t(2791),i=t(6960),a=(t(5462),t(9320)),u=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},c=t(2977),l=t(6975),s="Form_form__e1yzW",d="Form_input__FTtTw",f="Form_label__8nx+5",m="Form_button__8NOIT",v=t(184);var h=function(){var e=(0,o.useState)(""),n=(0,r.Z)(e,2),t=n[0],h=n[1],p=(0,o.useState)(""),x=(0,r.Z)(p,2),g=x[0],Z=x[1],b=(0,a.Jx)().data,_=(0,a.Lr)(),y=(0,r.Z)(_,2),w=y[0],S=y[1].isLoading,j=u(),N=u(),C=function(){h(""),Z("")};return(0,v.jsxs)("form",{className:s,onSubmit:function(e){e.preventDefault();var n={name:t,number:g,id:j};b.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?i.Am.info("".concat(t," is already in contacts")):(w(n),C(),i.Am.success("New contact added!"))},children:[(0,v.jsx)("label",{className:f,htmlFor:j,children:"Name"}),(0,v.jsx)("input",{className:d,type:"text",name:"name",id:j,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){h(e.target.value)}}),(0,v.jsx)("label",{className:f,htmlFor:N,children:"Number"}),(0,v.jsx)("input",{className:d,type:"tel",name:"number",id:N,value:g,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){Z(e.currentTarget.value)}}),(0,v.jsx)(c.Z,{className:m,spacing:2,direction:"row",children:(0,v.jsx)(l.Z,{variant:"outlined",type:"submit",disabled:S,children:"Add contact"})})]})},p="Filter_filter__vxThR",x="Filter_input__N7T3z",g="Filter_label__vEd1E",Z=u(),b=function(e){var n=e.value,t=e.onChange;return(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("label",{className:g,htmlFor:Z,children:"Find contacts by name"}),(0,v.jsx)("input",{className:x,type:"text",name:"filter",id:Z,value:n,onChange:t})]})},_=t(4035),y=t(7247),w="ContactItem_item__gxreB";var S=function(e){var n=e.id,t=e.name,o=e.number,u=(0,a.Nt)(),s=(0,r.Z)(u,2),d=s[0],f=s[1].isLoading;return(0,v.jsxs)("div",{className:w,children:[(0,v.jsx)("h3",{children:t}),(0,v.jsx)("p",{children:o}),(0,v.jsx)(c.Z,{direction:"row",spacing:2,children:(0,v.jsx)(l.Z,{onClick:function(){d(n),i.Am.info("Your contact has been deleted")},disabled:f,variant:"outlined",startIcon:(0,v.jsx)(y.Z,{}),children:"Delete"})})]})},j="ContactList_list__csErn";var N=function(e){var n=e.filter,t=(0,a.Jx)(),r=t.data,o=t.isFetching,i=function(){var e=n.toLowerCase();if(r)return r.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return(0,v.jsxs)(v.Fragment,{children:[o&&(0,v.jsx)(_.Z,{}),r&&(0,v.jsx)("ul",{className:j,children:i.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,v.jsx)("li",{children:(0,v.jsx)(S,{id:n,name:t,number:r})},n)}))})]})},C="ContactsPage_title__P3MkR";var k=function(){var e=(0,o.useState)(""),n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{className:C,children:"Phonebook"}),(0,v.jsx)(h,{}),(0,v.jsx)("h2",{className:C,children:"Contacts"}),(0,v.jsx)(b,{value:t,onChange:function(e){a(e.currentTarget.value)}}),(0,v.jsx)(N,{filter:t}),(0,v.jsx)(i.Ix,{autoClose:1500,position:"top-center"})]})}},7247:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(3519)},2977:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var r=t(4942),o=t(3366),i=t(7462),a=t(2791),u=t(2982),c=t(2466),l=t(6001),s=["sx"];function d(e){var n,t=e.sx,r=function(e){var n={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(t){l.Gc[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n}((0,o.Z)(e,s)),a=r.systemProps,d=r.otherProps;return n=Array.isArray(t)?[a].concat((0,u.Z)(t)):"function"===typeof t?function(){var e=t.apply(void 0,arguments);return(0,c.P)(e)?(0,i.Z)({},a,e):a}:(0,i.Z)({},a,t),(0,i.Z)({},d,{sx:n})}var f=t(1184),m=t(5682),v=t(1393),h=t(2507),p=t(184),x=["component","direction","spacing","divider","children"];function g(e,n){var t=a.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,o){return e.push(r),o<t.length-1&&e.push(a.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var Z=(0,v.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,o=(0,i.Z)({display:"flex"},(0,f.k9)({theme:t},(0,f.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var a=(0,m.hB)(t),u=Object.keys(t.breakpoints.values).reduce((function(e,t){return null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e}),{}),l=(0,f.P$)({values:n.direction,base:u}),s=(0,f.P$)({values:n.spacing,base:u});o=(0,c.Z)(o,(0,f.k9)({theme:t},s,(function(e,t){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((o=t?l[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,m.NA)(a,e))};var o})))}return o})),b=a.forwardRef((function(e,n){var t=d((0,h.Z)({props:e,name:"MuiStack"})),r=t.component,a=void 0===r?"div":r,u=t.direction,c=void 0===u?"column":u,l=t.spacing,s=void 0===l?0:l,f=t.divider,m=t.children,v=(0,o.Z)(t,x),b={direction:c,spacing:s};return(0,p.jsx)(Z,(0,i.Z)({as:a,ownerState:b,ref:n},v,{children:f?g(m,f):m}))})),_=b},3519:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return _},debounce:function(){return y},deprecatedPropType:function(){return w},isMuiElement:function(){return S},ownerDocument:function(){return N},ownerWindow:function(){return C},requirePropFactory:function(){return k},setRef:function(){return z},unstable_ClassNameGenerator:function(){return V},unstable_useEnhancedEffect:function(){return P},unstable_useId:function(){return R},unsupportedProp:function(){return T},useControlled:function(){return M},useEventCallback:function(){return B.Z},useForkRef:function(){return E.Z},useIsFocusVisible:function(){return L.Z}});var r=t(3854),o=t(4036);var i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))},a=t(7462),u=t(2791),c=t.t(u,2),l=t(3366),s=t(8182),d=t(2039),f=t(2507),m=t(1393),v=t(9818);function h(e){return(0,v.Z)("MuiSvgIcon",e)}(0,t(2152).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=t(184),x=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=(0,m.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,o.Z)(t.color))],n["fontSize".concat((0,o.Z)(t.fontSize))]]}})((function(e){var n,t,r,o,i,a,u,c,l,s,d,f,m,v,h,p,x,g=e.theme,Z=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=g.transitions)||null==(t=n.create)?void 0:t.call(n,"fill",{duration:null==(r=g.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=g.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(u=g.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(l=g.typography)||null==(s=l.pxToRem)?void 0:s.call(l,35))||"2.1875"}[Z.fontSize],color:null!=(d=null==(f=(g.vars||g).palette)||null==(m=f[Z.color])?void 0:m.main)?d:{action:null==(v=(g.vars||g).palette)||null==(h=v.action)?void 0:h.active,disabled:null==(p=(g.vars||g).palette)||null==(x=p.action)?void 0:x.disabled,inherit:void 0}[Z.color]}})),Z=u.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiSvgIcon"}),r=t.children,i=t.className,u=t.color,c=void 0===u?"inherit":u,m=t.component,v=void 0===m?"svg":m,Z=t.fontSize,b=void 0===Z?"medium":Z,_=t.htmlColor,y=t.inheritViewBox,w=void 0!==y&&y,S=t.titleAccess,j=t.viewBox,N=void 0===j?"0 0 24 24":j,C=(0,l.Z)(t,x),k=(0,a.Z)({},t,{color:c,component:v,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:N}),z={};w||(z.viewBox=N);var P=function(e){var n=e.color,t=e.fontSize,r=e.classes,i={root:["root","inherit"!==n&&"color".concat((0,o.Z)(n)),"fontSize".concat((0,o.Z)(t))]};return(0,d.Z)(i,h,r)}(k);return(0,p.jsxs)(g,(0,a.Z)({as:v,className:(0,s.Z)(P.root,i),ownerState:k,focusable:"false",color:_,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:n},z,C,{children:[r,S?(0,p.jsx)("title",{children:S}):null]}))}));Z.muiName="SvgIcon";var b=Z;function _(e,n){var t=function(t,r){return(0,p.jsx)(b,(0,a.Z)({"data-testid":"".concat(n,"Icon"),ref:r},t,{children:e}))};return t.muiName=b.muiName,u.memo(u.forwardRef(t))}var y=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var u=function(){e.apply(r,i)};clearTimeout(n),n=setTimeout(u,t)}return r.clear=function(){clearTimeout(n)},r};var w=function(e,n){return function(){return null}};var S=function(e,n){return u.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function j(e){return e&&e.ownerDocument||document}var N=j;var C=function(e){return j(e).defaultView||window};var k=function(e,n){return function(){return null}},z=t(2971).Z,P=t(5721).Z,A=t(885),F=0;var I=c.useId;var R=function(e){if(void 0!==I){var n=I();return null!=e?e:n}return function(e){var n=u.useState(e),t=(0,A.Z)(n,2),r=t[0],o=t[1],i=e||r;return u.useEffect((function(){null==r&&o("mui-".concat(F+=1))}),[r]),i}(e)};var T=function(e,n,t,r,o){return null};var M=function(e){var n=e.controlled,t=e.default,r=(e.name,e.state,u.useRef(void 0!==n).current),o=u.useState(t),i=(0,A.Z)(o,2),a=i[0],c=i[1];return[r?n:a,u.useCallback((function(e){r||c(e)}),[])]},B=t(6868),E=t(4843),L=t(3031),V={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}}}]);
//# sourceMappingURL=582.17cf5ebb.chunk.js.map