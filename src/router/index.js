import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '../layouts/CommonLayout'
import animationBall from '../components/animationBall'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'animationBall',
      component: animationBall
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/',
      component: CommonLayout,
      children: [
        // {
        //   path: '/',
        //   name: 'Home',
        //   component: () => import('../components/home.vue')
        // },
        {
          path: '/publicChain',
          name: 'publicChain',
          component: () => import('../components/publicChain.vue')
        },
        {
          path: '/token',
          name: 'token',
          component: () => import('../components/token.vue')
        },
        {
          path: '/coinMining',
          name: 'coinMining',
          component: () => import('../components/coinMining.vue')
        }
      ]
    }
  ]
})
