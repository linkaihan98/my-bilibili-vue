import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import rankStore from './modules/rankStore';


const state = {
    requesting: false,
    error: {}
}

const getters = {
	requesting: state => state.requesting,
	error: state => state.error
}

export default new Vuex.Store({
    state,
    getters,
    modules: {
        rankStore
    }
})