module.exports = {
  title: 'MC-BUILD',
  tagline: 'A datapack build tool',
  url: 'https://mcbuild.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mc-build', // Usually your GitHub org/user name.
  projectName: 'mc-build', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MC-BUILD',
      logo: {
        alt: 'MC-BUILD Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/mc-build',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mc-build',
            },
            {
              label: 'Rules & Code of Conduct',
              href: 'https://mcbuild.dev/code-of-conduct/',
            },
          ],
        },
      ],
      copyright: `mc-build is not affiliated with minecraft or mojang in any way. <br/> <span style="color:gray">Copyright © ${new Date().getFullYear()} Ian Senne</span>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mc-build/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
