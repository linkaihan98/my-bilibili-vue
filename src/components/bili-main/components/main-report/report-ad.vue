<!-- 首页广告 --> 
<template>
  <div class="report-ad">
    <div class="online">
      <a href="//www.bilibili.com/video/online.html" target="_blank" class="online-link">{{title}}</a>
    </div>
    <a :href="adData.url" target="_blank" class="operate-card">
      <img :src="adData.pic" alt="adPic">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    adList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return{
      title: '在线列表'
    }
  },
  computed: {
    adData() {
      return this.adList && this.adList[0] || {};
    }
  }
}
</script>

<style lang="stylus" scoped>
.report-ad
  width: 320px;
  @media screen and (max-width: 1438px)
    width: 265px;
  .online
    width: 100%;
    height: 30px;
    margin: 3px 0 19px;
    border: 1px solid #E7E7E7;
    border-radius: 2px;
    line-height: 30px;
    font-size: 12px;
    color: #505050;
    background: #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .online-link
      flex: 1;
      text-align: center;
  .operate-card
    position: relative;
    display: block;
    width: 320px;
    height: 186px;
    @media screen and (max-width: 1438px)
      width: 265px;
      height: 152px;
    img
      width: 100%;
      height: 100%;
      border-radius: 2px;


</style>