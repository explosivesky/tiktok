<template>
  <div id="msg-index">
    <div class="friend-list padding">
      <div class="friend-item">
        <div class="img">
          <img src="~assets/img/rightBar/flower.jpg" alt="">
        </div>
        <div class="ellipsis">是串串的小可爱</div>
      </div>
      <div class="friend-item">
        <div class="img">
          <img src="~assets/img/rightBar/flower.jpg" alt="">
        </div>
        <div class="ellipsis">东东</div>
      </div>
      <div class="friend-item">
        <div class="img">
          <img src="~assets/img/rightBar/flower.jpg" alt="">
        </div>
        <div class="ellipsis">果果</div>
      </div>
      <div class="friend-item">
        <div class="img">
          <img src="~assets/img/rightBar/flower.jpg" alt="">
        </div>
        <div class="ellipsis">zl120156165</div>
      </div>
      <div class="friend-item">
        <div class="img">
          <img src="~assets/img/rightBar/flower.jpg" alt="">
        </div>
        <div class="ellipsis">sd120156165</div>
      </div>
    </div>
    <div class="cut-off-rule"></div>
    <div class="msg-list">
      <div class="msg-list-item">
        <div class="avatar">
          <img src="~assets/img/msg/fans.png" alt="">
        </div>
        <div class="friend-des">
          <div class="friend-des-left">
            <p class="top">粉丝</p>
            <span class="des">Aesl关注了你</span>
          </div>
          <div class="friend-des-right">
            <div class="icon"></div>
          </div>
        </div>
      </div>
      <div class="msg-list-item">
        <div class="avatar">
          <img src="~assets/img/msg/interact.png" alt="">
        </div>
        <div class="friend-des">
          <div class="friend-des-left">
            <p class="top">互动消息</p>
            <span class="des">狗子 在评论中提到了你</span>
          </div>
          <div class="friend-des-right">
            <div class="icon"></div>
          </div>
        </div>
      </div>
      <div class="msg-list-item">
        <div class="avatar">
          <img src="https://api.prodless.com/avatar.png" alt="">
        </div>
        <div class="friend-des">
          <div class="friend-des-left">
            <p class="top">傻蛋</p>
            <span class="des">hello</span>
          </div>
          <div class="friend-des-right">
            <div class="icon" :style="isMsg ? style :''"></div>
          </div>
        </div>
      </div>
      <div class="msg-list-item">
        <div class="avatar">
          <img src="https://api.prodless.com/avatar.png" alt="">
        </div>
        <div class="friend-des">
          <div class="friend-des-left">
            <p class="top">傻蛋</p>
            <span class="des">hello</span>
          </div>
          <div class="friend-des-right">
            <div class="icon" :style="isMsg ? style :''"></div>
          </div>
        </div>
      </div>
      <div class="msg-list-item">
        <div class="avatar">
          <img src="https://api.prodless.com/avatar.png" alt="">
        </div>
        <div class="friend-des">
          <div class="friend-des-left">
            <p class="top">傻蛋</p>
            <span class="des">hello</span>
          </div>
          <div class="friend-des-right">
            <div class="icon" :style="isMsg ? style :''"></div>
          </div>
        </div>
      </div>
      <div class="msg-list-item">
        <div class="avatar">
          <img src="https://api.prodless.com/avatar.png" alt="">
        </div>
        <div class="friend-des">
          <div class="friend-des-left">
            <p class="top">傻蛋</p>
            <span class="des">hello</span>
          </div>
          <div class="friend-des-right">
            <div class="icon" :style="isMsg ? style :''"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isMsg: true,
      style: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'yellow'
      }
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.scroll {
  position: relative;
  top: 60px;
  left: 0;
  overflow: hidden;
  height: calc(100% - 120px);
}
.padding {
  padding: 0 5px;
}

.friend-list {
  margin-top: 25px;
  display: flex;
  justify-content: left;
  overflow-x: auto;
}
.friend-item {
  color: #8f909d;
  margin-right: 8px;
  width: 80px;
  height: 140px;
  flex-shrink: 0;
  white-space: nowrap;
}
.img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;
}
.friend-item img {
  width: 100%;
  height: 100%;
}

.ellipsis {
  width: 70px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cut-off-rule {
  width: 100%;
  height: 1px;
  background-color: #353744;
}
.msg-list {
  vertical-align: middle;
  padding-bottom: 60px;
}
.msg-list .avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.msg-list .avatar img {
  width: 100%;
  height: 100%;
}
.msg-list .friend-des {
  width: 80%;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #353744;
}
.msg-list .friend-des .friend-des-left {
  text-align: left;
  padding-top: 8px;
}
.msg-list .friend-des .friend-des-left p {
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
}
.msg-list .friend-des .friend-des-left span {
  font-size: 16px;
  color: #8f909d;
}
.msg-list-item {
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  display: flex;
}
.msg-list .friend-des .friend-des-right {
  width: 10%;
  display: flex;
  align-items: center;
}
.msg-list .friend-des .friend-des-right .icon {
  width: 10px;
  height: 10px;
  border-top: 1px solid #8f909d;
  border-right: 1px solid #8f909d;
  transform: translateY(-50%);
  transform: rotate(45deg);
}
</style>