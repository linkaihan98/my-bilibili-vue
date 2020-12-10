<template>
  <div class="video-card">
    <div class="video-card-pic" :class="isArchive && 'video-card-pic-hover'">
      <a :href="outlink" target="_blank" class="card-link">
        <el-image :src="info.pic" alt="video-card" lazy class="card-img"></el-image>
        <div class="count">
          <div class="left">
            <span>
              <svg class="icon bilifont" aria-hidden="true">
                <use xlink:href="#icon-bofangshu"></use>
              </svg>
              {{ view }}
            </span>
            <span>
              <svg class="icon bilifont" aria-hidden="true">
                <use xlink:href="#icon-good"></use>
              </svg>
              {{ like }}
            </span>
          </div>
          <div v-if="isArchive" class="right">
            <span>{{ duration }}</span>
          </div>
        </div>
        <i v-if="isArchive" class="crown" :class="crown"></i>
      </a>
      <watch-later class="watch-later-video"></watch-later>
    </div>
    <a :href="outlink" target="_blank" class="title-link" :title="info.title">
      <span v-if="!isArchive" class="title">{{ typeTitle }}</span>
      {{ info.title }}
    </a>
    <a :href="`//space.bilibili.com/${info.owner && info.owner.mid}/`" target="_blank" class="up" v-if="showUp">
      <svg class="icon bilifont" aria-hidden="true">
        <use xlink:href="#icon-UPzhu"></use>
      </svg>
      {{ info.owner && info.owner.name }}
    </a>
  </div>
</template>

<script>
import { formatNum, formatDuration } from './../../utils/index';
import WatchLater from './watch-later';


export default {
  components: {
    WatchLater,
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showUp: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isArchive () {
      return (this.type !== 'article' && this.type !== 'dynamic')
    },
    crown() {
      const num = this.info.stat && this.info.stat.coin || 0
      if (num >= 2000 && num < 10000) {
        return 'silver';
      } else if (num >= 10000) {
        return 'gold';
      } else {
        return '';
      }
    },
    view() {
      return formatNum(this.info.stat && this.info.stat.view);
    },
    like() {
      return formatNum(this.info.stat && this.info.stat.like);
    },
    duration() {
      return formatDuration(this.info.duration);
    },
    outlink () {
      if (this.type === 'article') {
        return '/#/read/cv' + this.info.id;
      } else if (this.type === 'dynamic') {
        return '/#/' + this.info.id;
      }
      return `/#/video/${this.info.bvid}`;
    }
  }
}
</script>

<style lang="stylus" scoped>
.video-card
  width: 206px;
  // height: 186px;
  cursor: pointer;
  .video-card-pic
    position: relative;
    width: 100%;
    height: 116px;
    .card-link
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      //background-image: url('~g-public/images/icon/img_loading.png');
      background-repeat: no-repeat;
      background-position: center;
      &::before
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 48px;
        border-radius: 2px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=');
        background-repeat: repeat-x;
        content: '';
      .card-img
        width: 100%;
        height: 100%;
        border-radius: 2px;
      .count
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 6px 8px;
        line-height: 16px;
        font-size: 12px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // text-shadow: 0 1px 1px rgba(0,0,0,0.24);
        .left
          display: flex;
          align-items: center;
          span
            vertical-align: middle;
            display: flex;
            align-items: center;
            &:first-child
              margin-right: 10px;
      .crown
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 24px;
        background-size: contain;
        &.gold
          background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/icon_gold.png);
        &.silver
          background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/icon_silver.png);
    .watch-later-video
      transition: opacity .3s;
      opacity: 0;
    &:hover
      .watch-later-video
        transition-delay: .2s;
        opacity: 1;

  .title-link
    display: block;
    height: 40px;
    margin: 10px 0 8px 0;
    padding-right: 12px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    .title
      display: inline-block;
      width: 32px;
      border-radius: 2px;
      line-height: 16px;
      font-size: 12px;
      text-align: center;
      color: #fff;
      background: #fb7299;
  .up
    line-height: 16px;
    font-size: 12px;
    color: #999;
    display: flex;
    &:hover
      color: #00A1D6;
  .bilifont
    margin-right: 4px;
    vertical-align: middle;


@media screen and (max-width: 1870px)
  .video-card:nth-child(n+11)
    display: none;

@media screen and (max-width: 1654px)
  .video-card:nth-child(n+9)
    display: none;

@media screen and (max-width: 1438px)
  .video-card
    width: 170px;
    .video-card-pic
      height: 96px;
      .right
        display: none;

</style>