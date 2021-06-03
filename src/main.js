// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*2021\5\ ui*/
import ElementUI from 'element-ui'
//import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

/* eslint-disable no-new */
/*2021\5\29引入elementui */
Vue.use(ElementUI)
//设置反向代理：
var axios=require('axios')

axios.defaults.baseURL='http://localhost:8002';
Vue.prototype.Host='/user'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  //调用根组件APP
  components: {App},
  template: '<App/>'
})
