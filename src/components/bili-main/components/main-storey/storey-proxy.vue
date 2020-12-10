<!-- 代理各分区楼层 -->
<template>
  <div :id="`bili_${item.type}`">
    <component :is="item.component" :info="item" :id="`bili_report_${item.type}`" class="report-wrap-module report-scroll-module"></component>
  </div>
</template>

<script>
// 普通分区
import Zone from './storey-zone-common'
// // 直播
// import Live from './live'
// // 番剧
// import Anime from './pgc/Anime'
// // 国创
// import Guochuang from './pgc/Guochuang'
// // 课堂
// import Cheese from './pgc/Cheese'
// // 漫画
// import Manga from './manga'
// // 专栏
// import Article from './article'

// // 通栏广告
// import AdBanner from '../ad/Banner'

// // 资讯分区
// import ZoneInformation from './ZoneInformation'

// import { mapState } from 'vuex'

export default {
  components: {
    Zone,
    // Live,
    // Anime,
    // Guochuang,
    // Manga,
    // Article,
    // AdBanner,
    // ZoneInformation,
    // Cheese
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
   //dymanic
  }
}
</script>

<style lang="stylus" scoped>

</style>