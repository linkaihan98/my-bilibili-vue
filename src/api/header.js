import axios from 'axios';

export const getBanner = () => {
    return axios.get('/api/banner')  
}

export const getFrontpage = (resid) => {
    return axios.get(`/api/frontpage/${resid}`)
}