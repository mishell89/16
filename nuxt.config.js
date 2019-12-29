module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'm16',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'M16 SPA' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-set/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-set/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-set/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-set/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon-set/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon-set/safari-pinned-tab.svg',  color: '#5bbad5' },
    ]
  },
  router: {
    base: '/',
    prefetchLinks: false,
  },
  css: [
    '~assets/styles/app.scss',
  ],
  pageTransition: {
    name: 'page-switch',
    mode: 'out-in'
  },
  plugins: [
    {src: '~/plugins/modernizr.js', ssr: false},
    {src: '~/plugins/stickykit.js', ssr: false},
    {src: '~/plugins/scrollspy.js', ssr: false},
    {src: '~/plugins/scrollto.js', ssr: false}
  ],
  loading: false,
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    }
  }
}

