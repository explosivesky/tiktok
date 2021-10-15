<template>
  <div id="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
}
</script>

<style>
#nav-bar {
  width: 100vw;
  padding: 10px;
  text-align: center;
  background-color: transparent;
  height: 60px;
  display: flex;
  color: rgb(240, 239, 239);
  line-height: 40px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
.left,
.right {
  width: 20%;
  font-size: 20px;
}
.middle {
  width: 60%;
}
</style>
