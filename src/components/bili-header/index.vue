<template>
  <div id="bili-header" class="bili-header">
    <top-nav :menuConfig="menuConfig" :showTopNavOnly="showTopNavOnly"></top-nav>
    <banner v-if="!showTopNavOnly" :menuConfig="menuConfig"></banner>
    <primary-menu v-if="!showTopNavOnly" :menuConfig="menuConfig" ></primary-menu>
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
  props: {
    
  },
  data() {
      return {
          //showTopNavOnly: false,
          tid: '',
          menuConfig: {
            MenuConfig: [],
            LiveMenuConfig: [],
            SideMenuConfig: [],
            ChannelMenuConfig: [],
          },
      }
  },
  computed: {

    // 控制banner和primary-menu两个组件是否渲染
    // 需要渲染的页面包括：首页，以‘/v/’开头的各个分区
    showTopNavOnly: function() {
      const pathReg = /^\/v\//;
      if (
        this.$route.path === '/main'|| 
        this.$route.path === '/anime'|| 
        pathReg.test(this.$route.path)
      ) {
        return false;
      } else {
        return true;
      }
    },
    
  },

  beforeMount() {
    this.tid = window.bid || window.tid || window.topid
    if(!this.tid) {
      const path = window.location.pathname
      const name = path.split('/')[2]
      const currentMenu = this.menuConfig.MenuConfig.filter(menu => {
        return menu.route === name && !menu.takeOvered
      })
      this.tid = currentMenu[0] && currentMenu[0].tid
    }

    // 登录后回调
    // window.onLoginInfoLoaded(info => {
    //   // eslint-disable-next-line no-console
    //   this.onLoginUpdate(info)
    // }, true)

    // 获取运营位数据
    //this.getLocsData()

    // 暴露手动修改tid方法 场景：手动切换导航高亮
    window.setTid = (id) =>{
      this.tid = id
    }

    //合并log-reporter.js
    //if(!window.reportObserver) {
    //  getScript('//s1.hdslb.com/bfs/seed/log/report/log-reporter.js')
    //}
  },

  created() {
    this.menuConfig = menuConfig
  }

}
</script>

<style lang="stylus">

.b-wrap 
  width: 1630px;
  margin: 0 auto;


@media screen and (max-width: 1870px)
  .b-wrap 
    width: 1414px;
    // .page-tab .con li 
    //   width: 58px;
    //   .channel-name 
    //     width: 58px !important;     
    // .friendship-link  
    //   width: 242px;  

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