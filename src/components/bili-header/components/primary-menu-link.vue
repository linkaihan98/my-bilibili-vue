<template>
  <div class="primary-menu-link">
    <div class="link-item"
          slot="reference"
          v-for="(item, index) in menuConfig.SideMenuConfig"
          :key="`link${index}`"
    >
      <a :href="item.url" target="_blank" class="link-item-a" >
        <svg class="item-icon" aria-hidden="true">
          <use :xlink:href="`#icon-${item.icon}`"></use>
        </svg>
        <span class="item-name">{{item.name}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuConfig: {},
  },
}
</script>

<style lang="stylus">
.primary-menu-link
  width: 289px;
  height: 68px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (max-width: 1870px)
    width: 242px;
  @media screen and (max-width: 1654px)
    width: 220px;
  .link-item
    height: 34px;
    display: flex;
    .link-item-a
      font-size: 14px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      .item-icon
        width: 1.6em;
        height: 1.6em;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
      .item-name
        margin-left: 4px;
  

</style>
