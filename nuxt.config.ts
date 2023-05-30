// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
      },
})
