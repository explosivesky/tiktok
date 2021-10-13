<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  components: {
  },
}
</script>

<style>
@import "~assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
