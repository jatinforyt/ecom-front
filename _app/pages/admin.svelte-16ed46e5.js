import{S as a,i as s,s as e,j as t,e as n,t as r,l as o,c,a as i,b as u,d as h,f as l,g as p,h as d,n as f,K as m,o as v,M as g,N as P,O as y,P as x,L as E}from"../chunks/index-80018fac.js";import{r as I}from"../chunks/singletons-dd9f995d.js";import{i as N}from"../chunks/isAdmin-8e5c4fbe.js";const T=async function(a,s){return I.goto(a,s,[])};function U(a){let s,e,r,u,d,f,m,E;return{c(){s=n("form"),e=n("input"),r=t(),u=n("input"),d=t(),f=n("input"),this.h()},l(a){s=c(a,"FORM",{});var t=i(s);e=c(t,"INPUT",{type:!0,placeholder:!0}),r=o(t),u=c(t,"INPUT",{type:!0,placeholder:!0}),d=o(t),f=c(t,"INPUT",{type:!0}),t.forEach(h),this.h()},h(){v(e,"type","text"),v(e,"placeholder","Username"),v(u,"type","password"),v(u,"placeholder","Password"),v(f,"type","submit")},m(t,n){l(t,s,n),p(s,e),g(e,a[0]),p(s,r),p(s,u),g(u,a[1]),p(s,d),p(s,f),m||(E=[P(e,"input",a[5]),P(u,"input",a[6]),P(s,"submit",y(a[4]))],m=!0)},p(a,s){1&s&&e.value!==a[0]&&g(e,a[0]),2&s&&u.value!==a[1]&&g(u,a[1])},d(a){a&&h(s),m=!1,x(E)}}}function b(a){let s,e,d,m,g,P,y;return{c(){s=n("h1"),e=r("You Are Logged In"),d=t(),m=n("h3"),g=r("Go To "),P=n("a"),y=r("Panel"),this.h()},l(a){s=c(a,"H1",{});var t=i(s);e=u(t,"You Are Logged In"),t.forEach(h),d=o(a),m=c(a,"H3",{});var n=i(m);g=u(n,"Go To "),P=c(n,"A",{href:!0});var r=i(P);y=u(r,"Panel"),r.forEach(h),n.forEach(h),this.h()},h(){v(P,"href","/panel")},m(a,t){l(a,s,t),p(s,e),l(a,d,t),l(a,m,t),p(m,g),p(m,P),p(P,y)},p:f,d(a){a&&h(s),a&&h(d),a&&h(m)}}}function j(a){let s,e,m;function v(a,s){return a[3]?b:U}let g=v(a),P=g(a);return{c(){P.c(),s=t(),e=n("h1"),m=r(a[2])},l(t){P.l(t),s=o(t),e=c(t,"H1",{});var n=i(e);m=u(n,a[2]),n.forEach(h)},m(a,t){P.m(a,t),l(a,s,t),l(a,e,t),p(e,m)},p(a,[e]){g===(g=v(a))&&P?P.p(a,e):(P.d(1),P=g(a),P&&(P.c(),P.m(s.parentNode,s))),4&e&&d(m,a[2])},i:f,o:f,d(a){P.d(a),a&&h(s),a&&h(e)}}}const A=!0;function k(a,s,e){let t,n,r;m(a,N,(a=>e(3,t=a)));let o="";return[n,r,o,t,function(){"admin"===n&&"admin."===r?(E(N,t=!0,t),T("/panel")):e(2,o="Wrong Username Or Password"),e(0,n=""),e(1,r="")},function(){n=this.value,e(0,n)},function(){r=this.value,e(1,r)}]}export default class extends a{constructor(a){super(),s(this,a,k,j,e,{})}}export{A as prerender};
