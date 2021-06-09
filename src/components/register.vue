<template>
  <body id="register">
    <el-form class='Register-container' label-position="right">
      <h2  class='Register-title'>The Register Page</h2>
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
          placeholder="Password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox
          v-model="isAgree"
          type="checkbox"
          name="agreement"
         label="已阅读并同意使用条款以及非活跃号处理规范"
        >
        </el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          round
          @click="register"
          type="submit"
        >Regsiter Now</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>
<script>
export default {
  name: "Register",
  data: function () {
    return {
      isAgree: false,
      username: "",
      password: "",
    };
  },
  methods:{
    register:function(){
      let fd=new FormData();
    //在form-data表单中添加数据
      fd.append('userName',this.username);
      fd.append('passwd',this.password);

      let config={
        headers:{
          'Content-Type':'mutipart/form-data'
        }
      }

      if(!this.isAgree){
        alert('Please agree to the protocol first!')
      }
      else{
        this.$axios
        .post('user/register',fd,config)
        .then(res=>{
          alert(res.data.msg);
          //响应结束时
          if(res.data.code===200){
            //回到LoginPage
            this.$router.push({
              path:'/'
            })
          }
        })
        .catch(res=>{
          alert(res.data.msg);
        }
        )
      }
    }
  }
};
</script>

<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
.Register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 0 auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: rgb(252, 247, 247);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.Register-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
