import axios from 'axios';

// 获取首页及各分区的banner数据
export const getBanner = (menuPath) => {
    return axios.get(`/api/banner/${menuPath}`);
}

// 获取primary-menu各菜单更新数字
export const getRegionCount = () => {
    return axios.get('/api/count');
}
