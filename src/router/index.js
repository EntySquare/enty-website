// import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import CommonLayout from '../layouts/CommonLayout'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/',
      component: CommonLayout,
      children: [
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

export default router;
