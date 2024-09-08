// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
      '@element-plus/nuxt',
      "@nuxt/icon",
      '@nuxtjs/device',
      '@pinia/nuxt',

  ],
  plugins:[

  ],
  elementPlus: { /** Options */ },
  device: {
    refreshOnResize: true
  },
  css:[
    '~/assets/scss/default.scss',
    '~/assets/scss/global.scss'
  ],
  icon: {
    size:'18px',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      },
    ]
  }
})