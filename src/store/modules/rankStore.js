import { getRank } from './../../api/rank';
import { RANK_TYPE } from './../actionType';

const state = {
    rankList: []
}

const getters = {
    rankList: state => state.rankList
}

const actions = {
    async rankList({ state, commit, rootState }) {
        rootState.requesting = true;
        commit(RANK_TYPE.REQUEST);
        await getRank(menuPath).then((res) => {
            rootState.requesting = false;
            commit(RANK_TYPE.SUCCESS, res)
        }, (err) => {
            rootState.requesting = false;
            commit(RANK_TYPE.FAILURE)
        })
    }
}

const mutations = {
    [RANK_TYPE.REQUEST] (state) {
        
    },
    [RANK_TYPE.SUCCESS] (state) {
        state.rankList = rankList.data;
    },
    [RANK_TYPE.FAILURE] (state) {
        state.rankList = 'rank request failure'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}