import { signin } from '@/api/signin';
import { history } from '@/api/history.js';

export default {
    login ({ commit }, id) {
        return new Promise((resolve, reject) => {
            signin(id).then((result) => {
                commit('get', { data: result.data, id })
                resolve()
            }).catch((err) => {
                console.log(err)
            });
        });
    },
    history ({ commit }, id) {
        history().then((result) => {
            commit('getHistory', result.data)
        }).catch((err) => {
            console.log(err)
        });
    }
}