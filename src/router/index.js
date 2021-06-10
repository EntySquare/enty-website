import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import publicChain from '@/components/publicChain'
import bottom from '@/components/bottom'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/publicChain',
      name: 'publicChain',
      component: publicChain
    },
    {
      path: '/bottom',
      name: 'bottom',
      component: bottom
    }
    // {
    //   path: '/metaball',
    //   name: 'metaball',
    //   component: metaball
    // }
  ]
})
