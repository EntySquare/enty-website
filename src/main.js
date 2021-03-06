// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.use(ElementUI) // 使用elementUI
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line eqeqeq
  if (from.path == '/publicChain' || from.path == '/token' || from.path == '/coinMining') {
    from.meta.keepAlive = false
    next()
  } else {
    next()
  }
})
