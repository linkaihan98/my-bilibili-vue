import axios from 'axios';

// 获取分区排行榜热门视频列表
export const getRank = (rid) => {
    return axios.get(`api/rank/${rid}`);
}