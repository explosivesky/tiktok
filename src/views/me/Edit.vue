<template>
  <div id="edit">
    <nav-bar>
      <div class="left-box" slot="left">
        <div class="left" @click="back">
        </div>
      </div>
      <div class="middle" slot="middle">
        <span>编辑资料</span>
        <div class="bottom">已完成70%</div>
      </div>
      <div slot="right"></div>
    </nav-bar>
    <div class="header">
      <div class="ava-box">
        <div class="avatar">
          <img src="../../assets/img/rightBar/flower.jpg" alt="">
          <span class="iconfont icon-xiangji"></span>
          <input type="file">
        </div>
        <div class="change-ava">点击更换头像</div>
      </div>
    </div>
    <div class="body">
      <div class="body-item">
        <span class="key">名字</span>
        <span class="val">
          <span class="ellipsis">爱学习</span>
          <div class="enter">
            <div class="enter-icon"></div>
          </div>
        </span>
      </div>
      <div class="body-item">
        <span class="key">抖音号</span>
        <span class="val">
          <span class="ellipsis">1213322026</span>
          <div class="enter">
            <div class="enter-icon"></div>
          </div>
        </span>
      </div>
      <div class="body-item">
        <span class="key">简介</span>
        <span class="val">
          <span class="ellipsis">我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习我爱学习</span>
          <div class="enter">
            <div class="enter-icon"></div>
          </div>
        </span>
      </div>
      <div class="body-item">
        <span class="key">性别</span>
        <span class="val">
          <span class="ellipsis">男</span>
          <div class="enter">
            <div class="enter-icon"></div>
          </div>
        </span>
      </div>
      <div class="body-item">
        <span class="key">生日</span>
        <span class="val">
          <span class="ellipsis">点击设置</span>
          <div class="enter">
            <div class="enter-icon"></div>
          </div>
        </span>
      </div>
      <div class="body-item">
        <span class="key">所在地</span>
        <span class="val">
          <span class="ellipsis">中国·山东·淄博</span>
          <div class="enter">
            <div class="enter-icon"></div>
          </div>
        </span>
      </div>
      <div class="body-item">
        <span class="key">学校</span>
        <span class="val">
          <span class="ellipsis">点击设置</span>
          <div class="enter">
            <div class="enter-icon"></div>
          </div>
        </span>
      </div>
      <div class="body-item">
        <span class="key">主页背景</span>
        <span class="val">
          <span class="ellipsis">更换背景图片</span>
          <div class="enter">
            <div class="enter-icon"></div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  components: {
    NavBar
  },
  methods: {
    back () {
      this.$router.push('/me')
    }
  }
}
</script>

<style scoped>
#edit {
  background-color: #151723;
  height: 100vh;
  font-size: 18px;
  box-sizing: border-box;
  padding: 15px;
  overflow: hidden;
}
.left-box {
  position: relative;
  width: 100%;
}
.left {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 18px;
  height: 18px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  transform: rotate(-45deg);
}
.middle {
  width: 100%;
  line-height: 35px;
}
.bottom {
  font-size: 12px;
  color: #90929e;
  margin-top: -20px;
}
.header {
  position: relative;
  top: 50px;
  width: 100%;
  height: 200px;
  margin-bottom: 80px;
}
.ava-box {
  position: relative;
  width: 120px;
  height: 120px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar {
  border-radius: 50%;
  margin-bottom: 16px;
  border: 1px solid black;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  opacity: 0.5;
}
.avatar .iconfont {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 45px;
  color: #ffffff;
}
.avatar input {
  width: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
}
.change-ava {
  color: #ffffff;
}
.body {
  /* background-color: #151723; */
}
.body .body-item {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
}
.enter {
  padding-left: 10px;
}
.enter .enter-icon {
  width: 10px;
  height: 10px;
  border-top: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  transform: rotate(45deg);
}
.key {
  color: #ffffff;
}
.val {
  color: #90929e;
  display: flex;
  align-items: center;
}
.ellipsis {
  text-align: right;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>