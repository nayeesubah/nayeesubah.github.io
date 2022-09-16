<template>
  <div>
  <Head>
      <Title>{{title}}</Title>
      <Meta name="description" content="Nayee Subah Foundation has been founded with the sole aim of creation of awareness about education and its propagation, social reforms" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    <NuxtLayout name="default">
    <template #hero> <PartialTheHero/>  </template>
      <AboutView />
      <FeaturesView />
      <CtaView />
      <ServicesView />
      <TeamView />
      <ContactView />
    </NuxtLayout>
  </div>
</template>
<script setup>
import AboutView from '@/views/sections/About1View.vue';
import FeaturesView from '@/views/sections/FeaturesView.vue';
import CtaView from '@/views/sections/CtaView.vue';
import ServicesView from '@/views/sections/ServicesView.vue';
import TeamView from '@/views/sections/TeamView.vue';
import ContactView from '@/views/sections/ContactView.vue';

// import * as ui from '@/assets/js/main.js';
definePageMeta({
  layout: false,
});

const title = ref('Nayee Subah Foundation | Hope for a Better Education')
const route = useRoute()

useHead({
  meta: [
    { name: 'og:title', content: title.value },
    { name: 'og:image', content: 'https://nayeesubah.github.io/_nuxt/nsf-white-background-logo.ff31b0f6.jpg' }
  ]
})
</script>

