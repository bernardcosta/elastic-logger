const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('vuepress')

module.exports = {
  // site config
  lang: 'en-US',
  smoothScroll: true, //vuepress feature not yet released
  title: 'elastic logger',
  base: '/elastic-logger/',
  // theme and its config
  theme: defaultTheme({
    repo: 'https://github.com/bernardcosta/elastic-logger',
    repoLabel: 'Repository',
    search: true,
    logo:'/images/logger-trans3.png',
    navbar: [{
      text: 'API Reference',
      link: '/api-guide.md'
    }
    ],
    // sidebar: nav,

  }),
  plugins: [
    searchPlugin({
      // options
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
      hotKeys:['meta', 'k'],
    })
  ],
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Montserrat:900|Work+Sans:300'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,400'
    }],
  ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/elastic-logger/assets/favicons/favicon-32x32.png"}],
  ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/elastic-logger/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/elastic-logger/assets/favicons/apple-touch-icon-180x180.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/elastic-logger/assets/favicons/apple-touch-icon-152x152.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "144x144", href: "/elastic-logger/assets/favicons/apple-touch-icon-144x144.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "120x120", href: "/elastic-logger/assets/favicons/apple-touch-icon-120x120.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "57x57", href: "/elastic-logger/assets/favicons/apple-touch-icon-57x57.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "60x60", href: "/elastic-logger/assets/favicons/apple-touch-icon-60x60.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/elastic-logger/assets/favicons/apple-touch-icon-72x72.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "114x114", href: "/elastic-logger/assets/favicons/apple-touch-icon-114x114.png"}],
    ['link', { rel: "manifest", href: "/elastic-logger/assets/favicons/manifest.json"}],
  ['link', { rel: "shortcut icon", href: "/elastic-logger/assets/favicons/favicon.ico"}],
  ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
  ['meta', { name: "msapplication-config", content: "/elastic-logger/assets/favicons/browserconfig.xml"}],
  ['meta', { name: "theme-color", content: "#ffffff"}],
  ]
}
