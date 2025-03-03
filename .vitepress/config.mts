import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dataflow Learn",
  description: "An Educational Machine Learning Handbook for beginners.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Curriculum', link: '/curriculum' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Curriculum Overview', link: '/curriculum' },
          { text: 'Learning Path', link: '/learning-path' }
        ]
      },
      {
        text: 'Math Foundations',
        items: [
          { text: 'Linear Algebra', link: '/phase1_math_foundations/linear_algebra' },
          { text: 'Probability & Statistics', link: '/phase1_math_foundations/probability_statistics' },
          { text: 'Calculus', link: '/phase1_math_foundations/calculus' }
        ]
      },
      {
        text: 'Real-World Applications',
        items: [
          { text: 'ML Introduction', link: '/phase2_real_world_applications/ml_introduction' },
          { text: 'Data Understanding', link: '/phase2_real_world_applications/data_understanding' },
          { text: 'Data Visualization', link: '/phase2_real_world_applications/data_visualization' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
