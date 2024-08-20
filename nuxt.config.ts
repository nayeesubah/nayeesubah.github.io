
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '@/assets/scss/main.scss'
    ],
    plugins: [
      { src: '@/assets/js/main.js', mode: 'client' }
    ]
})
