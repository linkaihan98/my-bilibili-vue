<template>
  <div class="rank-list">
    <rank-title :info="info"></rank-title>
    <rank-item v-for="(item, index) in list" :key="`rankitem-${index}`" :info="item" :index="index"></rank-item>
  </div>
</template>

<script>
import { getRank } from './../../api/rank'

import RankTitle from './rank-title'
import RankItem from './rank-item'

export default {
  components: {
    RankTitle,
    RankItem
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    async getRankList() {
      const res = await getRank(this.info.rid);
      const resList = res && res.data;
      if(resList && resList.code === 0) {
        const rankList = resList.data && resList.data.list;
        this.list = rankList.slice(0, 10)
      }
    }
  },
  mounted() {
    this.getRankList();
  }
}
</script>

<style lang="stylus" scoped>
.rank-list
  width: 320px;
  @media screen and (max-width: 1438px)
    width: 265px!important;
  

</style>