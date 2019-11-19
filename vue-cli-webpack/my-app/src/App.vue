<template>
  <div id="app">
    <img src="./assets/QQ图片20191116103314.jpg" alt="">
      <router-link to="/login">登录</router-link>
        <router-link to="/">首页</router-link>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
<style>
body{
  height: 500px;
  background: red;
  color: #000;
}
</style>