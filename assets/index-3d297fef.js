import{d as _,u as h,g as p,o as l,c as d,a as c,e as s,L as g,S as m,b as t,h as b,F as f,r as y,t as n,i as r}from"./index-b82181c4.js";const v={class:"container pt-75"},S={class:"row"},x={class:"col-md-12"},k={class:"table"},L=t("thead",null,[t("th",null,"品名"),t("th",null,"數量"),t("th",null,"單價")],-1),U={class:"align-middle"},P={class:"align-middle"},w={class:"align-middle text-right"},B=t("td",{colspan:"2",class:"text-right"},"總計",-1),F={class:"text-right"},N={class:"table"},V=t("th",{width:"100"},"Email",-1),C=t("th",null,"姓名",-1),E=t("th",null,"收件人電話",-1),M=t("th",null,"收件人地址",-1),O=t("th",null,"付款狀態",-1),q={key:0},D={key:1,class:"text-success"},H={key:0,class:"text-right"},T=t("button",{type:"submit",class:"btn btn-danger"},"確認付款去",-1),j=[T],I=_({__name:"index",setup(z){const e=h(),{getOrder:u,payOrder:i}=e;return p(u),(A,a)=>(l(),d("div",null,[c(s(g),{active:s(e).isLoading,"onUpdate:active":a[0]||(a[0]=o=>s(e).isLoading=o),"can-cancel":!0,"is-full-page":!0},null,8,["active"]),c(m),t("div",v,[t("div",S,[t("div",x,[t("form",{onSubmit:a[1]||(a[1]=b((...o)=>s(i)&&s(i)(...o),["prevent"]))},[t("table",k,[L,t("tbody",null,[(l(!0),d(f,null,y(s(e).orderProduct,o=>(l(),d("tr",{key:o.id},[t("td",U,n(o.product.title),1),t("td",P,n(o.qty)+"/"+n(o.product.unit),1),t("td",w,n(o.final_total),1)]))),128))]),t("tfoot",null,[t("tr",null,[B,t("td",F,n(s(e).orderFinalTotal),1)])])]),t("table",N,[t("tbody",null,[t("tr",null,[V,t("td",null,n(s(e).orderUser.email),1)]),t("tr",null,[C,t("td",null,n(s(e).orderUser.name),1)]),t("tr",null,[E,t("td",null,n(s(e).orderUser.tel),1)]),t("tr",null,[M,t("td",null,n(s(e).orderUser.address),1)]),t("tr",null,[O,t("td",null,[s(e).orderPaidStatus?r("",!0):(l(),d("span",q,"尚未付款")),s(e).orderPaidStatus?(l(),d("span",D,"付款完成")):r("",!0)])])])]),s(e).orderPaidStatus===!1?(l(),d("div",H,j)):r("",!0)],32)])])])]))}});export{I as default};