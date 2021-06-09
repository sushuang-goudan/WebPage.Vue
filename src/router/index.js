import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/components/login'
import SuccessPage from '@/components/Success'
import RegisterPage from '@/components/register'
import ChangePswPage from '@/components/ChangePassword'

Vue.use(Router)

export default new Router({
  // 修改为History路由模式
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'Login',
      component:LoginPage
    },
    {
      path:'/SuccessPage',
      name:'Success',
      component:SuccessPage,
      //在需要拦截页面的路由中加一条元数据，设置一个requireAuth字段
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/RegisterPage',
      name: 'Register',
      component:RegisterPage
    },
    {
      path:'/ChangePswPage',
      name:'ChangePsw',
      component:ChangePswPage
    }
  ]
})
