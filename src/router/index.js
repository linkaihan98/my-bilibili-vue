import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import home from './../views/home';
import biliMain from './../components/bili-main';
import menu from './../views/menu';
import popular from './../views/popular';
import register from './../views/register';
import login from './../views/login';
import channel from './../views/channel';
import read from './../views/read';
import blackboard from './../views/blackboard';
import video from './../views/video';
import space from './../views/space';

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            redirect: '/main',
            children: [
                {
                    path: '/main',
                    name: 'main',
                    component: biliMain
                }, {
                    path: '/v/popular',
                    name: 'popular',
                    component: popular
                }, {
                    path: '/v/:menuId',
                    name: 'menu',
                    component: menu
                }, {
                    path: '/register',
                    name: 'register',
                    component: register
                }, {
                    path: '/login',
                    name: 'login',
                    component: login
                }
            ]
        }, {
            path: '/channel',
            name: 'channel',
            component: channel
        }, {
            path: '/read',
            name: 'read',
            component: read
        }, {
            path: '/blackboard',
            name: 'blackboard',
            component: blackboard
        }, {
            path: '/video',
            name: 'video',
            component: video
        }, {
            path: '/space',
            name: 'space',
            component: space
        }
    ]
})
