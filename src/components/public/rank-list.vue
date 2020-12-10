<template>
  <div class="rank-list" v-van-lazyload="getRankData">
    <rank-title :link="rankLink" :info="info"></rank-title>
    <rank-item v-for="(item, index) in list" :key="`rankitem-${index}`" :index="index"></rank-item>
  </div>
</template>

<script>
import RankTitle from './rank-title'
import RankItem from './rank-item'

export default {
  components: {
    RankTitle,
    RankItem
  },
  props: {

  }
}
</script>

<style>

</style>