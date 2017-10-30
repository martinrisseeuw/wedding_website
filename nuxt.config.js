module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Diana & Martin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  build: {
    vendor: ['vue-i18n']
  },
  css: [
    '~assets/css/reset.sass',
    '~assets/css/_variables.scss',
    '~assets/css/flexbox.sass',
    '~assets/css/lego.scss',
    '~assets/css/animation.sass',
    '~assets/css/buttons.sass',
    '~assets/css/typography.sass',
    '~assets/css/main.sass'
  ],
  loading: false,
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js',]
}
