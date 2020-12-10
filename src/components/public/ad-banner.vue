<!-- 首页横幅广告 --> 
<template>
  <div class="ad-banner">
    <a :href="list.url" target="_blank" class="ad-banner-link">
      <img :src="list.pic" alt="adbanner" class="ad-banner-img">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    adBannerList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    list(){
      return this.adBannerList.length ? this.adBannerList[0] : {};
    }
  }
}
</script>

<style lang="stylus" scoped>

.report-banner
  .report-banner-link
    position: relative;
    display: block;
    max-height: 134px;
    margin-bottom: 46px;
    .report-banner-img
      width: 100%;
  
</style>