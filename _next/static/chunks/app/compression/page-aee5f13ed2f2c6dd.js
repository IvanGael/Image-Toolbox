(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{7485:(e,s,r)=>{Promise.resolve().then(r.bind(r,9126))},9126:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>h});var i=r(7437),l=r(2265),t=r(7164),a=r(3706),n=r(9733),o=r(8635),c=r(8185),d=r(6740),u=r(771),m=r(6763);function h(){let[e,s]=(0,l.useState)(80),[r,h]=(0,l.useState)(!1),[f,x]=(0,l.useState)(null),{toast:g}=(0,m.pm)(),b=async s=>{try{h(!0);let r=await d.Z.uploadFileForCompression(s,e);x(r)}catch(e){g({title:"Error",description:e.message,variant:"destructive"})}finally{h(!1)}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"container max-w-4xl py-6 space-y-6",children:[(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsx)("h1",{className:"text-3xl font-bold tracking-tight",children:"Image Compression"}),(0,i.jsx)("p",{className:"text-muted-foreground",children:"Compress your images while maintaining quality. Adjust the quality slider to find the perfect balance between file size and image quality."})]}),(0,i.jsxs)("div",{className:"grid gap-6 md:grid-cols-2",children:[(0,i.jsxs)(c.Zb,{children:[(0,i.jsxs)(c.Ol,{children:[(0,i.jsx)(c.ll,{children:"Original Image"}),(0,i.jsx)(c.SZ,{children:"Upload your image here"})]}),(0,i.jsx)(c.aY,{children:(0,i.jsx)(a.Z,{onFileSelect:b})})]}),(0,i.jsxs)(c.Zb,{children:[(0,i.jsxs)(c.Ol,{children:[(0,i.jsx)(c.ll,{children:"Compression Settings"}),(0,i.jsx)(c.SZ,{children:"Adjust the compression quality"})]}),(0,i.jsxs)(c.aY,{className:"space-y-6",children:[(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsxs)("label",{className:"text-sm font-medium",children:["Quality: ",e,"%"]}),(0,i.jsx)(o.i,{value:[e],onValueChange:e=>{let[r]=e;return s(r)},min:1,max:100,step:1,className:"w-full"})]}),f&&(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsx)("img",{src:f,alt:"Compressed",className:"rounded-lg w-full"}),(0,i.jsxs)(n.z,{onClick:()=>{if(f){let e=document.createElement("a");e.href=f,e.download="compressed-image.jpg",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},className:"w-full",children:[(0,i.jsx)(t.Z,{className:"mr-2 h-4 w-4"}),"Download Compressed Image"]})]})]})]})]})]}),(0,i.jsx)(u.x,{})]})}},8635:(e,s,r)=>{"use strict";r.d(s,{i:()=>n});var i=r(7437),l=r(2265),t=r(7553),a=r(9354);let n=l.forwardRef((e,s)=>{let{className:r,...l}=e;return(0,i.jsxs)(t.fC,{ref:s,className:(0,a.cn)("relative flex w-full touch-none select-none items-center",r),...l,children:[(0,i.jsx)(t.fQ,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,i.jsx)(t.e6,{className:"absolute h-full bg-primary"})}),(0,i.jsx)(t.bU,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]})});n.displayName=t.fC.displayName},2361:(e,s,r)=>{"use strict";function i(e,[s,r]){return Math.min(r,Math.max(s,e))}r.d(s,{u:()=>i})},7513:(e,s,r)=>{"use strict";r.d(s,{gm:()=>t});var i=r(2265);r(7437);var l=i.createContext(void 0);function t(e){let s=i.useContext(l);return e||s||"ltr"}},7250:(e,s,r)=>{"use strict";r.d(s,{D:()=>l});var i=r(2265);function l(e){let s=i.useRef({value:e,previous:e});return i.useMemo(()=>(s.current.value!==e&&(s.current.previous=s.current.value,s.current.value=e),s.current.previous),[e])}},5238:(e,s,r)=>{"use strict";r.d(s,{t:()=>t});var i=r(2265),l=r(1336);function t(e){let[s,r]=i.useState(void 0);return(0,l.b)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let s=new ResizeObserver(s=>{let i,l;if(!Array.isArray(s)||!s.length)return;let t=s[0];if("borderBoxSize"in t){let e=t.borderBoxSize,s=Array.isArray(e)?e[0]:e;i=s.inlineSize,l=s.blockSize}else i=e.offsetWidth,l=e.offsetHeight;r({width:i,height:l})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}r(void 0)},[e]),s}}},e=>{var s=s=>e(e.s=s);e.O(0,[807,585,599,391,130,215,744],()=>s(7485)),_N_E=e.O()}]);