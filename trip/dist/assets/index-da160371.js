import{q as G,_ as m,e as $,l as z,a as c,m as A,w as B,b as t,c as i,F as b,g as x,s as X,u as a,t as l,ae as W,af as D,aD as Z,h as R,p as T,d as k,f as u,I as K,k as U,n as j,aG as Y,i as q,o as E,aH as H}from"./index-8848ccae.js";import{N as Q}from"./index-7c26babc.js";import{h as O}from"./index-6f717f01.js";import{S as J,b as tt,T as st,a as et}from"./index-58a5dddd.js";import{R as ot,u as ct}from"./useScroll-a9a82cd4.js";import"./use-id-541d6243.js";const v=G("details",{state:()=>({detail:{},housePic:[],houseName:"",houseTags:{},commentBrief:{},housePosition:{},houseFacilitys:[],landlord:{},houseComment:{},houseRules:[],priceDescription:"",finalPrice:0,productPrice:0}),actions:{async httpDetails(n,s){const d=await O(n,s);this.detail=d.data.data;let e=this.detail.mainPart;this.housePic=e.topModule.housePicture.housePics,this.houseName=e.topModule.houseName,this.houseTags=e.topModule.houseTags,this.commentBrief=e.topModule.commentBrief,this.housePosition=e.topModule.nearByPosition,this.housePosition.longitude=e.dynamicModule.positionModule.longitude,this.housePosition.latitude=e.dynamicModule.positionModule.latitude,this.houseFacilitys=e.dynamicModule.facilityModule.houseFacility.houseFacilitys,this.landlord=e.dynamicModule.landlordModule,this.houseComment=e.dynamicModule.commentModule,this.houseRules=e.dynamicModule.rulesModule.orderRules,this.priceDescription=e.introductionModule.introduction,this.finalPrice=this.detail.pricePart.priceModule.product.finalPrice,this.productPrice=this.detail.pricePart.priceModule.product.productPrice}}});const nt=["src"],at={class:"custom-indicator"},it={__name:"swiper",setup(n){const s=v(),d=$({}),e=o=>{let _=d.value[o==null?void 0:o.enumPictureCategory];return(_==null?void 0:_.findIndex(h=>h===o))+1};return z(s,()=>{for(let o=0;o<s.housePic.length;o++)d.value[s.housePic[o].enumPictureCategory]=[];for(let o=0;o<s.housePic.length;o++)d.value[s.housePic[o].enumPictureCategory].push(s.housePic[o])}),(o,_)=>{const h=J,r=tt;return c(),A(r,{autoplay:3e3},{indicator:B(({active:p,total:g})=>[t("div",at,[(c(!0),i(b,null,x(d.value,(f,y,N)=>{var M,P,S;return c(),i("span",{class:X({active:((M=a(s).housePic[p])==null?void 0:M.enumPictureCategory)==y})},[t("span",null,l(f[0].title),1),W(t("span",null,l(e((P=a(s))==null?void 0:P.housePic[p]))+"/"+l(f.length),513),[[D,((S=a(s).housePic[p])==null?void 0:S.enumPictureCategory)==y]])],2)}),256))])]),default:B(()=>[(c(!0),i(b,null,x(a(s).housePic,p=>(c(),A(h,null,{default:B(()=>[t("img",{src:p.albumUrl,alt:""},null,8,nt)]),_:2},1024))),256))]),_:1})}}},dt=m(it,[["__scopeId","data-v-63a7a6e0"]]);const lt={class:"app"},_t={class:"tags"},rt=["src"],ut={__name:"main_tags",setup(n){const s=v();return(d,e)=>(c(),i("div",lt,[t("div",_t,[(c(!0),i(b,null,x(a(s).houseTags,o=>{var _,h;return c(),i(b,null,[o.tagText?(c(),i("div",{key:0,class:"tag",style:Z({backgroundColor:(_=o.tagText)==null?void 0:_.background.color,color:(h=o.tagText)==null?void 0:h.color})},l(o.tagText?o.tagText.text:""),5)):(c(),i("img",{key:1,src:o.tagPic,alt:""},null,8,rt))],64)}),256))])]))}},ht=m(ut,[["__scopeId","data-v-14b52ab9"]]);const pt={class:"app"},mt={class:"comment"},vt={class:"left"},bt={class:"center"},ft={class:"right"},xt={__name:"main_comment_brief",setup(n){const s=v();return(d,e)=>(c(),i("div",pt,[t("div",mt,[t("div",vt,[R(l(a(s).commentBrief.overall)+" ",1),t("span",null,l(a(s).commentBrief.scoreTitle),1)]),t("div",bt,l(a(s).commentBrief.commentBrief),1),t("div",ft,l(a(s).commentBrief.totalCount)+"条评论 > ",1)])]))}},gt=m(xt,[["__scopeId","data-v-2541472d"]]);const yt=n=>(T("data-v-98803a55"),n=n(),k(),n),Mt={class:"app"},Pt={class:"comment"},St={class:"left"},Ct=yt(()=>t("div",{class:"right"}," 地图 周边 > ",-1)),At={__name:"main_position",setup(n){const s=v();return(d,e)=>(c(),i("div",Mt,[t("div",Pt,[t("div",St,l(a(s).housePosition.address),1),Ct])]))}},Tt=m(At,[["__scopeId","data-v-98803a55"]]);const kt={class:"app"},wt={class:"main"},Bt={class:"title"},$t={__name:"main",setup(n){const s=v();return(d,e)=>(c(),i("div",kt,[t("div",wt,[t("div",Bt,l(a(s).houseName),1),u(ht),u(gt),u(Tt)])]))}},zt=m($t,[["__scopeId","data-v-545e2931"]]);const Rt={class:"app"},Vt={class:"title"},Nt={__name:"index",props:{title:String},setup(n){const s=n;return(d,e)=>(c(),i("div",Rt,[t("div",Vt,l(s.title),1)]))}},w=m(Nt,[["__scopeId","data-v-1c32d4c8"]]);const It={class:"app"},Kt={class:"bottom"},Ut={__name:"index",props:{text:String},setup(n){const s=n;return(d,e)=>(c(),i("div",It,[t("div",Kt,l(s.text)+" > ",1)]))}},V=m(Ut,[["__scopeId","data-v-461dfbaf"]]);const Ft={class:"app"},Lt={class:"fac"},Gt={class:"factilities"},Xt={class:"group"},Wt={class:"title"},Dt=["src"],Zt={class:"items"},jt={class:"item"},Yt={__name:"main_facilities",setup(n){const s=v(),d=e=>{let o;return e.length>4?o=e.slice(0,4):o=e,o};return(e,o)=>{const _=K;return c(),i("div",Ft,[t("div",Lt,[u(w,{title:"房屋设施"}),t("div",Gt,[(c(!0),i(b,null,x(a(s).houseFacilitys.slice(0,3),h=>(c(),i("div",Xt,[t("div",Wt,[t("img",{src:h.icon,alt:""},null,8,Dt),t("div",null,l(h.groupName),1)]),t("div",Zt,[(c(!0),i(b,null,x(d(h.facilitys),r=>(c(),i("div",jt,[r.deleted==!1?(c(),A(_,{key:0,name:"passed",color:"green"})):(c(),A(_,{key:1,name:"close",color:"red"})),R(" "+l(r.name),1)]))),256))])]))),256))]),u(V,{text:"查看全部设施"})])])}}},qt=m(Yt,[["__scopeId","data-v-5177be87"]]);const Et=n=>(T("data-v-ea06ad16"),n=n(),k(),n),Ht={class:"app"},Qt={class:"landlord"},Ot={class:"introduce"},Jt=["src"],ts={class:"myself"},ss={class:"left"},es={class:"logo"},os=["src"],cs={class:"name"},ns={class:"top"},as={class:"bottom"},is={class:"tag"},ds=Et(()=>t("div",{class:"right"}," 联系房东 ",-1)),ls={class:"comment"},_s={class:"suggest"},rs={class:"title"},us={class:"number"},hs={class:"tip"},ps={__name:"landlord",setup(n){const s=v();return(d,e)=>{var o;return c(),i("div",Ht,[t("div",Qt,[u(w,{title:"房东介绍"}),t("div",Ot,[t("img",{src:a(s).landlord.topScroll,alt:"",class:"top"},null,8,Jt),t("div",ts,[t("div",ss,[t("div",es,[t("img",{src:(o=a(s).landlord)==null?void 0:o.hotelLogo,alt:""},null,8,os)]),t("div",cs,[t("div",ns,l(a(s).landlord.hotelName),1),t("div",as,[(c(!0),i(b,null,x(a(s).landlord.hotelTags,_=>(c(),i("div",is,l(_.tagText.text),1))),256))])])]),ds]),t("div",ls,[(c(!0),i(b,null,x(a(s).landlord.hotelSummary,_=>(c(),i("div",_s,[t("div",rs,l(_.title),1),t("div",us,l(_.introduction),1),t("div",hs,l(_.tip),1)]))),256))])]),u(V,{text:"查看全部设施"})])])}}},ms=m(ps,[["__scopeId","data-v-ea06ad16"]]);const vs=n=>(T("data-v-af5cd083"),n=n(),k(),n),bs={class:"app"},fs={class:"suggest"},xs={class:"main"},gs={class:"top"},ys={class:"score"},Ms={class:"left"},Ps={class:"text"},Ss=vs(()=>t("div",{class:"line"},null,-1)),Cs={class:"right"},As={class:"title"},Ts={class:"count"},ks={class:"star"},ws={class:"focus"},Bs={class:"focus_item"},$s={class:"center"},zs={class:"tagVo"},Rs={class:"bottom"},Vs={class:"user"},Ns={class:"pic"},Is=["src"],Ks={class:"infos"},Us={class:"name"},Fs=["src"],Ls={class:"time"},Gs={class:"comment"},Xs={__name:"suggests",setup(n){const s=v();let d="";const e=$(0);return z(s,()=>{d=`查看全部${s.houseComment.totalCount}条评论`,e.value=s.houseComment.overall}),(o,_)=>{var r,p,g,f,y,N,M,P,S,I;const h=ot;return c(),i("div",bs,[t("div",fs,[u(w,{title:"热门评论"}),t("div",xs,[t("div",gs,[t("div",ys,[t("div",Ms,[t("span",Ps,l(a(s).houseComment.overall),1),Ss]),t("div",Cs,[t("div",As,l(a(s).houseComment.scoreTitle),1),t("div",Ts,l(a(s).houseComment.totalCount)+"条评论 ",1),t("div",ks,[u(h,{modelValue:e.value,"onUpdate:modelValue":_[0]||(_[0]=C=>e.value=C),readonly:"","allow-half":"",size:"12px"},null,8,["modelValue"])])])]),t("div",ws,[(c(!0),i(b,null,x(a(s).houseComment.subScoresFocus,C=>(c(),i("div",Bs,l(C.text),1))),256))])]),t("div",$s,[(c(!0),i(b,null,x(a(s).houseComment.commentTagVo,C=>(c(),i("div",zs,l(C.text),1))),256))]),t("div",Rs,[t("div",Vs,[t("div",Ns,[t("img",{src:(p=(r=a(s).houseComment)==null?void 0:r.comment)==null?void 0:p.userAvatars,alt:""},null,8,Is)]),t("div",Ks,[t("div",Us,[R(l((f=(g=a(s).houseComment)==null?void 0:g.comment)==null?void 0:f.userName)+" ",1),t("span",null,[(N=(y=a(s).houseComment)==null?void 0:y.comment)!=null&&N.memberLevelIcon?(c(),i("img",{key:0,src:(P=(M=a(s).houseComment)==null?void 0:M.comment)==null?void 0:P.memberLevelIcon,alt:""},null,8,Fs)):U("",!0)])]),t("div",Ls,l((S=a(s).houseComment.comment)==null?void 0:S.checkInDate),1)])]),t("div",Gs,l((I=a(s).houseComment.comment)==null?void 0:I.commentDetail),1)])]),u(V,{text:a(d)},null,8,["text"])])])}}},Ws=m(Xs,[["__scopeId","data-v-af5cd083"]]);const Ds={class:"app"},Zs={class:"reservation"},js={class:"main"},Ys={class:"item"},qs={class:"label"},Es={class:"text"},Hs={__name:"reservation",setup(n){const s=v();return(d,e)=>(c(),i("div",Ds,[t("div",Zs,[u(w,{title:"预订须知"}),t("div",js,[(c(!0),i(b,null,x(a(s).houseRules,o=>(c(),i("div",Ys,[t("div",qs,l(o.title),1),t("div",Es,l(o.introduction),1)]))),256))])])]))}},Qs=m(Hs,[["__scopeId","data-v-a01cecac"]]);function Os(n,s){const d=new URL(n);return d.searchParams.append("key","cc0c5ec84c809f041f6b5349baf8fe47"),d.searchParams.append("lkocation",s),d.searchParams.append("markers",`mid,,A:${s}`),d.href}const Js={class:"app"},te={class:"address"},se={class:"map"},ee=["src"],oe={__name:"address",setup(n){const s=v();let d;const e=$("");return z(s,()=>{var o,_,h,r;d=`${(_=(o=s.housePosition)==null?void 0:o.longitude)==null?void 0:_.toFixed(5)},${(r=(h=s.housePosition)==null?void 0:h.latitude)==null?void 0:r.toFixed(5)}`,e.value=Os("https://restapi.amap.com/v3/staticmap",d)}),(o,_)=>(c(),i("div",Js,[t("div",te,[u(w,{title:"位置周边"}),t("div",se,[t("img",{src:e.value,alt:""},null,8,ee)]),u(V,{text:"查看更多周边信息"})])]))}},ce=m(oe,[["__scopeId","data-v-942cde2a"]]),ne="data:image/png;base64,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";const F=n=>(T("data-v-11a08471"),n=n(),k(),n),ae={class:"app"},ie={class:"bottom"},de=F(()=>t("div",{class:"title"}," 价格说明 ",-1)),le={class:"text"},_e=F(()=>t("div",{class:"logo"},[t("img",{src:ne,alt:""}),t("div",null,"弘源旅途, 永无止境!")],-1)),re={__name:"description",setup(n){const s=v();return(d,e)=>(c(),i("div",ae,[t("div",ie,[de,t("div",le,l(a(s).priceDescription),1),_e])]))}},ue=m(re,[["__scopeId","data-v-11a08471"]]);const L=n=>(T("data-v-c475cdec"),n=n(),k(),n),he={class:"app"},pe={class:"main"},me={class:"left"},ve=L(()=>t("div",{class:"text"},"聊天",-1)),be={class:"center"},fe={class:"final"},xe={class:"product"},ge=L(()=>t("div",{class:"right"}," 预订当前房源 ",-1)),ye={__name:"index",setup(n){const s=v();return(d,e)=>{const o=K;return c(),i("div",he,[t("div",pe,[t("div",me,[u(o,{name:"comment-o",size:"20px"}),ve]),t("div",be,[t("span",fe,"￥"+l(a(s).finalPrice),1),R(" / 晚 "),t("span",xe,"￥"+l(a(s).productPrice),1)]),ge])])}}},Me=m(ye,[["__scopeId","data-v-c475cdec"]]);const Pe={key:0,class:"app"},Se={class:"nav"},Ce={__name:"index",props:{sections:Array},setup(n){const s=n,d=$(0),{scrollTop:e}=ct(),o=j(()=>e.value>=240),_=()=>{scrollTo({top:s.sections[d.value].value.offsetTop-44,behavior:"smooth"})};return z(e,()=>{if(e.value>=240){let h=s.sections.length-1;for(let r=1;r<s.sections.length;r++)if(e.value<s.sections[r].value.offsetTop-45){h=r-1;break}d.value=h}}),(h,r)=>{const p=st,g=et;return o.value?(c(),i("div",Pe,[t("div",Se,[u(g,{active:d.value,"onUpdate:active":r[0]||(r[0]=f=>d.value=f),color:"#ff9645",onClickTab:_},{default:B(()=>[(c(!0),i(b,null,x(s.sections,f=>(c(),A(p,{title:f.title},null,8,["title"]))),256))]),_:1},8,["active"])])])):U("",!0)}}},Ae=m(Ce,[["__scopeId","data-v-52927bcb"]]);const Te={__name:"index",setup(n){const d=Y().params.id,e=()=>history.back(),o=v(),_=[];async function h(){console.log(d),await o.httpDetails("http://codercba.com:1888/api/detail/infos",{houseId:d})}q(()=>{h()}),E(()=>{window.scrollTo(0,0)});let r=p=>{_.push({title:p==null?void 0:p.$el.getAttribute("name"),value:p==null?void 0:p.$el})};return(p,g)=>{const f=Q;return H([a(r)],()=>(c(),i("div",{class:"app"},[u(f,{title:"房屋详情","left-text":"旅途","left-arrow":"",onClickLeft:e}),u(dt),u(zt,{name:"详情",ref:a(r)},null,512),u(qt,{name:"设施",ref:a(r)},null,512),u(ms,{name:"房东",ref:a(r)},null,512),u(Ws,{name:"评论",ref:a(r)},null,512),u(Qs,{name:"须知",ref:a(r)},null,512),u(ce,{name:"地址",ref:a(r)},null,512),u(ue),u(Me),u(Ae,{sections:_})])),g,0)}}},Ve=m(Te,[["__scopeId","data-v-0864e404"]]);export{Ve as default};
