/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'O Pelicano',
  tagline: '',
  favicon: 'img/pelicano.png',
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
        title: 'O Pelicano',
        logo: {
          alt: 'My Site Logo',
          src: 'img/pelicano.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'suma',
            position: 'left',
            label: 'Suma Teológica',
          },
          {
            href: '/pesquisar',
            position: 'left',
            label: 'Pesquisar',
          },
          {
            type: 'docSidebar',
            sidebarId: 'misc',
            position: 'left',
            label: 'Miscelâneas',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
