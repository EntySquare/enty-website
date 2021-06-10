// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// import locale from 'element-ui/lib/locale/lang/en'
// import i18n from './i18n/index'

// import VideoPlayer from 'vue-video-player/src'
// import 'vue-video-player/src/custom-theme.css'
// import 'video.js/dist/video-js.css'

import router from './router'

Vue.use(ElementUI)
// Vue.use(VideoPlayer, { locale })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
