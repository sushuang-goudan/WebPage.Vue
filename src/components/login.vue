<template>

  <body id="login">
    <el-form class='Login-container'>
      <h2 class='Login-title'>The Login Page</h2>
      <el-form-item>
        <el-input
          v-model.lazy="username"
          type="text"
          placeholder="UserName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model.lazy="password"
          type="password"
          placeholder="please input  password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          round
          @click='sumbit()'
          type="submit"
        >login</el-button>
      </el-form-item>
      <el-form-item id="label">
        <label for="hi"><a
            @click="newId"
            id="hi"
          >没有账号？去创建</a></label>
      </el-form-item>
      <el-form-item>
        <router-link
          class="link"
          to='ChangePswPage'
        >Change Password
        </router-link>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
//import Cookies from 'js-cookie';
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    newId() {
      this.$router.replace("/RegisterPage");
    },
  },
};
</script>


<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
.Login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 0 auto 0;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: rgb(252, 247, 247);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.Login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
a {
  font-size: 14px;
  color: #a9a9a9;
}
a:hover {
  color: rgb(20, 126, 129);
}
#label{
  margin:auto auto 0;
}
</style>
