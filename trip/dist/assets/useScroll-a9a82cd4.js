import{B as q,H as J,e as r,n as T,aI as K,O as Q,f as h,D as F,E as D,P as W,Z as $,a3 as ee,I as U,a6 as X,U as te,L as oe,Y as ae,o as le,as as se,ap as ne,al as ie}from"./index-8848ccae.js";import{a as ue,b as ce}from"./index-6f717f01.js";const[re,v]=q("rate");function de(e,n,l,i){return e>=n?{status:"full",value:1}:e+.5>=n&&l&&!i?{status:"half",value:.5}:e+1>=n&&l&&i?{status:"half",value:Math.round((e-n+1)*1e10)/1e10}:{status:"void",value:0}}const fe={size:F,icon:D("star"),color:String,count:W(5),gutter:F,clearable:Boolean,readonly:Boolean,disabled:Boolean,voidIcon:D("star-o"),allowHalf:Boolean,voidColor:String,touchable:$,iconPrefix:String,modelValue:ee(0),disabledColor:String};var me=J({name:re,props:fe,emits:["change","update:modelValue"],setup(e,{emit:n}){const l=ue(),[i,u]=ce(),g=r(),P=T(()=>e.readonly||e.disabled),H=T(()=>P.value||!e.touchable),Y=T(()=>Array(+e.count).fill("").map((o,t)=>de(e.modelValue,t+1,e.allowHalf,e.readonly)));let s,d,b=Number.MAX_SAFE_INTEGER,E=Number.MIN_SAFE_INTEGER;const S=()=>{d=X(g);const o=i.value.map(X);s=[],o.forEach((t,a)=>{b=Math.min(t.top,b),E=Math.max(t.top,E),e.allowHalf?s.push({score:a+.5,left:t.left,top:t.top,height:t.height},{score:a+1,left:t.left+t.width/2,top:t.top,height:t.height}):s.push({score:a+1,left:t.left,top:t.top,height:t.height})})},I=(o,t)=>{for(let a=s.length-1;a>0;a--)if(t>=d.top&&t<=d.bottom){if(o>s[a].left&&t>=s[a].top&&t<=s[a].top+s[a].height)return s[a].score}else{const f=t<d.top?b:E;if(o>s[a].left&&s[a].top===f)return s[a].score}return e.allowHalf?.5:1},V=o=>{P.value||o===e.modelValue||(n("update:modelValue",o),n("change",o))},x=o=>{H.value||(l.start(o),S())},G=o=>{if(!H.value&&(l.move(o),l.isHorizontal()&&!l.isTap.value)){const{clientX:t,clientY:a}=o.touches[0];te(o),V(I(t,a))}},O=(o,t)=>{const{icon:a,size:f,color:N,count:y,gutter:C,voidIcon:k,disabled:c,voidColor:B,allowHalf:M,iconPrefix:z,disabledColor:L}=e,R=t+1,p=o.status==="full",m=o.status==="void",Z=M&&o.value>0&&o.value<1;let _;C&&R!==+y&&(_={paddingRight:oe(C)});const j=A=>{S();let w=M?I(A.clientX,A.clientY):R;e.clearable&&l.isTap.value&&w===e.modelValue&&(w=0),V(w)};return h("div",{key:t,ref:u(t),role:"radio",style:_,class:v("item"),tabindex:c?void 0:0,"aria-setsize":y,"aria-posinset":R,"aria-checked":!m,onClick:j},[h(U,{size:f,name:p?a:k,class:v("icon",{disabled:c,full:p}),color:c?L:p?N:B,classPrefix:z},null),Z&&h(U,{size:f,style:{width:o.value+"em"},name:m?k:a,class:v("icon",["half",{disabled:c,full:!m}]),color:c?L:m?B:N,classPrefix:z},null)])};return K(()=>e.modelValue),Q("touchmove",G,{target:g}),()=>h("div",{ref:g,role:"radiogroup",class:v({readonly:e.readonly,disabled:e.disabled}),tabindex:e.disabled?void 0:0,"aria-disabled":e.disabled,"aria-readonly":e.readonly,onTouchstartPassive:x},[Y.value.map(O)])}});const ge=ae(me);function be(){const e=r(document.documentElement.clientHeight);let n=r(document.documentElement.scrollTop),l=r(document.documentElement.offsetHeight),i=r(!1);const u=()=>{n.value=document.documentElement.scrollTop,l.value=document.documentElement.offsetHeight,e.value+n.value>=l.value&&(i.value=!0)};return le(()=>{window.addEventListener("scroll",u)}),se(()=>{window.removeEventListener("scroll",u)}),ne(()=>{window.addEventListener("scroll",u)}),ie(()=>{window.removeEventListener("scroll",u)}),{isBottom:i,clientHeight:e,scrollTop:n,offsetHeight:l}}export{ge as R,be as u};
