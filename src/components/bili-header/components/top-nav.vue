<template>
    <div class="top-nav" :class="{show_TopNav_only: showTopNavOnly}"> 
        <div class="top-nav-content">
            <top-nav-link :showTopNavOnly="showTopNavOnly"></top-nav-link>
            <top-nav-search></top-nav-search>
            <top-nav-user-center></top-nav-user-center>
        </div>
    </div>
</template>

<script>
import TopNavLink from './top-nav-link';
import TopNavSearch from './top-nav-search';
import TopNavUserCenter from './top-nav-user-center';

export default {
    name: 'TopNav',
    components: {
        TopNavLink,
        TopNavSearch,
        TopNavUserCenter
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