import DefaultTheme from 'vitepress/theme'
import CustomLayout from './components/CustomLayout.vue'
import TimelinePage from './components/TimelinePage.vue'
import './styles/vars.css'
import './styles/custom.css'

const navTooltips: Record<string, string> = {
  '本纪': '按时代划分的九篇编年史，记录 AI 发展的核心辩论与转折',
  '世家': '塑造 AI 历史的关键机构与实验室',
  '列传': '关键人物的传记，记录他们的命运与抉择',
  '书': '按主题深入的技术专题与社会议题论述',
  '大事年表': '从 1943 到 2026，AI 关键事件一览',
  '前言': '为什么写这本书，如何阅读',
}

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app, router }) {
    app.component('TimelinePage', TimelinePage)

    if (typeof window !== 'undefined') {
      const addTooltips = () => {
        document.querySelectorAll('.VPNavBarMenuLink, .VPNavScreenMenuLink').forEach((el) => {
          const text = el.textContent?.trim()
          if (text && navTooltips[text]) {
            el.setAttribute('title', navTooltips[text])
          }
        })
      }

      // Add tooltips after each navigation
      router.onAfterRouteChanged = () => {
        setTimeout(addTooltips, 100)
      }

      // Initial load
      setTimeout(addTooltips, 500)
    }
  },
}
