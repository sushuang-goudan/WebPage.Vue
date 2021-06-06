<template>
<body id='Success'>
      <h1>{{message}}</h1>
    <router-link class="link link2" to='/'>
         Back to login page
    </router-link>
</body>
</template>

<script type='text/javascript'>
import Cookies from "js-cookie";
export default {
  name: "Success",
  data: function() {
      return {
        message: "Hello! Login in successfully！",
      };
    },
  computed: {
    username() {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
h1{
  font-size:40px;
}
.link2{
  font-size:30px;
}
</style>

