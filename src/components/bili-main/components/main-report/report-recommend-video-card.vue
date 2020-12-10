<template>
  <div class="rec-video-card">
    <div class="video-card-box">
      <a :href="`//www.bilibili.com/video/${item.bvid}`" target="_blank" class="card-link">
        <img :src="item.pic" :alt="item.title" class="video-card-img">
        <div class="video-card-item">
          <p class="title" :title="item.title">{{item.title}}</p>
          <p class="up">
            <svg class="icon bilifont" aria-hidden="true">
              <use xlink:href="#icon-UPzhu"></use>
            </svg>
            {{item.owner && item.owner.name}}
          </p>
          <p class="play">{{formatNum(item.stat && item.stat.view)}}</p>
        </div>
        <watch-later class="watch-later-video"></watch-later>
      </a>
    </div>
  </div>
</template>

<script>
import watchLater from '../../../public/watch-later';
import { formatNum } from './../../../../utils';

export default {
  components: {
    watchLater 
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      formatNum
    }
  }
}
</script>

<style lang="stylus" scoped>

.rec-video-card
  position: relative;
  width: 206px;
  height: 116px;
  .video-card-box
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    overflow: hidden;
    .card-link
      .video-card-img
        width: 100%;
        height: 100%;
        border-radius: 2px;
      .video-card-item
        position: absolute;
        z-index: 2;
        width: 100%;
        top: 64px;
        left: 0;
        transition: top .2s;
        padding: 26px 10px 10px 10px;
        @media screen and (max-width: 1438px)
          padding: 10px;
        .title
          font-size: 14px;
          line-height: 18px;
          height: 18px;
          color: #fff;
          margin-bottom: 6px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 500;
        .up,.play
          font-size: 12px;
          color: #e0e0e0;
          margin-bottom: 3px;
          .bilifont
            width: 16px;
            height: 22px;
            vertical-align: middle;
            margin-right: 3px;
    .watch-later-video
      transition: opacity .3s;
      opacity: 0;
    &::before
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      border-radius: 2px;
      opacity: 0;
      transition: opacity .2s;
  &::before 
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    border-radius: 0 0 2px 2px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=');
  &:hover
    .video-card-box 
      .watch-later-video
        transition-delay: .2s;
        opacity: 0.9;
      .video-card-item 
        top: 0;
        .title 
          height: 36px;
          white-space: normal;
      &::before 
        opacity: 1;

.rec-video-card
  @media screen and (max-width: 1870px) 
    &:nth-child(n+9) 
      display: none;
  @media screen and (max-width: 1654px)  
    &:nth-child(n+7)
      display: none;
  @media screen and (max-width: 1438px)
    width: 170px;
    height: 96px;

</style>