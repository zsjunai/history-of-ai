import DefaultTheme from 'vitepress/theme'
import CustomLayout from './components/CustomLayout.vue'
import TimelinePage from './components/TimelinePage.vue'
import './styles/vars.css'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('TimelinePage', TimelinePage)
  },
}
