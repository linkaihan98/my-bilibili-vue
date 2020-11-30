<template>
  <div class="report-box">
    <space-between id="reportFirst1" class="report-wrap-module report-scroll-module">
      <report-rotation :rotationList="rotationList"></report-rotation>
      <report-recommend :recommendList="recommendList"></report-recommend>
    </space-between>
    <space-between id="reportFirst1" class="report-wrap-module report-scroll-module">
      <report-extension :extensionList="extensionList"></report-extension>
      <report-ad :adList="adList"></report-ad>
    </space-between>
  </div>
</template>

<script>
import spaceBetween from '../../../public/space-between';

import ReportRotation from './report-rotation';
import ReportRecommend from './report-recommend';
import ReportExtension from './report-extension';
import ReportAd from './report-ad';

import { getRotation, getRecommend, getExtension, getAd } from './../../../../api/home';

export default {
  components: {
    spaceBetween,
    ReportRotation,
    ReportRecommend,
    ReportExtension,
    ReportAd,
  },
  data() {
    return {
      rotationList: [],
      recommendList: [],
      extensionList: [],
      adList: [],
    }
  },
  mounted() {
    getRotation().then((response) => {
      const res = response.data;
      if( res && res.code === 0) {
        this.rotationList = res.data && res.data['3197'] || [];
      }
    }),
    getRecommend().then((response) => {
      const res = response.data;
      if( res && res.code === 0) {
        this.recommendList = res.data || [];
      }
    }),
    getExtension().then((response) => {
      const res = response.data;
      if( res && res.code === 0) {
        this.extensionList = res.data && res.data['34'] || [];
      }
    }),
    getAd().then((response) => {
      const res = response.data;
      if( res && res.code === 0) {
        this.adList = res.data && res.data['29'] || [];
      }
    })
  }
}
</script>

<style>

</style>