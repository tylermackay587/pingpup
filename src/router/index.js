import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Landing from '@/components/Landing'
import Pricing from '@/components/Pricing'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/pricing',
    //   name: 'pricing',
    //   component: Pricing
    // },
    {
      path: '*',
      name: 'landing',
      component: Landing
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
  ]
})

// Might use this at a later time
