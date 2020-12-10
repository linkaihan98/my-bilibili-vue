<template>
  <div class="video-list">
    <storey-title :info="{iconfont: info.icon || null, title: info.name || '', link: info.morelink || ''}" class="title">
      <template v-slot:right>
        <watch-more :link="info.morelink || ''" class="more"></watch-more>
      </template>
    </storey-title>
    <div class="zone-list-box">
      <video-card v-for="(item, index) in list" :key="`vc-${index}`" :info="item" :showUp="showUp"></video-card>
    </div>
  </div>
</template>

<script>
import StoreyTitle from './storey-title';
import WatchMore from './watch-more';
import VideoCard from './video-card';
import { getDynamic } from '../../api/home';

export default {
  components: {
    StoreyTitle,
    WatchMore,
    VideoCard,
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
  data() {
    return {
      rid: this.info.rid,
      list: [],
      state: false
    }
  },
  methods: {
    async getData() {
      const res = await getDynamic(this.rid);
      if(res && res.data) {
        const resList = res.data;
        if(resList && resList.code ===0 && resList.data) {
          this.list = resList.data.archives || [];
        }
      }
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped> 
.video-list
  .title
    position: relative;
    .more
      position: absolute;
      right: 0px;
  .zone-list-box
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    width: 1286px;
    height: 404px;
    @media screen and (max-width: 1870px)
      width: 1070px;
    @media screen and (max-width: 1654px)
      width: 854px!important;
    @media screen and (max-width: 1438px)
      width: 710px!important;
      height: 360px;

</style>