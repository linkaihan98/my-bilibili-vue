<template>
  <div class="ex-video-card">
    <div class="card-pic">
      <a :href="item.url"  class="card-pic-link" target="_blank">
        <img :src="item.pic" class="item-pic">
        <div class="hover-detail">
          <span v-if="archive">{{ duration }}</span>
        </div>
      </a>
      <watch-later v-if="archive" class="watch-later-video"></watch-later>
    </div>
    <a :href="item.url" target="_blank" class="ex-title" :title="title">{{ title }}</a>
  </div>
</template>

<script>
import WatchLater from '../../../public/watch-later';
import { formatDuration } from './../../../../utils';

export default {
  components: {
    WatchLater
  },
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
      archive: this.item && this.item.archive || null,
      title: this.item && (this.item.title || this.item.name || '')
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
    .card-pic-link
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      .item-pic
        width: 100%;
        height: 100%;
        border-radius: 2px;
      .hover-detail
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 6px 8px;
        font-size: 12px;
        line-height: 16px;  
        color: #fff;
    .watch-later-video
      transition: opacity .3s;
      opacity: 0;
    &:hover
      .watch-later-video
        transition-delay: .2s;
        opacity: 0.9;
  .ex-title
    display: block;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0 8px 0;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    padding-right: 12px;

.ex-video-card
  @media screen and (max-width: 1870px)
    &:nth-child(n+6)
      display: none;
  @media screen and (max-width: 1654px)
    &:nth-child(n+5)
      display: none;
  @media screen and (max-width: 1438px)
    width: 170px;
    .card-pic
      height: 96px;

</style>