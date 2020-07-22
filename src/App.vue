<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
@import "./assets/public.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

html,
body {
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}
.href-class {
  color: rgb(160, 160, 160);
  font-size: 14px;
  float: right;
}
.link-news {
  position: relative;
  top: 10px;
}
</style>
