<template>
  <div class="bili-primary-menu b-wrap" :class="{ 'short-menu': !isMain}">
    <div class="primary-menu-container">
      <primary-menu-tab :menuConfig="menuConfig"></primary-menu-tab>
      <span class="menu-line-between"></span>
      <primary-menu-channel :menuConfig="menuConfig" :menuName="menuName"></primary-menu-channel>
      <span class="menu-line-between last"></span>
      <primary-menu-link :menuConfig="menuConfig"></primary-menu-link>
    </div>
  </div>
</template>

<script>
import primaryMenuTab from './primary-menu-tab';
import PrimaryMenuChannel from './primary-menu-channel';
import PrimaryMenuLink from './primary-menu-link';

export default {
  components: {
    primaryMenuTab,
    PrimaryMenuChannel,
    PrimaryMenuLink 
  },
  props: {
    menuConfig: {},
    menuName: String
  },
  computed: {
    isMain() {
      return this.menuName === 'main';
    }
  }
}
</script>

<style lang="stylus">
.bili-primary-menu
  .primary-menu-container
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-line-between
      display: inline-block;
      height: 46px;
      margin: 0 20px;
      border-left: 1px solid #E7E7E7;
      @media screen and (max-width: 1654px)
        margin: 0 8px;
      &.last
        margin: 0 24px 0 0px;
        @media screen and (max-width: 1654px)
          margin: 0 12px 0 0;

.short-menu
  width: 1160px!important;

</style>