import{S as a,i as s,s as e,j as t,e as n,t as r,l as o,c as i,a as u,b as c,d as h,f as l,g as p,h as d,n as f,G as m,B as v,K as g,o as y,M as P,J as x,N as b,O as j}from"../chunks/index-585350b1.js";import{r as E}from"../chunks/singletons-dd9f995d.js";import{i as I}from"../chunks/isAdmin-7efdb847.js";import"../chunks/index-91a70072.js";const N=async function(a,s){return E.goto(a,s,[])};function T(a){let s,e,r,c,d,f,m,v;return{c(){s=n("form"),e=n("input"),r=t(),c=n("input"),d=t(),f=n("input"),this.h()},l(a){s=i(a,"FORM",{});var t=u(s);e=i(t,"INPUT",{type:!0,placeholder:!0}),r=o(t),c=i(t,"INPUT",{type:!0,placeholder:!0}),d=o(t),f=i(t,"INPUT",{type:!0}),t.forEach(h),this.h()},h(){y(e,"type","text"),y(e,"placeholder","Username"),y(c,"type","password"),y(c,"placeholder","Password"),y(f,"type","submit")},m(t,n){l(t,s,n),p(s,e),P(e,a[0]),p(s,r),p(s,c),P(c,a[1]),p(s,d),p(s,f),m||(v=[x(e,"input",a[5]),x(c,"input",a[6]),x(s,"submit",b(a[4]))],m=!0)},p(a,s){1&s&&e.value!==a[0]&&P(e,a[0]),2&s&&c.value!==a[1]&&P(c,a[1])},d(a){a&&h(s),m=!1,j(v)}}}function U(a){let s,e,d,m,v,g,P;return{c(){s=n("h1"),e=r("You Are Logged In"),d=t(),m=n("h3"),v=r("Go To "),g=n("a"),P=r("Panel"),this.h()},l(a){s=i(a,"H1",{});var t=u(s);e=c(t,"You Are Logged In"),t.forEach(h),d=o(a),m=i(a,"H3",{});var n=u(m);v=c(n,"Go To "),g=i(n,"A",{href:!0});var r=u(g);P=c(r,"Panel"),r.forEach(h),n.forEach(h),this.h()},h(){y(g,"href","/panel")},m(a,t){l(a,s,t),p(s,e),l(a,d,t),l(a,m,t),p(m,v),p(m,g),p(g,P)},p:f,d(a){a&&h(s),a&&h(d),a&&h(m)}}}function k(a){let s,e,m;function v(a,s){return a[3]?U:T}let g=v(a),y=g(a);return{c(){y.c(),s=t(),e=n("h1"),m=r(a[2])},l(t){y.l(t),s=o(t),e=i(t,"H1",{});var n=u(e);m=c(n,a[2]),n.forEach(h)},m(a,t){y.m(a,t),l(a,s,t),l(a,e,t),p(e,m)},p(a,[e]){g===(g=v(a))&&y?y.p(a,e):(y.d(1),y=g(a),y&&(y.c(),y.m(s.parentNode,s))),4&e&&d(m,a[2])},i:f,o:f,d(a){y.d(a),a&&h(s),a&&h(e)}}}const A=!0;function w(a,s,e){let t,n,r;m(a,I,(a=>e(3,t=a)));let o="";return v((()=>{!0===t&&N("/panel")})),[n,r,o,t,function(){"admin"===n&&"admin."===r?(g(I,t=!0,t),N("/panel")):(e(2,o="Wrong Username Or Password"),g(I,t=!1,t)),e(0,n=""),e(1,r="")},function(){n=this.value,e(0,n)},function(){r=this.value,e(1,r)}]}export default class extends a{constructor(a){super(),s(this,a,w,k,e,{})}}export{A as prerender};
