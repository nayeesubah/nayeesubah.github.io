import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '@/assets/scss/main.scss'
    ],
    app: {
        head: {
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'og:image', property: 'og:image', content: '@/assets/img/nsf-white-background-logo.jpg'},
          ],
        }
    }
})
