import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cmpA from '@/components/componentA'
import cmpB from '@/components/componentB'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
        path:'/cmpA',
        component:cmpA
    },
    {
        path:'/cmpB',
        component:cmpB
    },
    {
        path:'*',
        redirect:'/'
    }
  ]
})
