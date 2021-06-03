<template>
  <body id="app">
    <!--路由视图-->
    <router-view/>
    <br/>
    <span >Hello~ Welcome to our first Vue.js Appliction</span>
    <br/>
  </body>
</template>

<script>

export default {
  name: 'App',
  data (){
    return{
      //num1:1
    };
  }
}
</script>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  /*--margin-top: 60px;*/
}
</style>
