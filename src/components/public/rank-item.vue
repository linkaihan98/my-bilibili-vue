<template>
  <div class="rank-wrap" @mouseenter="onEnter" @mouseleave="onLeave">
    <span class="number" :class="{'on': index < 3}">{{index+1}}</span>
    <!-- 每版第一条视频附带图片 -->
    <div v-if="index === 0" class="preview">
      <div class="preview-pic">
        <a class="pic-link" :href="`//www.bilibili.com/video/${info.bvid}`" target="_blank">
          <el-image
            :src="info.pic"
            :alt="info.title"
            class="first-pic"
          ></el-image>
        </a>
        <watch-later class="watch-later-video"></watch-later>
      </div>
      <div class="preview-txt">
        <a class="txt-link" :href="`//www.bilibili.com/video/${info.bvid}`" target="_blank">
          <p :title="info.title" class="title">{{info.title}}</p>
        </a>
        <span class="txt-score">综合得分：{{formatNum(info.score)}}</span>
      </div>
    </div>
    <a v-else class="item-link" :href="`//www.bilibili.com/video/${info.bvid}`" target="_blank">
      <p class="title" :title="info.title">{{info.title}}</p>
    </a>
    <transition name="pvc-fade">
      <video-card-popover class="pvc" v-show="show" :info="info"></video-card-popover>
    </transition>
  </div>
</template>

<script>
import { formatNum } from './../../utils/index'

import WatchLater from './watch-later';
import VideoCardPopover from './video-card-popover'

export default {
  components: {
    VideoCardPopover,
    WatchLater,
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      formatNum,
      show: false,
      timeout: null
    }
  },
  methods: {
    // 防抖 时间间隔300ms
    onEnter() {
      this.clear()
      this.timeout = setTimeout(() => {
        this.show = true
        this.clear()
      }, 300)
    },
    onLeave() {
      this.show = false
      this.clear()
    },
    clear() {
      if(this.timeout) {
        clearTimeout(this.timeout)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.rank-wrap
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  &:last-child
    margin-bottom: 0;
  .number 
    font-size: 14px;
    color: #999;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    &.on
      color: #fff;
      background: #00a1d6;
  .preview
    position: relative;
    display: flex;
    width: 290px;
    font-weight: 500;
    .preview-pic
      position: relative;
      .pic-link
        .first-pic
          width: 112px;
          height: 63px;
          border-radius: 2px;
      .watch-later-video
        transition: opacity 0.3s;
        opacity: 0;
      &:hover
        .watch-later-video
          transition-delay: 0.2s;
          opacity: 1;
    .preview-txt
      margin-left: 12px;
      .txt-link
        .title
          word-break: break-all;
          font-size: 14px;
          height: 40px;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 5px;
      .txt-score
        font-size: 12px; 
        white-space: nowrap;
        color: #999;
  .item-link
    display: inline-block;
    .title 
      width: 290px;
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 500;
  .pvc
    top: -138px;
    z-index: 200;

  .pvc-fade-enter-active
    transition: all .2s ease;
  .pvc-fade-leave-active
    transition: all .2s ease;
  .pvc-fade-enter, .pvc-fade-leave-to
    transform: translateY(5px);
    opacity: 0;

  @media screen and (max-width: 1438px)
    &:nth-child(n+10)
      display: none;
    .preview
      width: 235px;
    .item-link
      width: 235px;

</style>
