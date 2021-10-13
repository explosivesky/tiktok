<template>
  <div id="phone-sign">
    <div class="sign-top">
      <span class="iconfont icon-fanhui" @click="back"></span>
      <span class="sign-top-riht">帮助</span>
    </div>
    <div class="sign-content">
      <p class="sign-title">手机号密码登录</p>
      <p class="sign-protocol">
        验证码已通过短信发送至 +86 18463098021
      </p>
      <div class="sign-tel">
        <select class="sign-tel-eara" v-model="telEare">
          <option value="">+86</option>
        </select>
        <div class="sign-ipt">
          <input class="sign-ipt" @input.stop.prevent="changeTel" type="text" placeholder="请输入手机号" v-model="phone" />
        </div>
      </div>
      <div class="inp-pwd">
        <div class="sign-box">
          <input class="sign-ipt" type="password" v-model="pwd" @input.stop.prevent="changeTel" placeholder="  请输入密码" />
        </div>
      </div>
      <div class="sign-btn">
        <button @click.stop.prevent="changeTel">
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mockData } from "netWork/mockData"

export default {
  data () {
    return {
      telEare: "",
      pwd: "",
      btnColor: true,
      phone: "",
      disabled: true,
      userPwd: "",
      login: {
        isLogin: true,
        homeIndex: 3
      }
    }
  },
  created () {
    mockData().then((req) => {
      this.userPwd = req.data.userPwd
    })
  },
  methods: {
    back () {
      this.$router.replace("/sign")
    },
    changeTel (e) {
      let phoneRagular = /^1[345789]{1}\d{9}$/
      mockData().then((req) => {
        this.userPwd = req.data.userPwd
      })
      if (e.type == "click") {
        if (!phoneRagular.test(this.phone)) {
          this.$toast({
            show: true,
            message: "请输入正确的手机号",
            type: "err",
          })
        } else if (this.pwd == "") {
          this.$toast({
            message: "密码不能为空",
            show: true,
            type: "err",
          })
        } else if (this.phone == "") {
          this.$toast({
            message: "手机号不能为空",
            show: true,
            type: "err",
          })
        } else if (this.pwd != this.userPwd) {
          this.$toast({
            message: "密码不正确",
            show: true,
            type: "err",
          })
        } else {
          //如果是点击事件那么 跳转到 /me
          this.$router.replace("/me")
          //修改tabbar 参数
          this.$store.commit('login', this.login)
        }
      }
      // else if (e.type == 'input') {
      //   if (phoneRagular.test(this.phone) && this.pwd.length >= 6) {
      //     this.disabled = false;
      //     this.btnColor = false
      //   }
      // }
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
  background-color: #f9f9f9;
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
.sign-box {
  display: flex;
}
.sign-box .sign-ipt {
  width: 100%;
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
  background-color: #eb5656;
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
</style>
