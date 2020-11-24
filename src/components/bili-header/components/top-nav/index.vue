<template>
    <div class="top-nav" :class="{show_TopNav_only: showTopNavOnly}"> 
        <div class="top-nav-content">
            <nav-link :showTopNavOnly="showTopNavOnly"></nav-link>
            <nav-search></nav-search>
            <nav-user-center></nav-user-center>
        </div>
    </div>
</template>

<script>
import NavLink from './nav-link';
import NavSearch from './nav-search';
import NavUserCenter from './nav-user-center';

export default {
    name: 'TopNav',
    components: {
        NavLink,
        NavSearch,
        NavUserCenter
    },
    props: {
        showTopNavOnly: Boolean,
        menuConfig: {}
    }
}
</script>

<style lang='stylus' scoped>
    .top-nav
        position: absolute
        z-index: 1
        width: 100%
        height: 56px
        min-width: 800px
        .top-nav-content
            position: relative
            margin: 0 auto 
            padding: 10px 24px
            line-height: 30px
            display: flex
            justify-content: space-between
            align-content: flex-start
    .show_TopNav_only
        position: relative
        width: 100%
        height: 56px
        background: #fff
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08)
            
</style>