<template>
    <div class="bilibili-main b-wrap">
        <main-report></main-report>
        <main-storey :storeyConfig="storeyConfig"></main-storey>
    </div>
</template>

<script>
import mainReport from './components/main-report';
import mainStorey from './components/main-storey';

import { storeyConfig } from './../../../static/js/config/storeyConfig';

export default {
    components: {
        mainReport,
        mainStorey
    },
    data() {
        return {
            storeyConfig
        }
    }
}
</script>

<style>

</style>