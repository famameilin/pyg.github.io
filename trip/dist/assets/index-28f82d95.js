import{_ as u,a as c,c as r,b as _,f as o,w as i,u as e,k as h,I as y,m,h as v,p as g,d as C}from"./index-335f02a3.js";import{B as H}from"./index-7cca7dcd.js";import{N}from"./index-1f7897b3.js";import"./index-3fc27af5.js";import{u as b,s as f}from"./index-057378b2.js";import{T as w,a as S}from"./index-881cc47c.js";import"./use-id-ad399dd1.js";const T="/assets/empty_favorite.44731802-9dd26110.png";const V={class:"app"},$={class:"nav"},z={key:0,class:"favor"},F={__name:"navBar",setup(n){const t=b(),d=()=>history.back();return(k,s)=>{const a=w,l=S,B=y,I=N;return c(),r("div",V,[_("div",$,[o(I,{"left-text":"返回","left-arrow":"",onClickLeft:d},{title:i(()=>[o(l,{active:e(t).active,"onUpdate:active":s[0]||(s[0]=p=>e(t).active=p),type:"card",color:"#ff9645"},{default:i(()=>[o(a,{title:"我的收藏"}),o(a,{title:"浏览历史"})]),_:1},8,["active"])]),right:i(()=>[o(B,{name:"wap-nav",size:"25"})]),_:1}),e(t).active==0?(c(),r("div",z,[o(l,{active:e(t).activeCH,"onUpdate:active":s[1]||(s[1]=p=>e(t).activeCH=p),color:"#ff9645"},{default:i(()=>[o(a,{title:"房屋"}),o(a,{title:"房东"})]),_:1},8,["active"])])):h("",!0)])])}}},L=u(F,[["__scopeId","data-v-7af610b7"]]);const x=n=>(g("data-v-5356c1ec"),n=n(),C(),n),U={class:"app"},E={key:1,class:"landlord"},j=x(()=>_("img",{src:T,alt:""},null,-1)),q=x(()=>_("div",{class:"text"},"暂无收藏",-1)),A={class:"vice"},D={class:"button"},G={__name:"index",setup(n){const t=b();return t.httpFavor("http://codercba.com:1888/api/favor/list"),t.httpHistory("http://codercba.com:1888/api/favor/history"),(d,k)=>{const s=y,a=H;return c(),r("div",U,[o(L,{class:"nav"}),e(t).active==0&&e(t).activeCH==0?(c(),m(f,{key:0,items:e(t).favorItems.items,isHeight:!0},null,8,["items"])):e(t).active==0&&e(t).activeCH==1?(c(),r("div",E,[j,q,_("div",A,[v("点击 "),o(s,{name:"like",color:"#666"}),v(" 即可收藏对应的房东 ")]),_("div",D,[o(a,{round:"",type:"success",size:"large",color:"#ff9645",to:"/"},{default:i(()=>[v("返回旅途")]),_:1})])])):e(t).active==1?(c(),m(f,{key:2,items:e(t).HistoryItems.items,isHeight:!0},null,8,["items"])):h("",!0)])}}},W=u(G,[["__scopeId","data-v-5356c1ec"]]);export{W as default};