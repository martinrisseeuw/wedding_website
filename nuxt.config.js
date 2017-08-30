module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Martim',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
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
  /*
  ** Customize the progress-bar color
  */
  loading: false
}
