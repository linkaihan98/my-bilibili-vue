<template>
  <div class="watch-later">
    <div class="tip">
      <span>{{text}}</span>
    </div>
    <div class="later">
      <svg class="icon svg-icon" aria-hidden="true">
        <use xlink:href="#icon-shaohouzaikan"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return{
      text: '稍后再看'
    }
  }
}
</script>

<style lang="stylus" scoped>
.watch-later
  z-index: 999;
  position: absolute;
  bottom: 10px;
  right: 10px;
  .tip
    display: none;
    position: absolute;
    bottom: 25px;
    left: -15px;
    width: 60px;
    height: 25px;
    margin-bottom: 10px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    background: rgba(0,0,0,0.9);
    text-align: center;
  .later
    width: 30px;
    height: 30px;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    background-color: #000;
    background: rgba(0,0,0,.6);
    .svg-icon
      width: 100%;
      height: 100%;
  &:hover
    .tip
      display: block;

</style>