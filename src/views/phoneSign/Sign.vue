<template>
  <div id="sign">
    <div class="sign-top">
      <span class="sign-top-left" @click.stop.prevent="backHome">×</span>
      <span class="sign-top-riht">帮助</span>
    </div>
    <div class="sign-content">
      <p class="sign-title">登录后即可展示自己</p>
      <p class="sign-protocol">
        登录即表明同意<a href=""> 抖音用户协议 </a>和<a href=""> 隐私政策</a>
      </p>
      <div class="sign-tel">
        <select class="sign-tel-eara">
          <option value="">+86</option>
        </select>
        <div class="sign-ipt">
          <input class="sign-ipt" @input="changeTel" type="text" placeholder="请输入手机号" v-model="phone" />
        </div>
      </div>
      <div class="sign-tipes">
        未注册的手机号验证通过后将自动注册
      </div>
      <div class="sign-btn">
        <button :disabled="disabled" @click.stop.prevent="login" :class="{ isActive: btnColor }">
          获取短信验证码
        </button>
      </div>
      <div class="sign-btm">
        <router-link tag="a" to="/phonesign">密码登录</router-link>
        <a href="::javascript" @click.stop.prevent="handle">其他方式登录</a>
      </div>
    </div>

    <div class="mask" v-show="!flag">
      <transition name="up">
        <ul class="other" v-show="!flag">
          <li class="other-item">今日头条登录</li>
          <li class="other-item">微信登陆</li>
          <li class="other-item">QQ登录</li>
          <li class="other-item">微博登录</li>
          <li class="other-last-item" @click.stop.prevent="cancel">取消</li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      telEare: "",
      flag: true,
      phone: "",
      btnColor: true,
      disabled: true,
    }
  },
  methods: {
    handle () {
      if (this.flag) {
        this.$store.commit("show", true)
        this.flag = false
      }
    },
    cancel () {
      this.flag = true
      this.$store.commit("noShow", false)
    },
    login () {
      this.$router.push("/verification")
    },
    //根据 手机好验证 修改 按钮样式
    changeTel (e) {
      this.pwd = e.target.value
      let phoneRagular = /^1[345789]{1}\d{9}$/
      if (phoneRagular.test(this.pwd)) {
        this.btnColor = false
        this.disabled = false
      } else {
        this.btnColor = true
        this.disabled = true
      }
    },
    //返回首页
    backHome () {
      this.$router.push('/index')
    }
  },
}
</script>

<style scoped>
#sign {
  padding: 45px 17px;
  height: 100%;
  width: 100%;
}
#sign a {
  color: #7194ba;
}
.sign-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.sign-top .sign-top-left {
  font-size: 35px;
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
.sign-tel {
  width: 100%;
  margin-top: 25px;
  display: flex;
  background-color: #f9f9f9;
}
.sign-tel .sign-tel-eara {
  margin-right: 10px;
  height: 45px;
  border: none;
}
.sign-tel .sign-ipt {
  display: flex;
  width: 80%;
  height: 45px;
  line-height: 45px;
  border: none;
  background-color: #f9f9f9;
  outline: 0;
  caret-color: red;
}
.sign-ipt ::-webkit-input-placeholder {
  color: var(--color-text);
}
.sign-tipes {
  margin-top: 10px;
  font-size: 14px;
  color: var(--color-text);
}
.sign-btn {
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
button {
  background-color: #eb5656;
  color: #ffff;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  font-size: 18px;
}
.sign-btm {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}
.mask .other {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 280px;
  background-color: #ffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid var(--color-text);
}
.mask .other li {
  height: 55px;
  line-height: 55px;
  border-top: 1px solid var(--color-text);
}
.mask .other .other-last-item {
  border-top: 5px solid var(--color-text);
}
.up-enter-active,
.up-leave-active {
  transition: all 0.3s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
  transform: translateY(200%);
}
.isActive {
  background-color: #d8d8db;
}
</style>
