import{r as v,B as g,C as k,s as L,o as _,a as x,b as e,z as m,u as f,F as y,h as o}from"./entry.7323285d.js";function C(a,t){let i=v(!1);function s(l){window.scrollY>100?i.value=!0:i.value=!1}return g(()=>a.addEventListener(t,s)),k(()=>a.removeEventListener(t,s)),i}function w(){const a=(l,r=!1)=>(l=l.trim(),r?[...document.querySelectorAll(l)]:document.querySelector(l));return{select:a,on:(l,r,n,c=!1)=>{let u=a(r,c);u&&(c?u.forEach(b=>b.addEventListener(l,n)):u.addEventListener(l,n))},onscroll:(l,r)=>{l.addEventListener("scroll",r)},scrollto:l=>{let n=a("#header").offsetHeight,c=a(l).offsetTop;window.scrollTo({top:c-n,behavior:"smooth"})}}}const S=""+new URL("nsf-logo.52f01cea.png",import.meta.url).href,E={class:"container d-flex align-items-center justify-content-between"},H=e("div",{class:"logo"},[e("h1",null,[e("a",{href:"/"},[e("img",{src:S,alt:"Nayee Subah Foundation"})])])],-1),T={id:"navbar",class:"navbar"},G=["href"],A=["href"],D=["href"],F=["href"],U=["href"],$=["href"],B=e("i",{class:"bi bi-list mobile-nav-toggle"},null,-1),W={__name:"TheHeader",setup(a){const t=L(),i=v(!1);function s(h){let d="/";return t.name=="index"&&(d=""),d+h}t.name=="index"&&(i.value=!0),console.log("current route name",t.name);let l=v(!1);function r(h){window.scrollY>100?l.value=!0:l.value=!1}const{select:n,on:c,onscroll:u,scrollto:b}=w();return g(()=>{c("click",".mobile-nav-toggle",function(h){n("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),c("click",".navbar .dropdown > a",function(h){n("#navbar").classList.contains("navbar-mobile")&&(h.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),c("click",".scrollto",function(h){if(n(this.hash)){h.preventDefault();let d=n("#navbar");if(d.classList.contains("navbar-mobile")){d.classList.remove("navbar-mobile");let p=n(".mobile-nav-toggle");p.classList.toggle("bi-list"),p.classList.toggle("bi-x")}b(this.hash)}},!0),console.log("hi mounted header"),window.addEventListener("scroll",r)}),(h,d)=>(_(),x("header",{id:"header",class:m(["fixed-top d-flex align-items-center",{"header-scrolled":f(l)," header-transparent":f(t).name=="index"}])},[e("div",E,[H,e("nav",T,[e("ul",null,[e("li",null,[e("a",{class:"nav-link scrollto",href:s("#hero")},"Home",8,G)]),e("li",null,[e("a",{class:"nav-link scrollto",href:s("#about")},"About",8,A)]),e("li",null,[e("a",{class:"nav-link scrollto",href:s("#services")},"What we do",8,D)]),e("li",null,[e("a",{class:"nav-link scrollto",href:s("#portfolio")},"Gallery",8,F)]),e("li",null,[e("a",{class:"nav-link scrollto",href:s("#team")},"Team",8,U)]),e("li",null,[e("a",{class:"nav-link scrollto",href:s("#contact")},"Contact",8,$)]),e("li",null,[e("a",{class:m(["btn-learn-more",{active:f(t).name=="application-form"}]),href:"/application-form"},"Join Us",2)])]),B])])],2))}},N=e("footer",{id:"footer"},[e("div",{class:"footer-top"},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-lg-3 col-md-6"},[e("div",{class:"footer-info"},[e("p",null,[o(" Vill- Kakni, Gumgi, Tisri"),e("br"),o(" Giridih - 815317 Jharkhand "),e("br"),e("br"),e("strong",null,"Phone:"),o(" +91 9708156668 "),e("br"),e("strong",null,"Email:"),o(" nsfgiridih@gmail.com"),e("br")]),e("div",{class:"social-links mt-3"},[e("a",{href:"#",class:"twitter"},[e("i",{class:"bi bi-twitter"})]),e("a",{href:"#",class:"facebook"},[e("i",{class:"bi bi-facebook"})]),e("a",{href:"#",class:"instagram"},[e("i",{class:"bi bi-instagram"})]),e("a",{href:"#",class:"google-plus"},[e("i",{class:"bi bi-skype"})]),e("a",{href:"#",class:"linkedin"},[e("i",{class:"bi bi-linkedin"})])])])]),e("div",{class:"col-lg-2 col-md-6 footer-links"},[e("h4",null,"Useful Links"),e("ul",null,[e("li",null,[e("i",{class:"bx bx-chevron-right"}),o(),e("a",{href:"#"},"Home")]),e("li",null,[e("i",{class:"bx bx-chevron-right"}),o(),e("a",{href:"#"},"About us")]),e("li",null,[e("i",{class:"bx bx-chevron-right"}),o(),e("a",{href:"#"},"What we do")]),e("li",null,[e("i",{class:"bx bx-chevron-right"}),o(),e("a",{href:"#"},"Gallery")])])]),e("div",{class:"col-lg-3 col-md-6 footer-links"},[e("h4",null,"Our Services"),e("ul",null,[e("li",null,[e("i",{class:"bx bx-chevron-right"}),o(),e("a",{href:"#"},"Library")]),e("li",null,[e("i",{class:"bx bx-chevron-right"}),o(),e("a",{href:"#"},"Coaching Center")]),e("li",null,[e("i",{class:"bx bx-chevron-right"}),o(),e("a",{href:"#"},"Health Care Center")]),e("li",null,[e("i",{class:"bx bx-chevron-right"}),o(),e("a",{href:"#"},"Career Guidance")])])]),e("div",{class:"col-lg-4 col-md-6 footer-newsletter"},[e("h4",null,"Donation"),e("p",null,"Your Support Will Help A Child Come Out Of The Vicious Cycle Of Generational Poverty Through Education, Health Care And Good Upbringing"),e("form",{action:"",method:"post"},[e("input",{type:"email",name:"email"}),e("input",{type:"submit",value:"Subscribe"})])])])])]),e("div",{class:"container"},[e("div",{class:"copyright"},[o(" © Copyright "),e("strong",null,[e("span",null,"Nayee Subah Foundation")]),o(". All Rights Reserved ")]),e("div",{class:"credits"},[o(" Designed by "),e("a",{href:"https://Irfatech.com/"},"Irfan")])])],-1),O=e("div",{id:"preloader"},null,-1),R=e("i",{class:"bi bi-arrow-up-short"},null,-1),V=[R],Y={__name:"TheFooter",setup(a){let t=C(window,"scroll");const{select:i,scrollto:s}=w();return g(()=>{i("#preloader").remove(),window.location.hash&&i(window.location.hash)&&s(window.location.hash)}),(l,r)=>(_(),x(y,null,[N,O,e("a",{href:"#",class:m(["back-to-top d-flex align-items-center justify-content-center",{active:f(t)}])},V,2)],64))}};export{W as _,Y as a,C as u};