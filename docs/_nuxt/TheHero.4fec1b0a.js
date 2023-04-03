import{q as a,o as t,a as i,k as n,b as e,m as r}from"./entry.1bea425c.js";const d={},u={version:"1.1",baseProfile:"full",width:"100%",height:"500",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},m=n('<defs><polygon id="ray" points="0,5  5,0  5,10" style="fill:#ff0000;" transform="translate(-8,0) rotate(90)"></polygon><g id="rays"><use xlink:href="#ray" x="0"></use><use xlink:href="#ray" x="12"></use><use xlink:href="#ray" x="24"></use><use xlink:href="#ray" x="36"></use><animateMotion path="M0,30A30,30 0 1,1 60,30" begin="0s" dur="10s" repeatCount="indefinite" rotate="auto"></animateMotion></g><g id="sun"><circle class="glowing-circle" x="15" y="0" cx="30" cy="30" r="30" style="fill:#FFC69D;"></circle></g><path id="sunPath" d="M0,250 A10,10 0 1,1 420,250" style="stroke:#660000;fill:none;"></path><image id="cloud" x="-74" y="40" width="74" height="29" xlink:href="https://freepngimg.com/thumb/cloud/9-cloud-png-image.png"></image></defs><rect x="0" y="0" id="#hero" style="fill:#02122e;"><animate id="backgroundAnim" attributeName="fill" values="#02122e; #2f61a6; #8be0f9; #8be0f9; #2f61a6; #02122e;" dur="10s" repeatCount="indefinite"></animate></rect><use xlink:href="#cloud"><animate attributeName="x" attributeType="XML" from="0" to="574" begin="2s; backgroundAnim.repeatEvent+2s" dur="4s"></animate></use><use xlink:href="#cloud" y="50"><animate attributeName="x" attributeType="XML" from="0" to="574" begin="3s; backgroundAnim.repeatEvent+3s" dur="4s"></animate></use><use xlink:href="#sun" x="0" y="0"><animateMotion begin="0s" dur="10s" repeatCount="indefinite"><mpath xlink:href="#sunPath"></mpath></animateMotion><animateTransform attributeName="transform" type="scale" values="0.5; 1.5; 0.5" additive="sum" dur="10s" repeatCount="indefinite"></animateTransform></use>',5),_=[m];function h(s,o){return t(),i("svg",u,_)}const f=a(d,[["render",h]]),p={},x={class:"hero-waves",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28 ",preserveAspectRatio:"none"},v=n('<defs><path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path></defs><g class="wave1"><use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"></use></g><g class="wave2"><use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"></use></g><g class="wave3"><use xlink:href="#wave-path" x="50" y="9" fill="#fff"></use></g>',4),g=[v];function b(s,o){return t(),i("svg",x,g)}const w=a(p,[["render",b]]),y={},k={id:"hero",class:"d-flex flex-column justify-content-end align-items-center"},q={id:"heroCarousel","data-bs-interval":"5000",class:"container carousel carousel-fade","data-bs-ride":"carousel"},M=n('<div class="carousel-item active"><div class="carousel-container"><h2 class="animate__animated animate__fadeInDown">Welcome to <span>Nayee Subah Foundation</span></h2><p class="animate__animated fanimate__adeInUp">On A Mission of creation of awareness about education and its propagation, social reforms, unity of the Country and to make a better tomorrow.</p><a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a></div></div><div class="carousel-item"><div class="carousel-container"><h2 class="animate__animated animate__fadeInDown">Hope for a Better Tomorrow</h2><p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p><a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a></div></div><div class="carousel-item"><div class="carousel-container"><h2 class="animate__animated animate__fadeInDown">Helping each other can make world better</h2><p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p><a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a></div></div>',3),$=e("a",{class:"carousel-control-prev",href:"#heroCarousel",role:"button","data-bs-slide":"prev"},[e("span",{class:"carousel-control-prev-icon bx bx-chevron-left","aria-hidden":"true"})],-1),A=e("a",{class:"carousel-control-next",href:"#heroCarousel",role:"button","data-bs-slide":"next"},[e("span",{class:"carousel-control-next-icon bx bx-chevron-right","aria-hidden":"true"})],-1);function C(s,o){const l=f,c=w;return t(),i("section",k,[e("div",q,[M,$,A,r(l)]),r(c)])}const S=a(y,[["render",C]]);export{S as _};
