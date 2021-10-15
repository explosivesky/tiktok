<template>
  <div id="wrapper" ref="wrapper">
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//导入
import BScroll from "better-scroll"

export default {
  props: {
    /**
     * probeType 侦察
     * 0,1 默认值 不侦察
     * 2  只有手指在屏幕上滑动时侦察，手指离开后的惯性 不侦察
     * 3  只要是在滑动，都侦察
     */
    probeType: {
      type: Number,
      default: 2,
    },
    //执行下拉懒加载
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
    scrollY: {
      type: Boolean,
      default: false
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    verticalOrHorizontal: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      scroll: null,
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //2.0以上必须要加这个属性，加载插件
      observeDOM: true,
      //除button 标签之外控制所有标签是否能点击
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      scrollY: this.scrollY,
      scrollX: this.scrollX,
      eventPassthrough: 'horizontal',
      freeScroll: true
    })
    //将此事件发送出去
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position)
    })
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp")
    })
  },
  methods: {
    //滚动到
    scrollTo (x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    //refresh 因为涉及到 图片加载，之前计算的高度已经和现在的不一样了，所以要刷新，重新计算 bs 的高度，
    refresh () {
      this.scroll && this.scroll.refresh()
      console.log('刷新');

    },
    //获取当前滚动位置
    getScrollY () {
      return this.scroll ? this.scroll.y : 0
    },
  },
}
</script>

<style scoped></style>
