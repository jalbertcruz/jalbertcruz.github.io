import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  description: 'jalbert blog',
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    footer: {
      message: 'Personal Blog',
      copyright: 'Copyright © 2025 jalbertcruz',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jalbertcruz/jalbertcruz.github.io' },
    ],
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },
    blog: {
      title: 'My Blog',
      description: 'Some ideas',
    },

  },
  title: 'Personal site',
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    { text: 'CV', link: '/cv/', activeMatch: '/cv/' },
    { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
    {
      text: 'External links',
      items: [
        {
          text: 'LinkedIn',
          link: 'https://www.linkedin.com/in/jalbertcruz',
        },
        {
          text: 'GitHub',
          link: 'https://github.com/jalbertcruz',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/' },
      ],
    },
  ]
}
