import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Create Intility App",
  tagline: "Easy to use templates for Intility developers",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true,
  },

  // Set the production url of your site here
  url: "https://create.intility.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "intility", // Usually your GitHub org/user name.
  projectName: "templates", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve("@intility/docusaurus-plugin-bifrost-theme"),
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react",
        path: "react",
        routeBasePath: "react",
        editUrl: "https://github.com/Intility/templates/tree/main/docusaurus",
        sidebarCollapsible: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dotnet",
        path: "dotnet",
        routeBasePath: "dotnet",
        editUrl: "https://github.com/Intility/templates/tree/main/docusaurus",
        sidebarCollapsible: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Create Intility App",
      logo: {
        alt: "My Site Logo",
        src: "img/logo192.png",
      },
      items: [
        {
          to: "/react",
          label: "React",
          position: "left",
        },
        {
          to: "/dotnet",
          label: ".NET API",
          position: "left",
        },
        {
          href: "https://github.com/Intility/templates",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Bifrost",
              href: "https://bifrost.intility.com/",
            },
            {
              label: "React",
              href: "https://react.dev/",
            },
            {
              label: "Vite",
              href: "https://vite.dev/",
            },
          ],
        },
        {
          title: "Channels",
          items: [
            {
              label: "#programming",
              href: "https://intility.slack.com/archives/CRTT6METE",
            },
            {
              label: "Backstage",
              href: "https://backstage.apps.aa.intility.com/",
            },
          ],
        },
        {
          title: "Intility Services",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/intility",
            },
            {
              label: "Sentry",
              href: "https://sentry.intility.no/",
            },
            {
              label: "OpenShift",
              href: "https://console-openshift-console.apps.openshift.intility.com/",
            },
            {
              label: "Azure Portal",
              href: "https://portal.azure.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intility AS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["csharp"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
