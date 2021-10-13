<template>
  <div class="video-list">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in videoList" :key="index" :class="{ 'swiper-no-swiping': isShow }">
        <videos :videoList="item" :index="index" ref="videos"></videos>
        <right-bar />
        <video-info />
        <transition name="up">
          <div v-if="isShow">
            <comment class="comment" />
          </div>
        </transition>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper" //导入组件
import Videos from "./Videos"
import videoInfo from "./videoInfo"
import RightBar from "./RightBar"
import Comment from "./Comment"
import { mapGetters } from "vuex"

export default {
  data () {
    return {
      page: 0,
      flag: true,
      currentFlag: false,
      swiperOption: {
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0,
        observeParents: true,
        noSwiping: true,
        on: {
          // sliderMove: (swiper) => {
          //   this.currentFlag = false
          // },
          //下滑时视频播放 上面视频暂停
          slideNextTransitionStart: (swiper) => {
            ++this.page
            this.prevVideo(this.page)
          },
          //上滑时视频播放 下面视频暂停
          slidePrevTransitionStart: (swiper) => {
            --this.page
            this.nextVideo(this.page)
          },
          tap: (swiper) => {
            this.playAction(this.page)
          },
        },
      },
      videoList: [
        // {
        //   id: "1",
        //   url:
        //     "https://sf1-ttcdn-tos.pstatp.com/obj/tos-cn-v-0004/d8841ad6d7d049c9a69b5f9fff9e1527",
        // },
        // {
        //   id: "1",
        //   url:
        //     "https://sf1-ttcdn-tos.pstatp.com/obj/tos-cn-v-0004/d8841ad6d7d049c9a69b5f9fff9e1527",
        // },
        // {
        //   id: "1",
        //   url:
        //     "https://sf1-ttcdn-tos.pstatp.com/obj/tos-cn-v-0004/d8841ad6d7d049c9a69b5f9fff9e1527",
        // },
        // {
        //   id: "1",
        //   url:
        //     "https://sf1-ttcdn-tos.pstatp.com/obj/tos-cn-v-0004/d8841ad6d7d049c9a69b5f9fff9e1527",
        // },
        {
          id: "2",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4",
        },
        {
          id: "3",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4",
        },
        {
          id: "4",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4",
        },
      ],
    }
  },
  components: {
    Videos,
    videoInfo,
    RightBar,
    Comment,
  },
  mounted () {
  },
  methods: {
    playAction (page) {
      //注意 这个插件的 ref videos 是个数组
      this.$refs.videos[page].clickPlayerOrPause()
    },
    prevVideo (page) {
      this.$refs.videos[page].play()
      this.$refs.videos[page - 1].stop()
    },
    nextVideo (page) {
      this.$refs.videos[page].play()
      this.$refs.videos[page + 1].stop()
    }
  },
  computed: {
    //点击评论时，取消 swiper 的所有默认行为
    ...mapGetters(["getIsShow"]),
    isShow () {
      return this.getIsShow
    },
    noSwiper () {
      return this.currentFlag
    },
  },
}
</script>

<style scoped>
.video-list {
  background-color: black;
  height: calc(100vh - 120px);
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}
.up-enter-active,
.up-leave-active {
  transition: all 0.3s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
  transform: translateY(100%);
}
</style>
