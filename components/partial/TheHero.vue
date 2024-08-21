<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-end align-items-center">
    <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">

      <!-- Slide 1 -->
      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Nayee Subah Foundation</span></h2>
          <p class="animate__animated fanimate__adeInUp">Join us in our mission to create awareness about the importance of education, drive social reforms, and promote unity across the country. We are committed to making a difference in the lives of the underprivileged and working towards a better tomorrow for all. Your support and involvement can help us turn this vision into reality.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Hope for a Better Tomorrow</h2>
          <p class="animate__animated animate__fadeInUp">We believe in the power of hope to transform lives and communities. Our mission is to uplift the underprivileged, bridge educational gaps, and foster sustainable development. Together, we can create a brighter future where every individual has the opportunity to thrive and contribute to a more just and equitable world.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Helping each other can make world better</h2>
          <p class="animate__animated animate__fadeInUp">At Nayee Subah Foundation, we know that collective action can bring about lasting change. By supporting one another, we can break down barriers, lift up those in need, and build stronger, more resilient communities. Together, let’s make the world a better place—one act of kindness at a time.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>
      <SvgSunriseAnimation />
    </div>
    <SvgWavesAnimation />
  </section><!-- End Hero -->
</template>
<script lang="ts" setup>
  // const baseUrl = '/assets/img/';
  // const baseUrl = '/_nuxt/assets/img/';
  // const images = ['sunrise.jpg', 'village-sunrise.jpg', 'village-sunrise1.jpg'];
  // const imageUrl = ref('');

  // const changeBackgroundImage = () => {
  //   const randomIndex = Math.floor(Math.random() * images.length);
  //   imageUrl.value = baseUrl + images[randomIndex];
  // };

  // onMounted(() => {
  //   changeBackgroundImage();

  //   // let intervalId = setInterval(changeBackgroundImage, 2000);

  //   onBeforeUnmount(() => {
  //     // clearInterval(intervalId);
  //   });
  // });
</script>
