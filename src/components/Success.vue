<template id="success">
  <!--<div style="text-align:center">-->
  <div>
    <h2>{{message}}</h2>
    <router-link to='/'>
      <span>Back to login page</span>
    </router-link>
  </div>
</template>

<script type='text/javascript'>
import Cookies from "js-cookie";
export default {
  name: "Success",
  data: {
    function() {
      return {
        message: "Hello! Login in successfully！",
      };
    },
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
div{
  text-align: center;
}
</style>

