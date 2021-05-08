import { getInf } from '@/api/signin';
import { getHistory } from '@/api/history.js';
import { rate } from '@/api/rate.js';
import { getCookie } from '@/lib/utils'

export default {
    getInformation ({ commit, state }) {
        return new Promise((resolve, reject) => {
            const token = getCookie()
            getInf({ token }).then((result) => {
                commit('get', result)
                resolve()
            }).catch((err) => {
                reject(err)
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