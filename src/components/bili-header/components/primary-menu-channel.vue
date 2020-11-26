<template>
  <div class="primary-menu-channel">
    <div 
      class="channel-item" 
      v-for="(item, index) in sortedMenu" 
      :key="`channel${index}`" 
    >
      <a :href="channelLink(item)" class="item-link" :class="{'on' : setCurrentState(item)}">
        <span>{{item.name}}<em v-show="!item.hideCount" class="item-count">{{getCount(item.count)}}</em></span>
        <svg v-if="item.name === '更多'" class="icon icon-more" aria-hidden="true">
            <use xlink:href="#icon-xia"></use>
        </svg>
        <!-- <a class="name" :href="subChannelLink(item, subItem)" v-for="(subItem, subIndex) in item.sub" :key="`subchannel-${subIndex}`">{{`${subItem.name} - `}}</a> -->
      </a>
    </div>
  </div>
</template>

<script>
import { getRegionCount } from './../../../../src/api/header'

export default {
  props: {
    menuConfig: {},
    menuName: String
  },
  data() {
    return {
      menuList: this.menuConfig.MenuConfig,
      //isWide: true,
      regionCount: {},
    }
  },
  computed: {
    sortedMenu() {
      // wide [动画，音乐，舞蹈，科技，生活，时尚，娱乐，放映厅，动物圈，单机游戏]
      // wide [番剧，国创，游戏，数码，鬼畜，广告，影视，搞笑，美食圈，VLOG]

      // small [动画，音乐，舞蹈，科技，生活，时尚，娱乐，放映厅]
      // small [番剧，国创，游戏，数码，鬼畜，广告，影视, 更多]

      // [isForceNarrow] 兼容逻辑 如果有这个标示 菜单导航保持窄屏模式
      const isForceNarrow = (typeof window !== 'undefined') ? window.isForceNarrow : false;
      const extraList = this.isWide && !isForceNarrow ? 
        this.menuConfig.ChannelMenuConfig : 
        [{
          name: '更多',
          subMenuSize: 162,
          hideCount: true,
          sub: this.menuConfig.ChannelMenuConfig,
        }];
      return [ ...this.navList, ...extraList].map(item => {
        if (item.name === '放映厅') {
          return {
            ...item,
            count: (this.regionCount[23] || 0) + (this.regionCount[11] || 0) + (this.regionCount[177] || 0)
          }
        } else {
          return {
            ...item,
            count: this.regionCount[item.tid],
          }
        }
      })
    },
    navList() {
      const sortedArr = this.menuList;
      const newArr = sortedArr.filter(item=>item.tid && ![177, 23, 11].includes(item.tid));

      const sub = sortedArr.filter(item=>[177, 23, 11].includes(item.tid)).map(item=>{return { ...item, combination: true }});
      const cinema = {
        name: '放映厅',
        tid: 23,
        route: 'cinema',
        count: '',
        subMenuSize: 68,
        combination: true,
        sub,
      }
      return newArr.concat([cinema]).filter(item => !item.isHide);
    },
    isWide() {
      return this.$route.path === '/main' && (document.body.clientWidth || window.screen.width || window.innerWidth) > 1438;
    }
  },
  methods: {
    channelLink(nav){
      //const tid = nav.tid;
      if(nav.name === '更多') {
        return 'javascript:;';
      }
      return `/#/v/${nav.route}`;
    },
    // subChannelLink(nav,sub){
    //   return sub.combination || !sub.tid ? sub.url : `/#/v/${nav.route}/${sub.route}/`
    // },
    async updateCount() {
      const { data } = await getRegionCount();
      if(data.code === 0 && data.data) {
        this.regionCount = data.data.region_count;
      }
    },
    getCount(num) {
      return (num > 999 ? '999+' : num) || '--';
    },
    // onSize() {
    //   this.isWide = this.$route.path === '/main' && (document.body.clientWidth || window.screen.width || window.innerWidth) > 1438;
    // },
    //手动切换菜单栏时对应的item高亮
    setCurrentState(item) {
      let route = item.route;
      // 纪录片、电影、电视剧聚合到放映厅
      if(route === 'movie' || route === 'tv'){
        route = 'cinema';
      }
      return this.menuName === route;
    }
  },
  mounted() {
    this.updateCount();
    //this.onSize();
    //window.addEventListener('resize', ()=>this.onSize());
  },
}

</script>

<style lang="stylus" scoped>

.primary-menu-channel 
  height: 68px;
  //height: 5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  .channel-item
    display: flex;
    height: 34px;
    cursor: pointer;
    .item-link
      font-size: 14px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      .item-count
        display: inline-block;
        width: 32px;
        margin-left: 1px;
        border-radius: 2px;
        font-style: normal;
        font-size: 12px;
        text-align: center;
        color: #fff;
        background: #73C9E5;
        transform: scale(.85);
      &.on
        color: #00a1d6;
    &.hide
       width: 35px;
    .icon-more
      margin-left: 5px;
      transition: all .3s;
    &.selected
      .name
        color: #00a1d6;
      .icon-more
        transform: rotate(180deg);

</style>
