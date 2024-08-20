<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" :style="{ backgroundImage: `url(${imageUrl})` }" class="d-flex flex-column justify-content-end align-items-center">
    <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">

      <!-- Slide 1 -->
      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Nayee Subah Foundation</span></h2>
          <p class="animate__animated fanimate__adeInUp">On A Mission of creation of awareness about education and its propagation, social reforms, unity of the Country and to make a better tomorrow.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Hope for a Better Tomorrow</h2>
          <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Helping each other can make world better</h2>
          <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
      </a>
      <SvgSunriseAnimation />
    </div>
    <SvgWavesAnimation />
  </section><!-- End Hero -->
</template>
<script lang="ts" setup>
  // const baseUrl = '/assets/img/';
  const baseUrl = '/_nuxt/assets/img/';
  const images = ['sunrise.jpg', 'village-sunrise.jpg', 'village-sunrise1.jpg'];
  const imageUrl = ref('');

  const changeBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageUrl.value = baseUrl + images[randomIndex];
  };

  onMounted(() => {
    changeBackgroundImage();

    // let intervalId = setInterval(changeBackgroundImage, 2000);

    onBeforeUnmount(() => {
      // clearInterval(intervalId);
    });
  });
</script>
