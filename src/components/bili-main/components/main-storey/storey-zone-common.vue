<template>
  <SpaceBetween>
    <video-list :info="info"></video-list>

     <rank-list :info="info"></rank-list>

    <!-- pgc rank -->
    <!-- <PgcRank v-if="info.type === 'teleplay' || info.type === 'movie' || info.type === 'documentary'" 
      :info="info"
      :type="seasonTypeMap[info.type]"
      :count="10" /> -->

    <!-- other rank -->
    <!-- <Rank v-else :info="info" /> -->

  </SpaceBetween>
</template>

<script>
import SpaceBetween from './../../../public/space-between'
import VideoList from './../../../public/video-list'
import RankList from '../../../public/rank-list'

//import Rank from 'g-public/components/international/Rank'
//import PgcRank from 'g-public/components/international/PgcRank'

export default {
  components: {
    SpaceBetween,
    VideoList,
    RankList,
    //Rank,
    //PgcRank
  },
  data() {
    return {
      seasonTypeMap: {
        movie: 2,
        documentary: 3,
        teleplay: 5,
      }
    }
  },
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
