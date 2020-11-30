<!-- 首页轮播图 --> 
<template>
  <div class="report-rotation">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper-box">
      <swiper-slide v-for="(item,index) in rotationList" :key="`rotation${index}`" class="swiper-slide">
        <a :href="item.url">
          <img class="slide-img" :src="item.pic" alt="1">
          <p class="slide-title">{{item.name}}</p>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components:{
    Swiper,
    SwiperSlide,
  },
  props: {
    rotationList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions:{
          autoplay:true,
          loop:true,
          delay: 3000,
          effect:'slide',
          // cubeEffect: {
          //   shadowOffset: 100,
          //   shadowScale: 0.6
          // },
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          }
      },
    }
  }
}
</script>

<style lang="stylus">

.report-rotation
  position: relative;
  width: 550px;
  height: 242px;
  overflow: hidden;
  border-radius: 2px;
  @media screen and (max-width: 1438px)
    width: 459px;
    height: 202px;
  .swiper-box
    width: 100%;
    height: 100%;
    .swiper-slide
      .slide-img
        width: 100%;
        height: 100%;
      .slide-title
        position: absolute;
        left: 10px;
        bottom: 10px;
        width: 70%;
        font-size: 14px;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      &::before
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 48px;
        border-radius: 2px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=');
        content: "";
    .swiper-pagination
      position: absolute;
      left: 75%;
      bottom: 12px;
      z-index: 10;
      width: 25%;
      .swiper-pagination-bullet
        width: 10px;
        height: 10px;
        margin-left: 6px;
        background: #f2f6fc;
        opacity: 1;
      .swiper-pagination-bullet-active
        border-width: 0;
        border-color: transparent;
        background-color: transparent;
        background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/icon_slide_selected.png);
        background-size: cover;
        background-repeat: no-repeat;
        transform: scale(1.8);


</style>