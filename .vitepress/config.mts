import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    //修改页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 最后修改时间，结合GIT使用
    lastUpdated:{
      text:'最后修改时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },
    //全文检索
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shuoziwen' }
    ]
  }
})
