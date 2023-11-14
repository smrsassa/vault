/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SMRsassa',
  tagline: 'Meu blog pessoal',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  organizationName: 'smrsassa',
  projectName: 'vault',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SMR Vault',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tec',
            position: 'left',
            label: 'Tecnologia',
          },
          {
            type: 'docSidebar',
            sidebarId: 'religiao',
            position: 'left',
            label: 'Religião',
          },
          {
            type: 'docSidebar',
            sidebarId: 'misc',
            position: 'left',
            label: 'Miscelâneas',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/smrsassa',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
    }),
};

module.exports = config;
