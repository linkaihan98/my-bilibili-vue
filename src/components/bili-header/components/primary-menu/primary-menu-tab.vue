<template>
  <div class="primary-menu-tab">
    <ul class="menu-tab-ul">
      <li class="tab-li"
          v-for="(item, index) in menuConfig.TabMenuConfig"
          :key="`tab${index}`" 
      >
        <a :href="item.url" class="tab-li-link">
          <div class="tab-item" :class="item.backgroundColor">
            <svg class="icon bili-font" aria-hidden="true">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg> 
          </div>
          {{item.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // info: {},
      // channelInfo: {
      //   
      // },
    }
  },
  props: {
    menuConfig: {}
  }
}
</script>

<style lang="stylus" scoped>

.primary-menu-tab
  align-items: center;
  .menu-tab-ul
    display: flex;
    .tab-li
      width: 66px;
      height: 68px;
      border: 1px solid #fff;
      border-radius: 16px;
      box-sizing: border-box;
      text-align: center;
      font-size: 14px;
      white-space: nowrap;
      transition: all .3s;
      cursor: pointer;
      &:hover 
        .tab-li-link
          color: #00A1D6;
      &.on
        border-color: #9DD9ED;
        background: #F1FCFF;
        .tab-li-link
          color: #00A1D6;
      .tab-item
        position: relative;
        width: 36px;
        height: 36px;
        margin: 0 auto 4px auto;
        border-radius: 36px;
        line-height: 36px;
        background: #FF5C7C;
        display: flex;
        justify-content : center;
        align-items: center;
        &.bgc-yellow
          background: #fcba2a;
        &.bgc-pink
          background: #ff716d;
        &.bgc-green
          background: #6DC781;
      .bili-font 
        font-size: 24px;
        color: #fff;

@media screen and (max-width: 1654px)
  .tab-li
      width: 50px!important;

@media screen and (max-width: 1870px)
  .tab-li
      width: 58px;

</style>
