<template>
  <div id="picture">
    <nav-bar id="nav-bar">
      <div class="left" slot="left" @click="close">×</div>
      <div class="middle" slot="middle">所有照片 <div class="icon"></div>
      </div>
    </nav-bar>
    <div class="pic-body">
      <div class="pic-top-bar">
        <div class="pic-top-bar-item isActive">全部</div>
        <div class="pic-top-bar-item">视频</div>
        <div class="pic-top-bar-item">图片</div>
      </div>
      <scroll class="scroll" :scrollY="true">
        <div class="pic-btm" ref="pic">
          <div ref="pictureBox" class="pic-btm-item" v-for="(item,index) in picture" :key="index">
            <div :class="[checkAll ? 'isShow' : '']" @click="checked(index)"> </div>
            <img :src="item.src" alt="">
          </div>
        </div>
      </scroll>
    </div>
    <div class="pic-floor">
      <div class="check">
        <div class="radio" @click="checkAllFn" :class="checkAll ? 'isCheck' : ''">
          <img src="../../assets/img/TabBar/tick.svg" alt="">
        </div>
        多选
      </div>
      <div class="next" :class="[checkAll ? 'isNext' : '']">
        下一步
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar'
import Scroll from '../../components/common/scroll/Scroll'
export default {
  props: {
    imgEle: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      checkAll: false,
      count: '',
      flag: false,
      index: [],
      obj: {},
      reset: true,
      result: false,
      native: null,
      style: {
        'position': 'absolute',
        'top': '5px',
        'right': '5px',
        'width': '25px',
        'height': '25px',
        'borderRadius': '50%',
        'textAlign': 'center',
        'lineHeight': '25px',
        'border': '2px solid #ffff',
        'backgroundColor': '#fb2a51',
        'fontSize': '14px',
        'color': '#fff',
        'opacity': '1'
      },
      picture: [
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
        {
          src: 'https://api.dujin.org/bing/1366.php'
        },
      ]
    }
  },
  components: {
    NavBar,
    Scroll
  },
  methods: {
    checkAllFn () {
      //获取所有图片的数量，根据数量遍历 所有图片元素
      //点击checkAll后 ,将图片中的样式 清除
      let length = this.$refs['pic'].children.length
      let child
      //点击checkAll后
      if (this.checkAll) {
        //全选按钮取消后 直接遍历所有图片元素，并取消样式
        for (let i = 0; i < length; i++) {
          //获取当前图片的标签元素，并将 innerHTML 清空
          child = this.$refs['pictureBox'][i].children[0]
          child.innerHTML = ''
          for (let j in this.style) {
            if (child.style.hasOwnProperty(j)) {
              child.style[j] = ""
            }
          }
        }
        this.count = ''
        //将全局数组 清空
        this.index = []
      }
      this.checkAll = !this.checkAll
      this.flag = false
    },
    checked (index) {
      let that = this
      that.$nextTick(() => {
        //获取当前 DOM 的 Style 对象
        let native = this.$refs['pictureBox'][index].children[0].style
        let length = this.$refs['pic'].children.length
        // console.log(this.$refs['pic'].children);

        /**   
           1.先创建一个全局数组 用于记录 当前所有点击过的 索引值，
           2.然后用 some 遍历全局数组，判断当前 图片的索引 是否存在于数组中
            -> 如果有重复索引，那么说明该图片处在选中状态
               1）清除标记样式
               2）重复 count 就 -1 ,用于给第三条 赋值
               3）遍历所有图片元素，如果当前遍历元素的innerHTML 大于等于当前点击的图片元素的count 的数值，元素的innerHTML -1
               4）遍历全局数组，把当前图片的索引值 全部删除
            -> 如果没有重复索引，那么说明该图片处没选中状态
               1)将当前点击的图片索引 push 到全局数组中
               2)给标记添加样式
               3)count ++ ,用于给第三条 赋值
            3.标记的 innerHTML = count
         */
        //判断当前图片 是否重复点击
        this.result = this.index.some(item => item == index)
        //一定要岔开！！！否则相互引用！！！！
        if (this.result) {
          console.log('重复');
          //清除样式
          for (let i in this.style) {
            if (native.hasOwnProperty(i)) {
              native[i] = ""
            }
          }
          //重复就-1
          --this.count
          //去除数组中所有 等于当前索引的 元素
          this.index.forEach((item, i) => {
            if (index == item) {
              this.index.splice(i, 1)
            }
          })
          //遍历所有图片元素，如果当前遍历元素的innerHTML 大于等于当前点击的图片元素的count 的数值，元素的innerHTML -1
          let current = this.$refs['pictureBox'][index].children[0].innerHTML
          for (let i = 0; i < length; i++) {
            let num = this.$refs['pictureBox'][i].children[0].innerHTML
            if (current <= num) {
              this.$refs['pictureBox'][i].children[0].innerHTML--
            }
          }
        } else {
          console.log('没重复');
          //添加标记
          ++this.count
          this.index.push(index)
          //给当前点击的图片添加样式
          for (let i in this.style) {
            if (native.hasOwnProperty(i)) {
              native[i] = this.style[i]
            }
          }
        }
        this.$refs['pictureBox'][index].children[0].innerHTML = this.count
      })
    },
    close () {
      this.$emit('close')
    }
  },
  // mounted(){
  //  this.imgEle
  // }
}

</script>

<style scoped>
.can {
  width: 100%;
  height: 100%;
}
#picture {
  position: relative;
  top: -100vh;
  z-index: 50;
  height: 100vh;
  background-color: #fff;
  color: black;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
#nav-bar {
  padding: 5px;
  color: black;
}
.scroll {
  position: absolute;
  top: 120px;
  height: calc(100% - 180px);
  overflow: hidden;
}
.left {
  width: 100%;
  font-size: 35px;
}
.middle {
  width: 100%;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
}
.icon {
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  transform: rotate(45deg);
}
.pic-body {
  margin-top: 10px;
}
.pic-top-bar {
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
}
.pic-top-bar .pic-top-bar-item {
  padding: 10px 0;
}
.isActive {
  border-bottom: 2px solid black;
}
.pic-btm {
  height: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pic-btm .pic-btm-item {
  position: relative;

  width: 33%;
  height: 125px;
  margin-bottom: 2px;
}
img[src=""],
img:not([src]) {
  opacity: 0;
  border: none;
  visibility: hidden;
  max-width: none;
}
.pic-btm-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pic-floor {
  position: relative;
  width: 100%;
  bottom: -500px;
  z-index: 6;
  height: 60px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
}
.check {
  display: flex;
  align-items: center;
  justify-content: left;
}
.radio {
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
}
.pic-floor .radio img {
  width: 100%;
  height: 100%;
}
.next {
  padding: 10px;
  background-color: #f1f1f1;
  color: #a5a5a5;
}
.isNext {
  background-color: #fb2a51;
  color: #ffffff;
}
.isCheck {
  border: none;
  padding: 2px;
  background-color: #fb2a51;
}
.isShow {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #a3a5a8;
  opacity: 0.3;
  background-color: black;
}
.hover {
  text-align: center;
  line-height: 25px;
  border: 2px solid #ffff;
  background-color: #fb2a51;
  font-size: 14px;
  color: #fff;
  opacity: 1;
}
</style>