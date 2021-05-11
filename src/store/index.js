import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './action';

export default createStore({
    state,
    mutations,
    actions,

    // plugins: [
    //     createPersistedState(),
    // ],
});
