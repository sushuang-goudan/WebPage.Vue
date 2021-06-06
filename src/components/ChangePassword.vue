<template >
  <body id='CH'>
    <el-form class="Changepsw-container">
      <h2 class='Change-title'>The ChangePassword Page</h2>
      <h3 class='Change-title'>The current logged in user is：{{ LoginuserName }}</h3>
      <el-form-item>
        <el-input
          type='text'
          v-model='loginusername'
          placeholder="UserName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type='password'
          v-model="oldpassword"
          placeholder="input old password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type='password'
          v-model="newpassword"
          placeholder="input new password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type='password'
          v-model="newpassword2"
          placeholder="modify new password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          round
          @click="ChangePwd"
        >Sure to modify</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "ChangePwd",
  data: function () {
    return {
      loginusername: "",
      oldpassword: "",
      newpassword: "",
      newpassword2: "",
    };
  },
  created() {},
  computed: {
    LoginuserName() {
      return Cookies.get("userName");
    },
  },
  change(e) {
    //this.$forceUpdate();
    alert("i have ");
  },
  methods: {
    ChangePwd: function () {
      //创建与表单相同的数据
      let fd = new FormData();

      fd.append("username", this.loginusername);
      fd.append("oldpassword", this.oldpassword);
      fd.append("newpassword", this.newpassword);
      //配置请求头
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      if (
        this.oldpassword.length === 0 ||
        this.newpassword.length === 0 ||
        this.newpassword2.length === 0
      ) {
        alert("密码不能为空");
        return;
      } else if (this.newpassword === this.newpassword2) {
        //发送请求，
        this.$axios
          .post("/ChangePwdPage", fd, config)
          //请求成功的回调函数
          //.then(function(response){......})
          .then((res) => {
            alert(res.data.msg);
            //&&响应结束，
            if (res.data.code === 200) {
              // 回到登录界面
              this.$router.repalce({
                path: "/LoginPage",
              });
            }
          })
          //响应失败的回调函数
          .catch((res) => {
            alert(res.data.msg);
          });
      } else {
        alert("两次输入的新密码不同");
      }
    },
  },
};
</script>


<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
.Changepsw-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: rgb(252, 247, 247);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.Change-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
