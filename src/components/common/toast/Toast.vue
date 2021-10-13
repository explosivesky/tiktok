<template>
  <div id="toast">
    <transition name="toast">
      <div class="toast-box" v-show="show" :class="type" @click="handle">
        {{message}}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      type: '',
      show: false
    }
  },
  methods: {
    //点击时 消失
    handle () {
      this.show = false
    }
  }
}
</script>

<style scoped>
#toast {
  margin: 0px;
}
.toast-box {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 30px;
  width: 70%;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
.success {
  background-color: rgba(0, 0, 0, 0.5);
}
.err {
  background-color: rgba(180, 0, 0, 0.6);
}
.toast-enter-active,
.toast-leave-active {
  transition: 1s all;
}
.toast-enter,
.toast-enter-to {
  opacity: 1;
}
.toast-leave,
.toast-leave-to {
  opacity: 0;
}
</style>