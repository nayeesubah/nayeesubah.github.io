<template>
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>About Us</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>About Us</li>
          </ol>
        </div>

      </div>
    </section>

    <section class="inner-page">
      <div class="container">
          <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About Us</h2>
            <p>WHO WE ARE </p>
          </div>
  
          <div class="row">
            <div class="about-video col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
              <div class="about-img">
                <img src="~/assets/img/library-front.jpg" alt="">
                <a href="https://www.youtube.com/watch?v=jCCmf0swyDk" class="about-glightbox play-btn" @click="onPlay"></a>
              </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <!-- <h3>DRIVEN BY COMMITMENT POWERED BY HUMANS</h3> -->
              <p class="fst-italic">
                Nayee Subah Foundation has been founded with the sole aim of creation of awareness about education and its propagation, social reforms, unity of the Muslim. The Muslim community, undoubtedly, is going through a very sensitive, tough and trying day. The ever-changing situations and misfortunes of the time have pushed them into economic and academic backwardness that is beyond imagination.
              </p>
              <h3>We are on the Mission to:</h3>
            <ul>
              <li><i class="bi bi-check-circle"></i> <strong>Educational Empowerment:</strong> Drive awareness about the importance of education and actively work towards its propagation in underprivileged communities.</li>
              <li><i class="bi bi-check-circle"></i> Impart Literacy and Education</li>
              <li><i class="bi bi-check-circle"></i> To promote literacy among the unfortunates</li>
              <li><i class="bi bi-check-circle"></i> To help and provide every possible means to the underprivileged students for the betterment</li>
              <li><i class="bi bi-check-circle"></i> To conduct various program and career guiding seminars</li>
              <li><i class="bi bi-check-circle"></i> Combat Child labour and substance abuse</li>
            </ul>
            <!-- <a href="/about-us" class="btn-learn-more">Learn More</a> -->
            </div>
          </div>
  
        </div>
    </section><!-- End About Section -->
      <p>
        Welcome to Nayee Subah Foundation, a beacon of hope committed to uplifting the underprivileged communities in rural areas. Our foundation is dedicated to providing quality education, healthcare, and addressing social issues in villages where resources are scarce.
      </p>
      <p>
        At Nayee Subah Foundation, we believe in the transformative power of education. Our mission is to bring a positive change by imparting knowledge to the needy, empowering them to build a brighter future. We understand the crucial link between education and overall well-being, and we strive to bridge the gap for those who lack access to educational resources.
      </p>
      <p>
        In addition to education, we prioritize the health of villagers, recognizing it as a fundamental right. Through various health initiatives, we aim to enhance the overall well-being of the communities we serve. Our commitment extends beyond individual well-being to addressing broader social issues, fostering a sense of community and unity.
      </p>
        Moreover, Nayee Subah Foundation is actively involved in creating employment opportunities for locals, contributing to sustainable economic development. By engaging with the community, we aim to empower individuals and uplift the entire village.
      <p>
        Join us on this journey of positive change. Together, let's build a foundation for a new dawn, where education, health, and social welfare pave the way for a brighter and more prosperous future for all.
      </p>
      </div>
    </section>
</template>
<script setup>

const title = ref('Application Form | Nayee Subah Foundation')
const imgUrl = 'https://nayeesubah.github.io/_nuxt/nsf-white-background-logo.ff31b0f6.jpg'
const description = "Join our global team of volunteers today. We're looking for individuals with a passion and real drive for dawah to get involved."

useSeoMeta({
  title: title.value,
  description: description,
  ogTitle: title.value,
  ogImage: imgUrl,
  ogDescription: description,
  ogUrl: imgUrl,
  twitterTitle: title.value,
  twitterDescription: description,
  twitterImage: imgUrl,
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>