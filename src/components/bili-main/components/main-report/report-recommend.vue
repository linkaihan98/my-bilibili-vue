<!-- 首页推荐视频 --> 
<template>
  <div class="report-recommend">
    <rec-video-card v-for="(item, index) in recList" :key="`recommend-${index}`" :item="item"></rec-video-card>
    <div class="btn prev" @click="prev">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuo"></use>
      </svg>
    </div>
    <div class="btn next" @click="next">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import RecVideoCard from './report-recommend-video-card';

export default {
  components: {
    RecVideoCard,
  },
  props: {
    recommendList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      page: 0,
      count: 10
    }
  },
  computed: {
    // 每页取10条视频数据 （页面缩放时，只通过css样式控制显示的个数，减少运算量）
    recList() {
      return this.recommendList.slice(this.page * this.count, this.page * this.count + this.count) || []
    }
  },
  methods: {
    prev() {
      this.page--
      if(this.page < 0) {
        this.page = 2
      }
    },
    next() {
      this.page++
      if(this.page > 2) {
        this.page = 0
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.report-recommend
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  width: 1070px;
  height: 242px;
  @media screen and (max-width: 1870px)
    width: 854px;
  @media screen and (max-width: 1654px)
    width: 638px;
  @media screen and (max-width: 1438px)
    width: 530px;
    height: 202px;
  .video-card-reco 
    margin-bottom: 10px;
  &:hover
    .btn
      opacity: 1;
  .btn 
    opacity: 0;
    position: absolute;
    z-index: 3;
    top: 50%;
    margin-top: -35px;
    width: 32px;
    height: 70px;
    background: rgba(0,0,0,.6);
    color: #fff;
    text-align: center;
    line-height: 70px;
    transition: opacity .2s;
    cursor: pointer;
    .bilifont 
      font-size: 30px;
    &.prev 
      border-radius: 0 2px 2px 0;
      left: 0;
    &.next
      border-radius: 2px 0 0 2px;
      right: 0;

</style>