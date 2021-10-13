<template>
  <div class="users">
    <div class="user-avatar">
      <img src="~assets/img/rightBar/flower.jpg" alt="" />
    </div>
    <div class="user-info">
      <div class="user-name">{{name}}</div>
      <div class="user-recomment">
        <span>你好傻啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span>
        <span class="recomment-date">03-07</span>
      </div>
      <div class="reply">
        <div class="child-avatar">
          <img src="~assets/img/rightBar/flower.jpg" alt="" />
        </div>
        <div class="reply-info">
          <div class="user-name">
            二傻子
            <span class="isAuthor">作者</span>
          </div>
          <div class="user-recomment">
            <span>回复
              <span class="call">name :</span>
              你好傻啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span>
            <span class="recomment-date">03-07</span>
          </div>
          <div class="reply-like">
            <div class="iconfont icon-icon4"></div>
            <div class="like-num">2828</div>
          </div>
        </div>
      </div>
      <div class="user-like">
        <div class="iconfont icon-icon4"></div>
        <div class="like-num">2828</div>
      </div>
      <div class="floor">
        <span>一一 展开494条回复 </span><i class="iconfont icon-sanjiao1"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mockData } from 'netWork/mockData'
export default {
  data () {
    return {
      name: ''
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
.users {
  margin-top: 0 20px;
  padding: 10px;
  font-size: 16px;
}
.user-avatar {
  position: relative;
  left: 0;
  top: 0;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
.user-info {
  position: relative;
  top: -25px;
  left: 0;
  padding: 0 36px;
  text-align: left;
}
.recomment-date {
  margin-left: 3px;
  color: var(--color-text);
}
.user-name {
  color: #9f9ea3;
  margin-bottom: 10px;
}
.reply {
  margin-top: 15px;
}
.child-avatar {
  position: relative;
  left: 0;
  top: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  overflow: hidden;
}
.reply-info {
  position: relative;
  top: -15px;
  left: 0;
  padding-left: 25px;
  text-align: left;
}
.user-like {
  position: absolute;
  top: 0;
  right: 0;
}
.reply-like {
  position: absolute;
  top: 0;
  right: -35px;
}
.call {
  color: var(--color-text);
}
.icon-icon4 {
  color: var(--color-text);
  font-size: 30px;
}
.isAuthor {
  background-color: #ff4359;
  color: #ffffff;
  border-radius: 3px;
  font-size: 15px;
  padding: 2px;
}
.floor {
  color: var(--color-text);
  font-size: 15px;
}
.floor > i {
  font-size: 1px;
}
</style>
