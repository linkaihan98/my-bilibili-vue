<template>
  <div class="space-between">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.space-between
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
</style>