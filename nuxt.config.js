export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kunie.dev Portfolio',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/custom.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  i18n: {
    /* module options */
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    vueI18n: {
      fallbackLocale: 'ko',
      messages: {
        ko: {},
        en: {},
      },
    },
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    cdn: 'https://cdn.kunie.dev',
    apiBaseUrl: 'https://api.kunie.dev',
    googleApiKey: 'AIzaSyBDFvQNfozSWcRjn-FhL0WVxzHEJE0mRY8',
    bloggerApiPostsBaseUrl: 'https://www.googleapis.com/blogger/v3/blogs/2580876278653058387/posts'
  },
}
