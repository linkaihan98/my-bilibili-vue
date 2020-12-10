import axios from 'axios';

// 获取首页report轮播图数据
export const getRotation = () => {
    return axios.get('/api/report/rotation');
}

// 获取首页report官方推荐视频数据
export const getRecommend = () => {
    return axios.get('/api/report/recommend');
}

// 获取首页report视频推广位数据
export const getExtension = () => {
    return axios.get('/api/report/extension');
}

// 获取首页report广告位数据
export const getAd = () => {
    return axios.get('/api/report/ad');
}

// 获取首页report横幅广告位数据
export const getAdBanner = () => {
    return axios.get('/api/adbanner');
}



// 获取首页各分区楼层videoList
export const getDynamic = (rid) => {
    return axios.get(`/api/dynamic/${rid}`);
}