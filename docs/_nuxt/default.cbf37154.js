import{_ as d,a as u}from"./TheFooter.93a06cae.js";import{s as i,r as m,p,e as _,a as h,o as k,j as o,w as b,m as r,f as T}from"./entry.eda54bec.js";const g=i({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(l,{slots:e}){const n=m(!1);return p(()=>{n.value=!0}),a=>{var c;if(n.value)return(c=e.default)==null?void 0:c.call(e);const t=e.fallback||e.placeholder;if(t)return t();const f=a.fallback||a.placeholder||"",s=a.fallbackTag||a.placeholderTag||"span";return _(s,null,f)}}}),$={},v={id:"main"};function x(l,e){const n=d,a=u,t=g;return k(),_("div",null,[o(t,null,{default:b(()=>[o(n),r(l.$slots,"hero"),T("main",v,[r(l.$slots,"default")]),o(a)]),_:3})])}const w=h($,[["render",x]]);export{w as default};