<template>
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Application Form</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Application Form</li>
          </ol>
        </div>

      </div>
    </section>

    <section class="inner-page">
      <div class="container">

          <PartialApplicationForm/>

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