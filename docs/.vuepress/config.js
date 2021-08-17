const { description } = require('../../package')

module.exports = {

  title: 'Sheweny',

  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    base: '/',
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    docsDir: 'doc',
    displayAllHeaders: true,
    sidebarDepth: 1,
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Ducumentation',
        link: '/doc/'
      },
      {
        text: 'Github',
        link: 'https://github.com/Discord-util/website'
      }
    ],
    sidebar: {
      '/doc/': [
        {
          text: 'Home',
          path: '/doc/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          children: ['/doc']
        },
        {
          text: 'Classes',
          path: '/doc/classes',
          collapsable: false,
          children: [
            '/doc/classes/ShewenyClient.md',
            '/doc/classes/Command.md',
            '/doc/classes/Event.md',
            '/doc/classes/CommandsHandler.md',
            '/doc/classes/EventsHandler.md',
            '/doc/classes/SlashHandler.md',
          ]
        },
        {
          text: 'Typedef',
          path: '/doc/typedef',
          collapsable: false,
          children: [
            '/doc/typedef/ClientHandlers.md',
            '/doc/typedef/CommandArg.md',
            '/doc/typedef/CommandOptions.md',
            '/doc/typedef/CommandsHandlerOptions.md',
            '/doc/typedef/CommandTypeResolvable.md',
            '/doc/typedef/EventOptions.md',
            '/doc/typedef/EventsHandlerOptions.md',
            '/doc/typedef/HandlersOptions.md',
            '/doc/typedef/ShewenyClientOptions.md',
            '/doc/typedef/SubCommand.md',
          ]
        },
      ],
      '/guide/': [
        {
          text: 'Guide',
          collapsable: false, // optional, defaults to true
          path: '/guide',
          children: ['/guide']
        },
        {
          text: 'Getting started',
          path: '/guide/getting-started',
          collapsable: false,
          children: [
            '/guide/getting-started/Start.md',
            '/guide/getting-started/ProjectStructure.md',
            '/guide/getting-started/Client.md',
          ]
        },
        {
          text: 'Commands',
          path: '/guide/commands',
          collapsable: false,
          children: [
            '/guide/commands/Basic.md',
            '/guide/commands/Cooldown.md',
            '/guide/commands/Permissions.md',
            '/guide/commands/Restrictions.md',
          ]
        },
        {
          text: 'Events',
          path: '/guide/commands',
          collapsable: false,
          children: [
            '/guide/events/Basic.md',
          ]
        },
      ],

    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],


}
