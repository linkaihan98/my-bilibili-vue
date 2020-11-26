<template>
    <div  class="bili-banner"
        :style="`background-image: url(${bannerList.pic})`">
        <div class="banner-shadow"></div>
        <div class="banner-logo b-wrap">
            <a :href="bannerList.url || '/#/'" class="banner-logo-link">
                <img :src="bannerList.logo" alt="biliLogo">
            </a>
            <!-- banner有宣传活动，展示该宣传的链接标题-->
            <a v-if="bannerList.title" 
                target="_blank" 
                class="banner-title-link" 
                :href="bannerList.url"
            >{{bannerList.title}}</a>
        </div>
        <!-- banner有宣传活动，点击banner进行跳转-->
        <a v-if="bannerList.title"
            target="_blank"
            class="banner-link"
            :href="bannerList.url"
        ></a>
    </div>
</template>

<script>
import { getBanner } from './../../../api/header.js';

export default {
    props: {
        menuConfig: {},
        menuName: String
    },
    data() {
        return {
            menuList: this.menuConfig.MenuConfig,
            bannerList: {
                pic: '',
                logo: '',
                title: '',
                url: ''
            }
        }
    },
    methods: {  
        getBannerData(menuName) {
            // getBanner()为首页banner与分区banner两个不同接口合并的api
            // 通过三元表达式进行数据格式化
            const isMain = menuName === 'main';
            getBanner(menuName).then((response) => {
                const res = response.data;
                if (res && res.code === 0 && res.data) {     
                    const resList = isMain ? res.data[0] : res.data;
                    this.bannerList.pic = isMain ? resList.pic : resList.litpic;
                    this.bannerList.logo = isMain ? resList.litpic : resList.logo;
                    this.bannerList.title = isMain ? (resList.name || '') : (resList.title || '');
                    this.bannerList.url = isMain ? (resList.url || '') : (resList.jump_url || '');
                }
            }, (error) => {
                throw error;
            })            
        }
    },
    watch: {
        menuName: function(newVal) {
            this.getBannerData(newVal)
        }
    },
    created() {
        this.getBannerData(this.menuName);
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
    background-color: #f9f9f9 
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: cover;
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
        .banner-logo-link
            position: absolute
            bottom: 10px
            left: 0
            z-index: 1
            min-height: 60px
            width: 220px
            height: 50%
            img 
                height: 100%
        .banner-title-link
            position: absolute;
            bottom: 25px;
            left: 280px;
            max-width: 350px;
            padding: 6px 10px;
            border-radius: 4px;
            font-size: 14px;
            line-height: 20px;
            color: #fff;
            background-color: rgba(0,0,0,.68);
            opacity: 0;
            transition: opacity .3s;
    .banner-link
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        height: 100%;
        width: 100%;
    &:hover
        .banner-title-link
            opacity: 1;

</style>