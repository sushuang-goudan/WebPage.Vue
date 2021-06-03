<template id="login">
   <!--<div style="text-align:center">-->
     <div style="text-align:center">
      <h2 >The Login Page</h2>
      <img src="">
      <button @click='tologin()'>submit</button>
      <br/>
        <router-link to='RegisterPage'>Register
        </router-link>
        <br/>
        <router-link to='ChangePswPage'>Change Password
        </router-link>
      </div>
</template>

<script>
//import Cookies from 'js-cookie';
  export default {
    name: 'Login',
  data:function(){
    return{
    }
  }
}
</script>


<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>

</style>
