import { getBanner } from './../../api/header';
import { BANNER_TYPE } from './../actionType';

const state = {
    bannerList: []
}

const getters = {
    bannerList: state => state.bannerList
}

const actions = {
    async bannerList({ state, commit, rootState }) {
        rootState.requesting = true;
        commit(BANNER_TYPE.REQUEST);
        await getBanner(menuPath).then((res) => {
            rootState.requesting = false;
            commit(BANNER_TYPE.SUCCESS, res)
        }, (err) => {
            rootState.requesting = false;
            commit(BANNER_TYPE.FAILURE)
        })
    }
}

const mutations = {
    [BANNER_TYPE.REQUEST] (state) {
        
    },
    [BANNER_TYPE.SUCCESS] (state) {
        state.bannerList = bannerList.data;
    },
    [BANNER_TYPE.FAILURE] (state) {
        state.bannerList = 'banner request failure'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}