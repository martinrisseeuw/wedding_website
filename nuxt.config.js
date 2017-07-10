module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
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
    '~assets/css/reset.scss',
    '~assets/css/forms.scss',
    '~assets/css/animation.scss',
    '~assets/css/typography.scss',
    '~assets/css/main.sass'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: false
}
