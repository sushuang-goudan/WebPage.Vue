<template id="success">
   <!--<div style="text-align:center">-->
     <div style="text-align:center">
    <h2 :style="StyleB">Hello! Login in successfully！</h2>
     <img src="">
     <router-link to='/'>
       <span :style="StyleC">Back to login page</span>
     </router-link>
   </div>
</template>

<script type='text/javascript'>
  //import Cookies from 'js-cookie';
  //export default{
   // data:{
    //  message: 'Hello'
    //},
    //computed:{
    //  username(){
    //  return this.message.split('').reverse().join('');
     // }
    //}
  //}
export default {
    name:'Success',
  data:function(){
    return{
    }
  }
}

/*var Success=new Vue({
  el:'Success',
  data:{
    StyleB:{
      color:'LightBule',
      fontSize: '30px'
    },
    StyleC:{
      color:'LightRed',
      frontSize:'20px'
    }
  }
})
*/
</script>
<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>

     /* color:'LightBule',
      fontSize: '30px'
      color:'LightRed',
      frontSize:'20px'*/
</style>

