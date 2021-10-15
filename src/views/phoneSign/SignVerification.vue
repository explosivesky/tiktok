<template>
  <div id="phone-sign">
    <div class="sign-top">
      <span class="iconfont icon-fanhui" @click="back"></span>
      <span class="sign-top-riht">帮助</span>
    </div>
    <div class="sign-content">
      <p class="sign-title">请输入验证码</p>
      <p class="sign-protocol">
        验证码已通过短信发送至 +86 18463098021
      </p>
      <div class="inp-pwd">
        <div class="sign-box">
          <input class="sign-ipt" type="password" @input.stop.prevent="changeTel" v-model="pwd" placeholder="  请输入验证码" />
          <span class="count-down" v-show="isShow">{{ countDown }}</span>
        </div>
      </div>
      <div class="sign-btn">
        <button @click.stop.prevent="login" :class="{ isActive: btnColor }" :disabled="btnColor">
          <div class="load" v-if="!btnColor"></div>
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      telEare: "",
      pwd: "",
      btnColor: true,
      countDown: 60,
      falg: false,
    }
  },

  mounted () {
    if (!this.falg) {
      let timer = setInterval(() => {
        this.countDown--
        if (this.countDown == 0) {
          clearInterval(timer)
          this.countDown = 60
        }
      }, 1000)
      this.falg = true
    }
  },
  methods: {
    back () {
      this.$router.push("/sign")
    },
    login () {
      if (this.pwd.length == 6) {
        this.$router.push("/index")
      }
    },
    changeTel (e) {
      this.pwd = e.target.value
      let phoneRagular = /^\d{6}$/
      if (phoneRagular.test(this.pwd)) {
        this.btnColor = false
      } else {
        this.btnColor = true
      }
    },
  },
  computed: {
    isShow () {
      if (this.countDown == 0) {
        // this.btnColor = false
        // this.disabled = false
        return false
      } else if (this.countDown > 0 && this.countDown <= 60) {
        // this.btnColor = true
        // this.disabled = true
        return true
      }
    },
  },
}
</script>

<style scoped>
#phone-sign {
  padding: 45px 17px;
}
#phone-sign a {
  color: #7194ba;
}
.sign-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.sign-top .iconfont {
  font-size: 25px;
}
.sign-content {
  margin: 35px 15px;
  text-align: left;
}
.sign-title {
  font-weight: bold;
  font-size: 25px;
}
.sign-protocol {
  margin-top: 15px;
  font-size: 14px;
  color: var(--color-text);
}
.sign-box {
  display: flex;
}
.sign-box .sign-ipt {
  width: 80%;
  height: 45px;
  border: none;
  background-color: #f9f9f9;
  outline: 0;
  caret-color: red;
}
.sign-box .count-down {
  width: 20%;
  height: 100%;
  background-color: #f9f9f9;
  text-align: center;
  line-height: 45px;
}
input::-webkit-input-placeholder {
  color: var(--color-text);
}
.inp-pwd {
  margin-top: 10px;
}

.sign-btn {
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
button {
  display: flex;
  background-color: #eb5656;
  justify-content: center;
  line-height: 35px;
  color: #ffff;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  font-size: 18px;
}
.isActive {
  background-color: #d8d8db;
}
.count-down {
  widows: 20%;
  background-color: #f9f9f9;
  color: var(--color-text);
  line-height: 45px;
}
.load {
  margin-top: 7px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  border-bottom: 3px solid #cccccc;
  animation: loads linear 1s infinite;
}
@keyframes loads {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
