<template>
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
      <div class="container">
        <div class="id-card-tag"></div>
        <div class="id-card-tag-strip"></div>
        <div class="id-card-hook"></div>
        <div class="id-card-holder">
          <div class="id-card">
            <div class="header">
              <img src="~/assets/img/nsf-logo.png">
            </div>
            <div class="photo">
              <img src="~/assets/img/team/team-2.png">
            </div>
            <h2>Md Rafique Anwar</h2>
            <div class="qr-code">
              <img src="~/assets/img/qr-sample.png">
            </div>
            <h3>www.nayeesubah.github.io</h3>
            <hr>
            <p><strong>"KAKNI"</strong> Vill- Kakni, Gumgi, Tisri </p>
            <p>Near Jama Masjid, Giridih - 815317 Jharkhand, India <strong>815317</strong></p>
            <p>Ph: 9708156668 | E-ail: nsfgiridih@gmail.com</p>

          </div>
        </div>
      </div>
    </section><!-- End Contact Section -->
</template>
<script lang="ts" setup>
const title = ref('ID Card | Nayee Subah Foundation')
const isDarkMode = ref<boolean>(false);
const imgUrl = 'https://nayeesubah.github.io/_nuxt/nsf-white-background-logo.ff31b0f6.jpg'
const description = "Nayee Subah Foundation has been founded with the sole aim of creation of awareness about education and its propagation, social reforms"

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
    lang: 'en',
    'data-bs-theme': computed(() => {
      if (isDarkMode.value) return 'dark';
      return 'light';
    }),
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
<style scoped>
	body {
		background-color: #d7d6d3;
		font-family:'verdana';
	}
	.id-card-holder {
		width: 225px;
		padding: 4px;
		margin: 0 auto;
		background-color: #1f1f1f;
		border-radius: 5px;
		position: relative;
	}
	.id-card-holder:after {
		content: '';
		width: 7px;
		display: block;
		background-color: #0a0a0a;
		height: 100px;
		position: absolute;
		top: 105px;
		border-radius: 0 5px 5px 0;
	}
	.id-card-holder:before {
		content: '';
		width: 7px;
		display: block;
		background-color: #0a0a0a;
		height: 100px;
		position: absolute;
		top: 105px;
		left: 222px;
		border-radius: 5px 0 0 5px;
	}
	.id-card {
		
		background-color: #fff;
		padding: 10px;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 0 1.5px 0px #b9b9b9;
	}
	.id-card img {
		margin: 0 auto;
	}
	.header img {
		width: 100px;
		margin-top: 15px;
	}
	.photo img {
		width: 80px;
		margin-top: 15px;
	}
	h2 {
		font-size: 15px;
		margin: 5px 0;
	}
	h3 {
		font-size: 12px;
		margin: 2.5px 0;
		font-weight: 300;
	}
	.qr-code img {
		width: 50px;
	}
	p {
		font-size: 5px;
		margin: 2px;
	}
	.id-card-hook {
		background-color: #000;
		width: 70px;
		margin: 0 auto;
		height: 15px;
		border-radius: 5px 5px 0 0;
	}
	.id-card-hook:after {
		content: '';
		background-color: #d7d6d3;
		width: 47px;
		height: 6px;
		display: block;
		margin: 0px auto;
		position: relative;
		top: 6px;
		border-radius: 4px;
	}
	.id-card-tag-strip {
		width: 45px;
		height: 40px;
		background-color: #0950ef;
		margin: 0 auto;
		border-radius: 5px;
		position: relative;
		top: 9px;
		z-index: 1;
		border: 1px solid #0041ad;
	}
	.id-card-tag-strip:after {
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background-color: #c1c1c1;
		position: relative;
		top: 10px;
	}
	.id-card-tag {
		width: 0;
		height: 0;
		border-left: 100px solid transparent;
		border-right: 100px solid transparent;
		border-top: 100px solid #0958db;
		margin: -10px auto -30px auto;
	}
	.id-card-tag:after {
		content: '';
		display: block;
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-top: 100px solid #d7d6d3;
		margin: -10px auto -30px auto;
		position: relative;
		top: -130px;
		left: -50px;
	}
</style>