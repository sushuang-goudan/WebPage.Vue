import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //localStorage本地存储
  state:{
    user:{
      //判断localStorage是否有user的对象在，在就取出并或得username的值，不在就设为null
      username:window.localStorage.getItem('user'||'[]')==null
      ? '':JSON.parse(windows.localStorage.getItem('user'||'[]')).username
    }
  },
  mutations:{
    login(state,user){
      state.user=user
      windows.localStorage.setItem('user',JSON.stringify(user))
    },
  }
})
