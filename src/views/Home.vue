<template>
  <div id="home">
    <div>
      <router-view />
    </div>
    <keep-alive>
      <tab-bar />
    </keep-alive>
  </div>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar"
export default {
  components: {

    TabBar,
  }
}
</script>

<style>
</style>