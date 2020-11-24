<template>
  <div class="bili-primary-menu b-wrap">
    <div class="primary-menu-container">
      <primary-menu-tab :menuConfig="menuConfig"></primary-menu-tab>
      <span class="menu-line-between"></span>
      <primary-menu-channel :menuConfig="menuConfig"></primary-menu-channel>
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
    menuConfig: {}
  }
}
</script>

<style lang="stylus">

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
    &.last
      margin: 0 24px 0 0px;

@media screen and (max-width: 1654px)
  .primary-menu-container
    .menu-line-between
      margin: 0 8px;
      &.none
        margin: 0 12px 0 0;

</style>