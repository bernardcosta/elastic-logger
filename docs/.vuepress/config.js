const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('vuepress')

let nav = [{
  text: 'Home',
  link: '/',
  children: [{
    text: 'Introduction',
    link: '/introduction.md'
  },
    {
      text: 'API Reference',
      link: '/api-guide.md'
    }]
},
]

module.exports = {
  // site config
  lang: 'en-US',
  smoothScroll: true, //vuepress feature not yet released
  title: 'elastic logger',
  base: '/elastic-logger/',
  // theme and its config
  theme: defaultTheme({
    // logo: '/images/logo.webp', //https://www.virail.com/v4/images/logo-green.svg',
    // logoDark: '/images/logo-green.png',
    repo: 'https://github.com/bernardcosta/elastic-logger',
    repoLabel: 'Repository',
    search: true,
    navbar: [...nav,
    //   {
    //   text: 'API playground',
    //   link: 'https://mapping.virail.app/docs'
    // }
    ],
    sidebar: nav,

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
  ]
}
