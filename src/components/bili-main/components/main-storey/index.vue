<template>
  <div class="storey-box b-wrap">
    <div class="proxy-box">
      <storey-proxy v-for="(item, index) in zoneList" :key="`zone-${item.type}-${index}`" :item="item"></storey-proxy>
    </div>
  </div>
</template>

<script>
import StoreyProxy from './storey-proxy';

export default {
  components: {
    StoreyProxy
  },
  props: {
    storeyConfig: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      zoneList: this.storeyConfig || []
    }
  }
}
</script>

<style>

</style>