<template>
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About Us</h2>
            <p>WHO WE ARE </p>
          </div>
  
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
              <div class="about-img">
                <img src="assets/img/library-front.jpg" alt="">
                <a href="https://www.youtube.com/watch?v=jCCmf0swyDk" class="glightbox play-btn"></a>
              </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <!-- <h3>DRIVEN BY COMMITMENT POWERED BY HUMANS</h3> -->
              <p class="fst-italic">
                Nayee Subah Foundation has been founded with the sole aim of creation of awareness about education and its propagation, social reforms, unity of the Muslim. The Muslim community, undoubtedly, is going through a very sensitive, tough and trying day. The ever-changing situations and misfortunes of the time have pushed them into economic and academic backwardness that is beyond imagination.
              </p>
              <h3>We are on the Mission to:</h3>
            <ul>
              <li><i class="bi bi-check-circle"></i> To carry forward the lamp of knowledge in the society</li>
              <li><i class="bi bi-check-circle"></i> Impart Literacy and Education</li>
              <li><i class="bi bi-check-circle"></i> To promote literacy among the unfortunates</li>
              <li><i class="bi bi-check-circle"></i> To help and provide every possible means to the underprivileged students for the betterment</li>
              <li><i class="bi bi-check-circle"></i> To conduct various program and career guiding seminars</li>
              <li><i class="bi bi-check-circle"></i> Combat Child labour and substance abuse</li>
            </ul>
            <a href="#" class="btn-learn-more">Learn More</a>
            </div>
          </div>
  
        </div>
    </section><!-- End About Section -->
</template>

<style scope>
/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about {
  /* background: url("@/assets/img/village-sunrise.jpg") center center; */
  background-size: cover;
  position: relative;
  padding: 80px 0;
}
.about:before {
  content: "";
  /* background: rgba(14, 32, 54, 0.7); */
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.about .about-img {
  position: relative;
  transition: 0.5s;
}
.about .about-img img {
  max-width: 100%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  position: relative;
}
.about .about-img::before {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 60px;
  height: 60px;
  z-index: 99999;
  content: "";
  border-left: 5px solid #ef6603;
  border-top: 5px solid #ef6603;
  transition: 0.5s;
}
.about .about-img::after {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  z-index: 2;
  content: "";
  border-right: 5px solid #ef6603;
  border-bottom: 5px solid #ef6603;
  transition: 0.5s;
}
.about .about-img:hover {
  transform: scale(1.03);
}
.about .about-img:hover::before {
  left: 10px;
  top: 10px;
}
.about .about-img:hover::after {
  right: 10px;
  bottom: 10px;
}
.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}
.about .content ul {
  list-style: none;
  padding: 0;
}
.about .content ul li {
  padding-bottom: 10px;
}
.about .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #ef6603;
}
.about .content p:last-child {
  margin-bottom: 0;
}
#hero .play-btn, .about .play-btn {
  width: 94px;
  height: 94px;
  background: radial-gradient(#ef6603 50%, rgba(292, 102, 3, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: relative;
  overflow: hidden;
}
#hero .play-btn::after, .about .play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
#hero .play-btn::before, .about .play-btn::before  {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 2s;
  animation: pulsate-btn 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(205, 164, 94, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}
#hero .play-btn:hover::after, .about .play-btn:hover::after {
  border-left: 15px solid #ef6603;
  transform: scale(20);
}
#hero .play-btn:hover::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}

.about .play-btn {
  position: absolute;
  left: calc(50% - 47px);
  top: calc(50% - 47px);
}

@media (min-width: 1024px) {
  .about {
    background-attachment: fixed;
  }
}
@media (max-width: 992px) {
  #hero .play-btn {
    margin-top: 30px;
  }
}
</style>