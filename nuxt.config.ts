// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr:true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: '逸辰时光一个专注于技术分享的博客平台',
      meta: [
        {name:'referrer',content:'no-referrer'},
        {name:'baidu-site-verification',content:'codeva-mWZUUBAHAu'}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://file.qcycloud.com/logo.png' }
      ]
    }
  },
  components:true,
  modules: [
      '@element-plus/nuxt',
      "@nuxt/icon",
      '@nuxtjs/device',
      '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  plugins:[

    { src: '~/plugins/globalPlugin', ssr: false }
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
  },
  nitro: {
    devProxy: {
      '/qcy-blog': {
        target: 'http://localhost:9001/qcy-blog',
        changeOrigin: true,
      }
    }
  },


})
