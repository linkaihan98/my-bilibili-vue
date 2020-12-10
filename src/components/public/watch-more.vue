<template>
  <div class="watch-more">
    <a :href="`/#${link}`" target="_blank">
      <span>更多</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-you"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: () => {
        return '/'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.watch-more
  display: flex;
  align-items: center;
  width: 58px;
  height: 22px;
  padding: 0 0 0 12px;
  border: 1px solid silver;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  border-radius: 2px;
  color: #505050;
  transition: all .2s;
  &:hover
    background-color: rgba(192,192,192,0.3)
    a
      color: #505050!important;


</style>