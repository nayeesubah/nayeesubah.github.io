<template>
    <Head>
      <Title>{{title}}</Title>
      <Meta name="description" content="Join our global team today. We're looking for individuals with a passion and real drive for dawah to get involved." />
    </Head>
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
useHead({
  meta: [
      { name: 'og:title', content: title.value },
      { name: 'og:image', content: 'https://nayeesubah.github.io/_nuxt/nsf-white-background-logo.ff31b0f6.jpg' }
  ]
})
useServerSeoMeta({
  title: 'Application Form | Nayee Subah Foundation',
  ogTitle: 'Application Form | Nayee Subah Foundation',
  description: "Join our global team of volunteers today. We're looking for individuals with a passion and real drive for dawah to get involved.",
  ogDescription: "Join our global team of volunteers today. We're looking for individuals with a passion and real drive for dawah to get involved.",
  ogImage: 'https://nayeesubah.github.io/_nuxt/nsf-white-background-logo.ff31b0f6.jpg',
  twitterCard: 'summary_large_image',
})
</script>