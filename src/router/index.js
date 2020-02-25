import Vue from 'vue'
import Router from 'vue-router'
import HomeA from '@/components/home/HomeA'
import HomeB from '@/components/home/HomeB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeA',
      component: HomeA
    },
    {
      path: '/home/HomeA',
      name: 'HomeA',
      component: HomeA
    },
    {
      path: '/home/HomeB',
      name: 'HomeB',
      component: HomeB
    }
  ]
})