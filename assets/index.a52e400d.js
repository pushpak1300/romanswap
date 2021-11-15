var D=Object.defineProperty;var k=(a,t,s)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var b=(a,t,s)=>(k(a,typeof t!="symbol"?t+"":t,s),s);import{o as u,c as x,d as f,a as w,w as c,b as e,e as i,u as l,S as M,D as V,r as v,T as y,f as N,g as L,h as I,i as O,j as T,k as p,l as j,m as S,v as A,t as _,n as B,p as X}from"./vendor.925e611e.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};P();var R=(a,t)=>{for(const[s,o]of t)a[s]=o;return a};const E={},q={class:"flex-shrink-0 flex items-center bg-primary p-5 text-secondary font-bold text-lg"};function F(a,t){return u(),x("div",q," ROMAN SWAP ")}var K=R(E,[["render",F]]);const U={class:"mx-auto px-2 sm:px-6 lg:px-8"},W={class:"relative flex items-center justify-between"},z={class:"flex-1 flex items-stretch justify-start"},G={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},H={id:"ShareButton",type:"button",class:"bg-primary p-2 rounded-full text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-secondary"},J=e("span",{class:"sr-only"},"View notifications",-1),Q=f({setup(a){return(t,s)=>(u(),w(l(V),{as:"nav",class:"h-1/5"},{default:c(()=>[e("div",U,[e("div",W,[e("div",z,[i(K)]),e("div",G,[e("button",H,[J,i(l(M),{class:"h-5 w-8","aria-hidden":"true"})])])])])]),_:1}))}});class ${static convert(t){let s="";return Object.keys(this.romanDecimalMapping).forEach(o=>{for(;t>=this.romanDecimalMapping[o];)s+=o,t-=this.romanDecimalMapping[o]}),s}}b($,"romanDecimalMapping",{M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1});const Y={class:"absolute inset-0 overflow-hidden"},Z={class:"fixed inset-y-0 right-0 pl-10 max-w-full flex"},ee={class:"relative w-screen max-w-md"},te={class:"absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"},se=e("span",{class:"sr-only"},"Close panel",-1),oe={class:"h-full flex flex-col py-6 bg-primary text-secondary shadow-xl overflow-y-scroll"},ne={class:"px-4 sm:px-6"},ae=p(" Panel title "),re=e("div",{class:"mt-6 relative flex-1 px-4 sm:px-6"},null,-1),ie=f({setup(a,{expose:t}){const s=v(!1),o=()=>{s.value=!s.value};return t({toggle:o}),(n,r)=>(u(),w(l(T),{as:"template",show:s.value},{default:c(()=>[i(l(O),{as:"div",class:"fixed inset-0 overflow-hidden",onClose:o},{default:c(()=>[e("div",Y,[i(l(y),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[i(l(N),{class:"absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),e("div",Z,[i(l(y),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:c(()=>[e("div",ee,[i(l(y),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[e("div",te,[e("button",{type:"button",class:"rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:o},[se,i(l(L),{class:"h-6 w-6","aria-hidden":"true"})])])]),_:1}),e("div",oe,[e("div",ne,[i(l(I),{class:"text-lg font-medium"},{default:c(()=>[ae]),_:1})]),re])])]),_:1})])])]),_:1})]),_:1},8,["show"]))}}),le={class:"h-4/5 px-4 lg:px-6"},ce={class:"sm:flex sm:justify-center sm:items-center"},de={class:"sm:w-1/3 text-center"},ue=e("label",{for:"number",class:"block text-2xl font-semibold text-primary"},"Number",-1),me={class:"mt-2 text-center"},fe={class:"sm:px-24 py-16 text-center"},pe=e("div",{class:"text-3xl sm:text-left sm:font-semibold"}," Roman equivalent is: ",-1),_e={class:"text-5xl sm:text-9xl sm:text-center font-extrabold my-5 sm:my-2"},he={class:"text-2xl sm:text-right my-4 sm:my-1"},xe=p(" Roman value of "),ve=e("br",{class:"block sm:hidden"},null,-1),ye={class:"font-semibold"},ge=p(" is "),be={class:"font-semibold"},we=p(" More Info "),$e=f({setup(a){const t=30,s=3999,o=v(t),n=v(),r=()=>{var h;(h=n.value)==null||h.toggle()},d=j(()=>!o.value||o.value<1||o.value>s?"NA":$.convert(o.value));return(h,g)=>(u(),x("div",le,[e("div",ce,[e("div",de,[ue,e("div",me,[S(e("input",{id:"number","onUpdate:modelValue":g[0]||(g[0]=m=>o.value=m),type:"number",class:"shadow-sm text-center focus:ring-primary focus:border-primary w-full text-xl border-primary rounded-md",autofocus:"",placeholder:"12345","aria-describedby":"number-description",max:"9999999",min:"1"},null,512),[[A,o.value]])]),e("p",{id:"number-description",class:"mt-2 text-lg sm:text-sm font-medium text-primary"}," Max: "+_(s))])]),e("div",fe,[pe,e("div",_e,_(l(d)),1),e("div",he,[e("div",null,[xe,ve,e("span",ye,_(o.value),1),ge,e("span",be,_(l(d)),1)]),e("div",{class:"underline cursor-pointer select-none",onClick:r},[we,i(l(B),{class:"h-6 w-6 inline-block"})])]),i(ie,{ref:(m,C)=>{C.infoCard=m,n.value=m}},null,512)])]))}}),Ce={class:"h-screen"},De=f({setup(a){return(t,s)=>(u(),x("div",Ce,[i(Q),i($e)]))}});X(De).mount("#app");
