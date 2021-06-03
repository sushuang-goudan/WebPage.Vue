<template >

  <body id='CH'>
    <el-form class="Changepsw-container">
      <h2 class="Change-title">The ChangePassword Page</h2>
      <h3 class="top_div">The current logged in user is：{{ LoginuserName }}</h3>
      <br />
      <!--<el-form-item>-->
      <!--  UserName:-->
      <el-form-item label="">
        <el-input
          type="text"
          v-model="LoginuserName"
          auto-complete="off"
          @input="change($event)"
          placeholder="Username"
        />
      </el-form-item>

      <el-form-item>
        <!--Old Password:-->
        <el-input
          type="password"
          v-model="oldpassword"
          auto-complete="off"
          placeholder="Old password"
        />
      </el-form-item>
      <el-form-item>
        <!-- New Password:-->
        <el-input
          type="password"
          v-model="newpassword"
          auto-complete="off"
          @input="change($event)"
          placeholder="New password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <!-- Determine Password:-->
        <el-input
          type="password"
          v-model="newpassword2"
          auto-complete="off"
          @input="change($event)"
          placeholder="input newpassword again"
        />
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
  FormData: {
    value: "",
  },
  data() {
    return {
      LoginuserName: "",
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
    this.$forceUpdate();
  },
  methods: {
    ChangePwd: function () {
      //创建与表单相同的数据
      let fd = new FormData();

      fd.append("username", this.LoginuserName);
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
          .post("user/changepwd", fd, config)
          //请求成功的回调函数
          //.then(function(response){......})
          .then((res) => {
            alert(res.data.msg);

            //&&响应结束，
            if (res.data.code === 200) {
              // 回到登录界面
              this.$router.push({
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


<script>
export default {
  name: "ChangePsw",
  data: function () {
    return {};
  },
};
</script>

<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
#CH {
  background: url(~@/assets/children.jpg) no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
}
.Changepsw-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.Change-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
