<template id="login">
  <el-card
    shadow="always"
    class='box-card'
  >
    <div
      slot='header'
      class='Login'
    >
      <span >The Login Page</span>
    </div>
    <div>
      <el-cow>
        <el-row >
          <el-button
            round
            @click='tologin()'
          >submit</el-button>
        </el-row>
        <el-row >
          <el-col :span='10'>
            <router-link to='RegisterPage'>Register
            </router-link>
          </el-col>
          <el-col :span='10'>
            <router-link to='ChangePswPage'>Change Password
            </router-link>
          </el-col>
        </el-row>
      </el-cow>
    </div>
  </el-card>
</template>

<script>
//import Cookies from 'js-cookie';
export default {
  name: "Login",
  data: function () {
    return {};
  },
};
</script>


<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
.box-card {
  background-clip: padding-box;
  margin: 20px auto;
  width: 390px;
  height: 360px;
  padding: 15px 35px 15px 35px;
  background: rgb(252, 247, 247);
  border: 1px solid #a8a2a2;
}
.Login {
height: 20px;
}
</style>
