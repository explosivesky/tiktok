<template>
  <div id="video-list">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in videoList" :key="index">
        <!-- 幻灯内容 -->
        <videos :videoList="item"></videos>
        <video-info></video-info>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper" //导入组件
import Videos from "./Videos"
import videoInfo from "./videoInfo"

export default {
  data() {
    return {
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
      },
      videoList: [
        {
          id: "1",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4",
        },
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
  },
}
</script>

<style scoped>
#video-list {
  background-color: black;
}
</style>
