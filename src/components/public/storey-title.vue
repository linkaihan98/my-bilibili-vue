<!-- 首页各楼层标题栏 -->
<template>
  <div class="storey-title">
    <div class="l-con">
      <svg class="icon svg-icon" aria-hidden="true" v-if="info.iconfont">
        <use :xlink:href="`#icon-${info.iconfont}`"></use>
      </svg>
      <img class="sprite" v-else-if="info.sprite" :src="info.sprite">
      <a :href="info.link" :class="{'no-link': !info.link}" target="_blank" class="name">{{info.title}}</a>
      
      <!-- 左侧tab栏插槽 -->
      <slot name="left"></slot>
    </div>
    
    <!-- 右侧button框插槽 -->
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.storey-title
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;
  .l-con
    display: inline-block;
    .svg-icon
      width: 36px;
      height: 36px;
      margin-right: 6px;
    .sprite
      width: 36px;
      height: 36px;
      margin-right: 6px;
  .name
    margin: 0 20px 0 0;
    vertical-align: bottom;
    font-size: 20px;
    line-height: 36px;
  .no-link
    color: #212121;
    cursor: default;
  .text-info 
    color: #505050;
    line-height: 36px;
    a 
      color: #505050;
      &:hover 
        color: #00a1d6;
      .bilifont
        margin-right: 3px;
        color: #f0361b;

</style>