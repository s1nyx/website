const { description } = require("../../package");

module.exports = {
  title: "Sheweny",
  description: description,
  head: [
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  //base: "/sheweny-website/",
  themeConfig: {
    repo: "https://github.com/Sheweny/framework/",
    docsRepo: "https://github.com/Sheweny/website/",
    docsBranch: "master",
    docsDir: "docs",
    contributors: false,
    editLinks: true,
    editLinkText: "Edit this page",
    lastUpdated: "Last Updated",
    displayAllHeaders: true,
    sidebarDepth: 2,

    navbar: [
      {
        text: "Documentation",
        link: "/doc/",
      },
      {
        text: "Guide",
        link: "/guide/",
      },

      {
        text: "Discord",
        link: "https://discord.gg/qgd85nEf5a",
      },
      {
        text: "Example",
        link: "https://github.com/Sheweny/sheweny-bot",
      },
      {
        text: "Changelog",
        link: "https://github.com/Sheweny/framework/blob/master/CHANGELOG.md",
      },
    ],
    sidebar: {
      "/doc/": [
        {
          text: "Home",
          path: "/doc/", // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          children: ["/doc/README.md"],
        },
        {
          text: "Client",
          path: "/doc/client",
          collapsable: false,
          children: [
            "/doc/client/ShewenyClient.md",
            "/doc/client/ClientUtil.md",
          ],
        },
        {
          text: "Managers",
          path: "/doc/managers",
          collapsable: false,
          children: [
            "/doc/managers/ButtonsManager.md",
            "/doc/managers/CommandsManager.md",
            "/doc/managers/EventsManager.md",
            "/doc/managers/InhibitorsManager.md",
            "/doc/managers/SelectMenusManager.md",
          ],
        },
        {
          text: "Structures",
          path: "/doc/structures",
          collapsable: false,
          children: [
            "/doc/structures/Button.md",
            "/doc/structures/Command.md",
            "/doc/structures/Event.md",
            "/doc/structures/Inhibitor.md",
            "/doc/structures/SelectMenu.md",
          ],
        },
        {
          text: "Other",
          path: "/doc/other",
          collapsable: false,
          children: [
            "/doc/other/ShewenyError.md",
            "/doc/other/ShewenyInformation.md",
            "/doc/other/ShewenyWarning.md",
          ],
        },
        {
          text: "Typedef",
          path: "/doc/typedef",
          collapsable: false,
          children: [
            "/doc/typedef/CommandOptions.md",
            "/doc/typedef/EventOptions.md",
            "/doc/typedef/InhibitorOptions.md",
            "/doc/typedef/ManagerOptions.md",
            "/doc/typedef/ManagersDefaultOptions.md",
            "/doc/typedef/ShewenyClientCollections.md",
            "/doc/typedef/ShewenyClientManagers.md",
            "/doc/typedef/ShewenyClientOptions.md",
          ],
        },
      ],
      "/guide/": [
        {
          text: "Guide",
          collapsable: false, // optional, defaults to true
          path: "/guide",
          children: ["/guide/README.md"],
        },
        {
          text: "Getting started",
          path: "/guide/getting-started",
          collapsable: false,
          children: [
            "/guide/getting-started/Start.md",
            "/guide/getting-started/ProjectStructure.md",
            "/guide/getting-started/Client.md",
          ],
        },
        {
          text: "CLI",
          path: "/guide/cli",
          collapsable: false,
          children: ["/guide/cli/Installation.md", "/guide/cli/Usage.md"],
        },
        {
          text: "Managers",
          path: "/guide/managers",
          collapsable: false,
          children: [
            "/guide/managers/buttons.md",
            "/guide/managers/commands.md",
            "/guide/managers/events.md",
            "/guide/managers/inhibitors.md",
            "/guide/managers/selectMenus.md",
          ],
        },
        {
          text: "Commands",
          path: "/guide/commands",
          collapsable: false,
          children: [
            "/guide/commands/Basic.md",
            "/guide/commands/Cooldown.md",
            "/guide/commands/Permissions.md",
            "/guide/commands/Restrictions.md",
            "/guide/commands/Autocomplete.md",
          ],
        },
        {
          text: "Events",
          path: "/guide/events",
          collapsable: false,
          children: [
            "/guide/events/Basic.md",
            "/guide/events/Once.md",
            "/guide/events/CustomEmitter.md",
          ],
        },
        {
          text: "Buttons",
          path: "/guide/buttons",
          collapsable: false,
          children: ["/guide/buttons/Basic.md", "/guide/buttons/Before.md"],
        },
        {
          text: "SelectMenus",
          path: "/guide/select-menus",
          collapsable: false,
          children: [
            "/guide/select-menus/Basic.md",
            "/guide/select-menus/Before.md",
          ],
        },
        {
          text: "Inhibitors",
          path: "/guide/inhibitors",
          collapsable: false,
          children: [
            "/guide/inhibitors/Inhibitor.md",
            "/guide/inhibitors/InhibitorType.md",
            "/guide/inhibitors/InhibitorPriority.md",
          ],
        },
        {
          text: "Topics",
          path: "/guide/topics/",
          collapsable: false,
          children: [
            "/guide/topics/BestPratices.md",
            "/guide/topics/V1-V2.md",
            "/guide/topics/V2-V3.md",
          ],
        },
      ],
    },
    themePlugins: {
      backToTop: true,
      mediumZoom: false,
    },
  },
  plugins: ["@vuepress/plugin-search", "@vuepress/pwa"],
};
