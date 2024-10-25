// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', 'vue-clerk/nuxt', '@hebilicious/form-actions-nuxt'],
  clerk: {
    appearance: {},
  }
})