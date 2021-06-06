<template>
  <el-container>
    <el-header> {{message1}} </el-header>
    <el-main>
      <!--路由视图-->
      <router-view />
    </el-main>
    <el-footer>{{message2}}</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message1: "Hello~ Welcome to our Page",
      message2: "first Vue",
    };
  },
};
</script>

<style>
.el-container {
  background-size: cover;
  position: fixed;
  height: 100%;
  width: 100%;
  background: url(~@/assets/children.jpg) no-repeat center;
  margin: 0px;
}
.el-header {
  color:#303133;
  text-align:center;
  line-height:80px;
  font-size:20px Extra large;
  font-family:'Lucida ConsoleFantasy',Arial, Helvetica, sans-serif;
}
.el-main{
  line-height:160px;
  text-align:center;
}
.el-footer {
  color:#909399;
  text-align:center;
  line-height:80px;
  font-family:'Courie New','Lucida ConsoleFantasy',Arial, Helvetica, sans-serif;
}
</style>
