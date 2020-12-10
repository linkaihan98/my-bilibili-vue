<template>
  <div class="popover-video-card">
    <div class="content">
      <el-image
        :src="info.pic"
        width="112"
        height="63">
      </el-image>
      <div class="info">
        <p class="f-title">{{info.title}}</p>
        <p class="subtitle">
          <span class="name">{{info.owner && info.owner.name}}</span>
          <span class="point">·</span>
          <span class="time">{{time}}</span>
        </p>
      </div>
    </div>
    <div class="count">
      <ul class="count-ul">
        <li class="count-li">
          <svg class="icon bilifont" aria-hidden="true">
            <use xlink:href="#icon-bofangshu"></use>
          </svg>
          <span>{{formatNum(info.stat.view)}}</span>
        </li>
        <li class="count-li">
          <svg class="icon bilifont" aria-hidden="true">
            <use xlink:href="#icon-danmushu"></use>
          </svg>
          <span>{{formatNum(info.stat.reply)}}</span>
        </li>
        <li class="count-li">
          <svg class="icon bilifont" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>{{formatNum(info.stat.favorite)}}</span>
        </li>
        <li class="count-li">
          <svg class="icon bilifont" aria-hidden="true">
            <use xlink:href="#icon-Bbi"></use>
          </svg>
          <span>{{formatNum(info.stat.coin)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatNum } from './../../utils/index'

export default {
  props: {
    info: {
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
  },
  computed: {
    // 时间戳转YY-MM-DD
    time() {
      const timestamp = parseInt(this.info && this.info.pubdate) * 1000 || '';
      const t = new Date(timestamp);
      const YY = t.getFullYear();
      const MM = (t.getMonth() + 1) < 10 ? `0${t.getMonth()+1}` : t.getMonth()+1;
      const DD = t.getDate() < 10 ? `0${t.getDate()}` : t.getDate();
      return `${YY}-${MM}-${DD}`;
    }
  },
}
</script>

<style lang="stylus" scoped>
.popover-video-card
  position: absolute;
  padding: 12px;
  width: 320px;
  background: #FFFFFF;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.20);
  border-radius: 2px;
  border-radius: 2px;
  .content
    display: flex;
    img
      width: 112px;
      height: 63px;
      border-radius: 2px;
    .info
      padding-left: 10px;
      .f-title 
        max-height: 40px;
        color: #212121;
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word !important;
        word-break: break-all;     
      .subtitle
        display: flex;
        color: #999;
        font-size: 12px;
        line-height: 16px;
        span 
          display: inline-block;
        .point 
          margin: 0 5px;     
        .name 
          max-width: 86px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;        
        .time 
          max-width: 72px;
          white-space: nowrap;
          overflow: hidden;      
  .count
    padding-top: 12px;
    margin-top: 12px;
    border-top: 1px solid #e7e7e7;
    .count-ul
      display: flex;
      justify-content: space-between;
      .count-li
        font-size: 12px;
        color: #999;
        display: flex;
        align-items: center;
        .bilifont
          width: 1.35em;
          height: 1.25em;
          margin-right: 3px;


</style>
