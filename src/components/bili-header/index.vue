<template>
  <div id="bili-header" class="bili-header">
    <top-nav :menuConfig="menuConfig" :showTopNavOnly="showTopNavOnly"></top-nav>
    <banner v-if="!showTopNavOnly" :menuConfig="menuConfig" :menuName="menuName"></banner>
    <primary-menu v-if="!showTopNavOnly && showMenu" :menuConfig="menuConfig" :menuName="menuName"></primary-menu>
  </div>
</template>

<script>
import TopNav from './components/top-nav';
import Banner from './components/banner';
import PrimaryMenu from './components/primary-menu';

import * as menuConfig from './../../../static/js/config/menuConfig'

export default { 
  name: 'bili-header',
  components: {
    TopNav,
    Banner,
    PrimaryMenu
  },
  data() {
      return {
          //showTopNavOnly: false,
          menuConfig: {
            MenuConfig: [],
            LiveMenuConfig: [],
            SideMenuConfig: [],
            ChannelMenuConfig: [],
          },
      }
  },
  computed: {
    // 缓存以‘/v/’开头的各个分区名以及首页main
    //应用场景： 1.控制header渲染；2.更新banner；3.手动切换菜单栏时对应的item高亮
    menuName: function() {
      const name = this.$route.path.split('/')[2];
      const currentMenu = this.menuConfig.MenuConfig.filter(menu => {
        return menu.route === name || name === 'cinema';
      })
      if (currentMenu[0]) {
        return name === 'cinema' ? 'cinema' : currentMenu[0].route;
      } else if (this.$route.path === '/main' || this.$route.path === '/v/popular') {
        return 'main';
      } else {
        return null;
      }
    },
    // 热门页面/v/popular保持banner渲染，移除primary-menu
    showMenu: function() {
      return this.$route.path !== '/v/popular';
    },
    // 控制banner和primary-menu两个组件是否渲染
    // 需要渲染的页面包括：首页，以‘/v/’开头的各个分区
    showTopNavOnly: function() {
      if (this.menuName) {
        return false;
      } else {
        return true;
      }
    },
  },
  created() {
    this.menuConfig = menuConfig
  },
  mounted() {
     
  },
}
</script>

<style lang="stylus">

.b-wrap 
  width: 1630px;
  margin: 0 auto;

@media screen and (max-width: 1870px)
  .b-wrap 
    width: 1414px;
    .primary-menu-tab 
      .tab-li 
        width: 58px;
    .primary-menu-link
      width: 242px;  

@media screen and (max-width: 1654px)
  .b-wrap 
    width: 1198px;
    .page-tab .con li
      width: 50px !important;
      .channel-name
        width: 50px !important;
    .tab-line-itnl 
      margin: 0 8px;
      &.none
        margin: 0 12px 0 0;
    .friendship-link 
      width: 220px;

@media screen and (max-width: 1438px)
  .b-wrap 
    width: 999px;
    .channel-menu-itnl 
      .item 
        &.hide 
          display: none;
    .page-tab .con li 
      width: 50px;
      .channel-name 
        width: 50px !important;
    .tab-line-itnl 
      margin: 0 8px;

</style>