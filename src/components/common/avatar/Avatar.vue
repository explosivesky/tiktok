<template>
  <div class="friend-item">
    <div class="avatar">
      <img :src="img" alt="">
    </div>
    <div class="friend-name">{{name}}</div>
  </div>
</template>

<script>
import { mockData } from 'netWork/mockData'
export default {
  data () {
    return {
      name: '',
      img: 'https://api.prodless.com/avatar.png'
    }
  },
  created () {
    mockData().then(data => {
      this.name = data.data.userName
    })
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.friend-item {
  padding: 15px;
  display: flex;
  align-items: center;
}
.avatar {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.avatar img {
  height: 100%;
  width: 100%;
}
.friend-name {
  font-size: 18px;
  color: #ffffff;
}
</style>