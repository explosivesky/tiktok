<template>
  <div id="publish">
    <div class="publish-content">
      <div class="pub-top">
        <div class="left" @click="back">×</div>
        <div class="middle">
          <div class="iconfont icon-yinfu1"></div>
          选择音乐
        </div>
        <div class="right"></div>
      </div>
      <div class="video">
        <video class="video-item" ref="video" src="" style="height:calc(100vh - 60px);width:100%;object-fit:fill;borderRadius:5px;"></video>
      </div>
      <div class="pub-btm">
        <div class="pub-cont-top">
          <span>照片</span>
          <span class="isActive">视频</span>
          <span>文字</span>
        </div>
        <div class="pub-cont-middle">
          <div class="pub-cont-middle-item">
            <div class="div-cont"></div>
            <span class="font">道具</span>
          </div>
          <div class="pub-cont-btm-middle" @click="shutter">
            <input type="file" accept="image/*" capture="camera" class="input" v-show="isShow">
            <div class="pub-circle"></div>
          </div>
          <div class="pub-cont-middle-item" @click="showPhtot">
            <div class="div-cont">
              <canvas class="canvas"></canvas>
            </div>
            <span class="font">相册</span>
          </div>
        </div>
        <div class="pub-cont-btm">
          <span class="pub-cont-btm-item ">
            <div class="notify"></div> K歌
          </span>
          <span class="pub-cont-btm-item">
            <div class=""></div>分段拍
          </span>
          <span class="pub-cont-btm-item hover">
            <div class=""></div>快拍
          </span>
          <span class="pub-cont-btm-item">
            <div class=""></div>影集
          </span>
          <span class="pub-cont-btm-item">
            <div class=""></div>开直播
          </span>
        </div>
      </div>
    </div>
    <transition name="pic-list">
      <div v-show="isPhoto">
        <picture-list @close="close" ref="photo" :imgEle="imgEle" />
      </div>
    </transition>
    <transition name="mask">
      <div class="mask-box" v-show="mask"></div>
    </transition>
  </div>
</template>

<script>
import PictureList from './PictureList'
export default {
  data () {
    return {
      video: null,
      context: null,
      isShow: false,
      stream: null,
      isPhoto: false,
      mask: false,
      canvas: null,
      imgEle: null
    }
  },
  components: {
    PictureList
  },
  mounted () {
    //检测系统
    if (navigator.platform.indexOf('Win') != -1) {
      this.isShow = false
    } else if (navigator.platform.indexOf('Linux') != -1) {
      this.isShow = true
    }
    this.video = document.querySelector("." + this.$refs.video.className)
    //调用摄像头
    this.getCamera()
    //获取canvas 元素
    this.canvas = document.querySelector('.canvas')
    //生成图像
    this.context = canvas.getContext('2d');
  },
  methods: {
    //控制相册是否显示
    close () {
      this.isPhoto = false

      this.getCamera()
    },
    //控制相册是否显示
    showPhtot () {
      this.isPhoto = true
      //调用摄像头
      this.closeCamera()
    },
    //快门
    shutter () {
      //模仿快门效果
      this.mask = true
      let timer = setTimeout(() => {
        this.mask = false
        clearTimeout(timer)
        timer = null
      }, 100)
      //生成图像
      this.context.drawImage(this.video, 0, 0, 480, 320);

      var date = new Date().getTime();
      // 点击，canvas画图
      this.context.drawImage(video, 0, 0, 300, 300);
      // 获取图片base64链接
      var image = this.canvas.toDataURL('image/png');
      // 定义一个img
      var img = new Image();
      //设置属性和src
      img.id = "imgBox";
      img.src = image;
      //将图片添加到页面中
      this.imgEle = img
    },
    getCamera () {
      let that = this;
      function getUserMedia (constraints, success, error) {
        if (navigator.mediaDevices.getUserMedia) {
          //最新的标准API
          navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
        } else if (navigator.webkitGetUserMedia) {
          //webkit核心浏览器
          navigator.webkitGetUserMedia(constraints, success, error)
        } else if (navigator.mozGetUserMedia) {
          //firfox浏览器
          navigator.mozGetUserMedia(constraints, success, error);
        } else if (navigator.getUserMedia) {
          //旧版API
          navigator.getUserMedia(constraints, success, error);
        }
      }
      function success (stream) {
        //兼容webkit核心浏览器
        let CompatibleURL = window.URL || window.webkitURL;
        //将视频流设置为video元素的源
        console.log(stream);

        //video.src = CompatibleURL.createObjectURL(stream);
        //获取关闭摄像头方法
        that.stream = typeof stream.stop === 'function' ? stream : stream.getTracks();
        that.video.srcObject = stream;
        that.video.play();
      }

      function error (error) {
        console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
      }

      if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator
        .mozGetUserMedia) {
        //调用用户媒体设备, 访问摄像头
        getUserMedia({ video: true }, success, error);
      } else {
        alert('不支持访问用户媒体');
      }
    },
    back () {
      this.closeCamera()
      //返回路由
      this.$router.back()
    },
    closeCamera () {
      //安卓不需要关闭不用调用stop 函数
      if (!this.isShow) {
        //关闭摄像头
        this.stream.forEach(track => {
          track.stop()
        })
        this.video.srcObject = null;
      }
    }
  }
}
</script>

<style scoped>
.pic-list-enter-active,
.pic-list-leave-active {
  transition: all 0.4s;
}
.pic-list-enter,
.pic-list-leave-to {
  opacity: 1;
  transform: translateY(100%);
}

.mask-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
}
.mask-enter-active,
.mask-leave-active {
  transition: all 0.2s;
}
.mask-enter,
.mask-enter-to {
  opacity: 1;
}
.mask-leave,
.mask-leave-to {
  opacity: 0;
}
#publish {
  background-color: black;
  height: 100vh;
  position: relative;
  z-index: 1;
  color: #ffffff;
}
.pub-top {
  position: absolute;
  top: 30px;
  z-index: 5;
  left: 0;
  right: 0;
  display: flex;
  box-sizing: content-box;
  align-items: center;
  height: 40px;
}

.pub-top .left {
  width: 30%;
  font-size: 35px;
  color: #ffffff;
  text-align: left;
  padding-left: 20px;
}
.pub-top .middle {
  flex: 1;
  color: #ffffff;
  font-size: 16px;
  width: 80%;
  display: flex;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  justify-content: center;
  line-height: 40px;
}
.iconfont {
  padding-right: 5px;
  font-size: 18px;
}
.pub-top .right {
  width: 30%;
}
.video {
  /* background-color: #cccc; */
  height: 100vh;
  /* height: -webkit-fill-available; */
}
.pub-btm {
  position: fixed;
  bottom: 0px;
  /* background-color: black; */
  width: 100%;
}
.pub-btm .pub-cont-top {
  height: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.pub-btm .pub-cont-top span {
  display: block;
  width: 75px;
  line-height: 30px;
  height: 100%;
}
.isActive {
  color: black;
  background-color: #fff;
  border-radius: 15px;
}
.pub-cont-middle {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.pub-cont-middle .pub-cont-middle-item {
  width: 40px;
  box-sizing: content-box;
  height: 50px;
}
.pub-cont-middle .div-cont {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 5px;
}
.canvas {
  width: 36px;
  height: 36px;
  border-radius: 5px;
}
.font {
  font-size: 14px;
}
.pub-cont-middle .pub-cont-btm-middle {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1 solid #f92b55;
  box-shadow: 5px 0 5px #f92b55, -5px 0 5px #f92b55, 0 -5px 5px #f92b55,
    0 5px 5px #f92b55;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
}
.input {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  opacity: 0;
  transform: translate(-50%, -50%);
}
.pub-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f92b55;
}
.pub-cont-btm {
  padding: 10px 15px;
  color: #7e7e7e;
  font-weight: 600;
  background-color: black;
  font-size: 18px;
  display: flex;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  justify-content: space-around;
}
.pub-cont-btm-item {
  position: relative;
  padding: 10px;
}
.notify {
  position: absolute;
  right: -4px;
  top: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f92b55;
}
.hover {
  color: #ffffff;
}
</style>