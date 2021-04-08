import { signin } from '@/api/signin';
import { getHistory } from '@/api/history.js';
import { rate } from '@/api/rate.js';

export default {
    login ({ commit }, id) {
        return new Promise((resolve, reject) => {
            signin(id).then((result) => {
                commit('get', { data: result, id })
                resolve()
            }).catch((err) => {
                console.log(err)
            });
        });
    },
    history ({ commit }) {
        getHistory().then((result) => {
            commit('getHistory', result)
        }).catch((err) => {
            console.log(err)
        });
    },
}