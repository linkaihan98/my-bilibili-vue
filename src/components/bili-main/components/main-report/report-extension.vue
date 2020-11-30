<!-- 首页推广 --> 
<template>
  <div class="report-extension">
    <storey-title :info="{iconfont: 'guanggao', title: '推广'}"></storey-title>
    <div class="extension-box">
      <ex-video-card v-for="(item, index) in list" :key="`extension-${index}`" :item="item"></ex-video-card>
    </div>
  </div>
</template>

<script>
import StoreyTitle from './../../../public/storey-title';
import ExVideoCard from './report-extension-video-card';

export default {
  components: {
    StoreyTitle,
    ExVideoCard,
  },
  props: {
    extensionList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      MAX_COUNT: 6
    }
  },
  computed: {
    //取接口前六条数据
    list() {
      return this.extensionList.slice(0, this.MAX_COUNT) || [];
    },
  }
}
</script>

<style lang="stylus" scoped>

.report-extension
  width: 1286px;
  margin-right: 20px;
  .text-info-link
    margin-right: 10px;
  .extension-box 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

</style>