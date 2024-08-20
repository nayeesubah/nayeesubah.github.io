<template>
  <div>
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
<script lang="ts" setup>
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

