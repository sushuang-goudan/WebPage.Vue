//main.js：入口
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*2021\5\ ui*/
import ElementUI from 'element-ui'
//import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
//添加对store的引用
import store from './store'
/* eslint-disable no-new */
/*2021\5\29引入elementui */
Vue.use(ElementUI)
//设置反向代理：
var axios=require('axios')

axios.defaults.baseURL='http://localhost:8002/api';
//全局注册，之后可以在其他组件中通过this.$axios发送数据
Vue.prototype.$axios=axios

Vue.config.productionTip = false

//使用钩子函数判断是否拦截
//钩子函数：在某些时机会被调用的函数
//此处我们仨会用router.beforeEach(),在访问每一个路由前调用

router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    if(store.state.user.username){
    next()
  }else{
    next({
      path:'/',
      query:{
          redirect:to.fullPath
      }
    })
  }
}else{
  next()
}
}
)

new Vue({
  el: '#app',
  router,
  store,
  //调用根组件APP
  components: {App},
  template: '<App/>'
})

