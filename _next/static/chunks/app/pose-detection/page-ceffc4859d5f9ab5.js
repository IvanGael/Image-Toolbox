(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{5060:(e,s,t)=>{Promise.resolve().then(t.bind(t,805))},805:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var r=t(7437),n=t(2265),a=t(3706),i=t(8185),l=t(9733),c=t(7164),o=t(8865),d=t(8635),u=t(6740),f=t(771),h=t(6763);function m(){let[e,s]=(0,n.useState)(!0),[t,m]=(0,n.useState)(!0),[b,p]=(0,n.useState)(.5),[x,g]=(0,n.useState)(!1),[v,j]=(0,n.useState)(null),{toast:y}=(0,h.pm)(),k=async s=>{try{g(!0);let r=await u.Z.uploadFileForOpenPosesDetection(s,e,t,b);j(r)}catch(e){y({title:"Error",description:e.message,variant:"destructive"})}finally{g(!1)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"container max-w-4xl py-6 space-y-6",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold tracking-tight",children:"Pose Detection"}),(0,r.jsx)("p",{className:"text-muted-foreground",children:"Detect human poses in images using advanced AI models. Visualize body keypoints and skeletons."})]}),(0,r.jsxs)("div",{className:"grid gap-6 md:grid-cols-2",children:[(0,r.jsxs)(i.Zb,{children:[(0,r.jsxs)(i.Ol,{children:[(0,r.jsx)(i.ll,{children:"Settings"}),(0,r.jsx)(i.SZ,{children:"Configure pose detection parameters"})]}),(0,r.jsxs)(i.aY,{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("label",{className:"text-sm font-medium",children:"Show Skeleton"}),(0,r.jsx)(o.r,{checked:e,onCheckedChange:s})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("label",{className:"text-sm font-medium",children:"Show Joint Confidence"}),(0,r.jsx)(o.r,{checked:t,onCheckedChange:m})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsxs)("label",{className:"text-sm font-medium",children:["Confidence Threshold: ",(100*b).toFixed(0),"%"]}),(0,r.jsx)(d.i,{value:[b],onValueChange:e=>{let[s]=e;return p(s)},min:.1,max:1,step:.05,className:"w-full"})]}),(0,r.jsx)(a.Z,{onFileSelect:k})]})]}),(0,r.jsxs)(i.Zb,{children:[(0,r.jsxs)(i.Ol,{children:[(0,r.jsx)(i.ll,{children:"Detection Results"}),(0,r.jsx)(i.SZ,{children:x?"Processing...":"Upload an image to detect poses"})]}),(0,r.jsx)(i.aY,{className:"space-y-4",children:v&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:v,alt:"Detected Poses",className:"rounded-lg w-full"}),(0,r.jsxs)(l.z,{onClick:()=>{if(v){let e=document.createElement("a");e.href=v,e.download="pose-detection.jpg",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},className:"w-full",children:[(0,r.jsx)(c.Z,{className:"mr-2 h-4 w-4"}),"Download Result"]})]})})]})]})]}),(0,r.jsx)(f.x,{})]})}},8635:(e,s,t)=>{"use strict";t.d(s,{i:()=>l});var r=t(7437),n=t(2265),a=t(7553),i=t(9354);let l=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsxs)(a.fC,{ref:s,className:(0,i.cn)("relative flex w-full touch-none select-none items-center",t),...n,children:[(0,r.jsx)(a.fQ,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,r.jsx)(a.e6,{className:"absolute h-full bg-primary"})}),(0,r.jsx)(a.bU,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]})});l.displayName=a.fC.displayName},8865:(e,s,t)=>{"use strict";t.d(s,{r:()=>w});var r=t(7437),n=t(2265),a=t(8149),i=t(1584),l=t(8324),c=t(1715),o=t(7250),d=t(5238),u=t(5171),f="Switch",[h,m]=(0,l.b)(f),[b,p]=h(f),x=n.forwardRef((e,s)=>{let{__scopeSwitch:t,name:l,checked:o,defaultChecked:d,required:f,disabled:h,value:m="on",onCheckedChange:p,form:x,...g}=e,[v,k]=n.useState(null),w=(0,i.e)(s,e=>k(e)),N=n.useRef(!1),C=!v||x||!!v.closest("form"),[S=!1,E]=(0,c.T)({prop:o,defaultProp:d,onChange:p});return(0,r.jsxs)(b,{scope:t,checked:S,disabled:h,children:[(0,r.jsx)(u.WV.button,{type:"button",role:"switch","aria-checked":S,"aria-required":f,"data-state":y(S),"data-disabled":h?"":void 0,disabled:h,value:m,...g,ref:w,onClick:(0,a.M)(e.onClick,e=>{E(e=>!e),C&&(N.current=e.isPropagationStopped(),N.current||e.stopPropagation())})}),C&&(0,r.jsx)(j,{control:v,bubbles:!N.current,name:l,value:m,checked:S,required:f,disabled:h,form:x,style:{transform:"translateX(-100%)"}})]})});x.displayName=f;var g="SwitchThumb",v=n.forwardRef((e,s)=>{let{__scopeSwitch:t,...n}=e,a=p(g,t);return(0,r.jsx)(u.WV.span,{"data-state":y(a.checked),"data-disabled":a.disabled?"":void 0,...n,ref:s})});v.displayName=g;var j=e=>{let{control:s,checked:t,bubbles:a=!0,...i}=e,l=n.useRef(null),c=(0,o.D)(t),u=(0,d.t)(s);return n.useEffect(()=>{let e=l.current,s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(c!==t&&s){let r=new Event("click",{bubbles:a});s.call(e,t),e.dispatchEvent(r)}},[c,t,a]),(0,r.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...i,tabIndex:-1,ref:l,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function y(e){return e?"checked":"unchecked"}var k=t(9354);let w=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,r.jsx)(x,{className:(0,k.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...n,ref:s,children:(0,r.jsx)(v,{className:(0,k.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});w.displayName=x.displayName},2361:(e,s,t)=>{"use strict";function r(e,[s,t]){return Math.min(t,Math.max(s,e))}t.d(s,{u:()=>r})},7513:(e,s,t)=>{"use strict";t.d(s,{gm:()=>a});var r=t(2265);t(7437);var n=r.createContext(void 0);function a(e){let s=r.useContext(n);return e||s||"ltr"}},7250:(e,s,t)=>{"use strict";t.d(s,{D:()=>n});var r=t(2265);function n(e){let s=r.useRef({value:e,previous:e});return r.useMemo(()=>(s.current.value!==e&&(s.current.previous=s.current.value,s.current.value=e),s.current.previous),[e])}},5238:(e,s,t)=>{"use strict";t.d(s,{t:()=>a});var r=t(2265),n=t(1336);function a(e){let[s,t]=r.useState(void 0);return(0,n.b)(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});let s=new ResizeObserver(s=>{let r,n;if(!Array.isArray(s)||!s.length)return;let a=s[0];if("borderBoxSize"in a){let e=a.borderBoxSize,s=Array.isArray(e)?e[0]:e;r=s.inlineSize,n=s.blockSize}else r=e.offsetWidth,n=e.offsetHeight;t({width:r,height:n})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}t(void 0)},[e]),s}}},e=>{var s=s=>e(e.s=s);e.O(0,[807,585,599,391,130,215,744],()=>s(5060)),_N_E=e.O()}]);