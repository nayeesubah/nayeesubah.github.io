import{_ as d,a as i,b as u}from"./TheFooter.7a6c9751.js";import{q as m,k as p,l as h,e as s,a as k,o as b,f as t,w as T,r as _,j as g}from"./entry.2000452f.js";const $=m({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(l,{slots:a}){const n=p(!1);return h(()=>{n.value=!0}),e=>{var r;if(n.value)return(r=a.default)==null?void 0:r.call(a);const o=a.fallback||a.placeholder;if(o)return o();const c=e.fallback||e.placeholder||"",f=e.fallbackTag||e.placeholderTag||"span";return s(f,null,c)}}}),v={},x={id:"main"};function B(l,a){const n=d,e=i,o=u,c=$;return b(),s("div",null,[t(c,{placeholder:"loading..."},{default:T(()=>[t(n),t(e),_(l.$slots,"hero"),g("main",x,[_(l.$slots,"default")]),t(o)]),_:3})])}const w=k(v,[["render",B]]);export{w as default};