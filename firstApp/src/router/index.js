import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello1 from '@/components/Hello1' //引入Hello1组件
import user from '@/components/user' //引入user组件


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/hello1',
      name: 'Hello1',
      component: Hello1
    },{
      path: "/user/:id",
      component: user
    }
  ]
})
