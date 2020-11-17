export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Cinema Taquaritinga',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Confira os Nossos Filmes em Exibição e Venha Assistir com os Amigos Ainda Hoje. o cinema com os melhores filmes para você e a familia.' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'cinema,filme',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  //google Analytics configuration (https://google-analytics.nuxtjs.org/setup)
  googleAnalytics: {
    id: 'UA-182342593-1',
  },


  // i18n configuration (https://i18n.nuxtjs.org/setup)
  i18n: {
    lazy: true,
    langDir: 'lang/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      cookieKey: 'i18n-locale',
    },
  },
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js',
    },
    {
      code: 'pt',
      iso: 'pt-BR',
      name: 'Português',
      file: 'pt.js',
    },
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

