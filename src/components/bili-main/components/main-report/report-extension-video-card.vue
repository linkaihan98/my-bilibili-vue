<template>
  <div class="ex-video-card">
    <div class="card-pic">
      <a :href="item.url" target="_blank">
        <img :src="item.pic" width="206" height="116">
        <div class="count">
          <div class="left"></div>
          <div class="right">
            <span v-if="archive">{{ duration }}</span>
          </div>
        </div>
        <p class="ex-title">{{ item.title || item.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { formatDuration } from './../../../../utils';

export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data(){
    return {
      formatDuration,
      archive: this.item && this.item.archive || null
    }
  },
  computed: {
    duration() {
      return this.archive ? formatDuration(this.archive.duration) : ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.ex-video-card
  width: 206px;
  // height: 186px;
  cursor: pointer;
  .card-pic
    position: relative;
    width: 100%;
    height: 116px;
    a
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      //background-image: url('~g-public/images/icon/img_loading.png');
      background-repeat: no-repeat;
      background-position: center;
      &::before
        content: '';
        position: absolute;
        width: 100%;
        height: 48px;
        bottom: 0;
        left: 0;
        border-radius: 2px;
        //background-image: url(~g-public/images/linear.png);
        background-repeat: repeat-x;
      img 
        width: 100%;
        height: 100%;
        border-radius: 2px;
      .count
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 6px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        line-height: 16px;
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
          //background-image: url('~g-public/images/icon_gold.png');
        &.silver 
          //background-image: url('~g-public/images/icon_silver.png');
    .watch-later-video
      transition: opacity .3s;
      opacity: 0;
    &:hover
      .watch-later-video
        transition-delay: .2s;
        opacity: 1;
  .ex-title
    display: block;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0 8px 0;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    font-weight: 500;
    padding-right: 12px;
  .ex-up 
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999;
    line-height: 16px;
    margin-top: 60px;
    &:hover
      color: #00A1D6;
  .bilifont 
    margin-right: 4px;
    vertical-align: middle;
  .gg-icon 
    display: inline-block;
    font-size: 12px;
    border-radius: 2px;
    margin-right: 8px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border:1px solid #b2b2b2;
    color: #b2b2b2;

.ex-video-card
  @media screen and (max-width: 1870px)
    &:nth-child(n+6)
      display: none;
  @media screen and (max-width: 1654px)
    &:nth-child(n+5)
      display: none;
  @media screen and (max-width: 1438px)
    width: 170px;

</style>