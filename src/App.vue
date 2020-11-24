<template>
  <div id="app">
    <bili-header></bili-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BiliHeader from './components/bili-header';

export default {
  name: 'App',
  components: {
    BiliHeader
  }
}
</script>

<style lang="stylus">
@import "./style/base"
</style>
