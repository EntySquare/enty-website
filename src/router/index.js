import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import CommonLayout from '../layouts/CommonLayout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/',
      component: CommonLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../components/home.vue')
        },
        {
          path: '/publicChain',
          name: 'publicChain',
          component: () => import('../components/publicChain.vue')
        },
        {
          path: '/coinMining',
          name: 'coinMining',
          component: () => import('../components/coinMining.vue')
        }
      ]
    }
    // {
    //   path: '/publicChain',
    //   name: 'publicChain',
    //   component: publicChain
    // },
    // {
    //   path: '/bottom',
    //   name: 'bottom',
    //   component: bottom
    // }
    // {
    //   path: '/coinMining',
    //   name: 'coinMining',
    //   component: coinMining
    // }
  ]
})
