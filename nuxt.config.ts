// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
      // SCSS file in the project
      '@/assets/scss/main.scss'
  ],

  render: {
    injectScripts: false
  },

  plugins: [
    { src: '@/assets/js/main.js', mode: 'client' }
  ],

  compatibilityDate: '2024-08-20'
})