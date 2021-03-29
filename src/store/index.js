import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    state,
    mutations,
    getters: {},
    actions: {},
    modules: {},
    plugins: [
        createPersistedState(),
    ],
});