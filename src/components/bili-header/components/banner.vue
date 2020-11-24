<template>
    <div  class="bili-banner"
        :style="`background: #f9f9f9  url(${bannerList.pic}) center  no-repeat`">
        <div class="banner-shadow"></div>
        <div class="banner-logo b-wrap">
            <a href="/#/" class="banner-logo-a">
                <img :src="bannerList.litpic" alt="biliLogo">
            </a>
        </div>
    </div>
</template>

<script>
import { getBanner, getFrontpage } from './../../../api/header.js';

export default {
    props: {
        menuConfig: {},
    },
    data() {
        return {
            menuList: this.menuConfig.MenuConfig,
            bannerList: {}
        }
    },
    methods: {  
        getBannerData() {
            getBanner().then((response) => {
                const res = response.data;
                if (res && res.code === 0 && res.data) {                 
                    this.bannerList = res.data[0];
                }
            }, (error) => {
                throw error;
            })            
        }
    },
    computed: {
        categoryList: function() {
            const arr = [];
            this.menuList.forEach((item) => {
                arr.push(item.route);
            });
            return arr;
        },
    },
    created() {
        this.getBannerData();
    }
}
</script>

<style lang="stylus" scoped>

.bili-banner
    position: relative
    z-index: 0
    margin: 0 auto
    min-height: 155px
    min-width: 999px
    height: 9.375vw   
    display: flex
    justify-content: center
    //background: #f9f9f9  url('http://i0.hdslb.com/bfs/archive/9660bf249e0163b640ead47f1b5c9ca6acef2322.png') center  no-repeat
    .banner-shadow
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
    .banner-logo
        position: relative
        .banner-logo-a
            position: absolute
            bottom: 10px
            left: 0
            z-index: 1
            min-height: 60px
            width: 220px
            height: 50%
            img 
                height: 100%

</style>