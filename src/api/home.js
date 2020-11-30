import axios from 'axios';

// 获取首页report轮播图数据
export const getRotation = () => {
    return axios.get('/api/rotation');
}

// 获取首页report官方推荐视频数据
export const getRecommend = () => {
    return axios.get('/api/recommend');
}

// 获取首页report视频推广位数据
export const getExtension = () => {
    return axios.get('/api/extension');
}

// 获取首页report广告位数据
export const getAd = () => {
    return axios.get('/api/ad');
}
