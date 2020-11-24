<template>
    <div class="nav-box">
        <ul class="nav-box-ul">
            <li class="nav-box-item">
                <a href="/#/" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link']">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bilibili-fill"></use>
                    </svg>                        
                    主站
                </a>
            </li>
            <li class="nav-box-item">
                <a href="/#/anime" target="_blank" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link']"> 
                    番剧
                </a>
            </li>
            <li class="nav-box-item">
                <span>
                    <a href="" target="_blank" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link']">
                        游戏中心
                    </a>
                </span>
            </li>
            <li class="nav-box-item">
                <span>
                    <a href="" target="_blank" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link']">
                        直播
                    </a>
                </span>
            </li>
            <li class="nav-box-item">
                <a href="/#/anime" target="_blank" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link']"> 
                    会员购
                </a>
            </li>
            <li class="nav-box-item">
                <span>
                    <a href="" target="_blank" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link']">
                        漫画
                    </a>
                </span>
            </li>
            <li class="nav-box-item">
                <a href="/#/anime" target="_blank" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link']"> 
                    赛事
                </a>
            </li>
            <li class="nav-box-item">
                <span>
                    <a href="" target="_blank" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link', 'loop-a']">
                        <div class="loop-box">
                            <p class="loop-box-txt txt-up">BML</p>
                            <img src="https://i0.hdslb.com/bfs/archive/bac4b84d0aaa92ca8b6c67215f883aa1189e2263.png" 
                                    alt="menuName"
                                    class="loop-box-img"
                            >
                            <p class="loop-box-txt txt-down">BML;</p>
                        </div>
                    </a>
                </span>
            </li>
            <li class="nav-box-item">
                <span>
                    <a href="" target="_blank" :class="[ showTopNavOnly ? 'link-black' : 'nav-box-link']">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-phone"></use>
                        </svg>   
                        下载APP
                    </a>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
        showTopNavOnly: Boolean,
        menuConfig: {}
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
.nav-box-ul 
    height: 36px;
    display: flex;
    align-items: center
    .nav-box-item
        margin-right: 12px
        .nav-box-link
            font-size: 14px
            color: #fff
            text-shadow: 0 1px 1px rgba(0,0,0,.3)
    .link-black
        font-size: 14px
        color: #212121
        .icon
            font-size: 18px
    .loop-a
        display: flex                    
        height 36px
        overflow: hidden              
        .loop-box
            position: relative 
            width: 54px                      
            height: 108px                  
            animation: loopslider 10s ease-out infinite
            .loop-box-txt
                position: absolute
                left: 0
                width: 100%;
                line-height: 36px;
                text-align: center;    
            .txt-up
                top: 0
            .txt-down
                top: 72px
            .loop-box-img
                position: absolute
                left: 0
                top: 36px
                width: 100%

@keyframes loopslider 
  0% 
    top: 0
  45% 
    top: 0
  50% 
    top: -36px
  95% 
    top: -36px                 
  100% 
    top: -72px

</style>