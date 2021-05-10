import { getInf } from '@/api/signin';
import { getHistory } from '@/api/history.js';
import { rate } from '@/api/rate.js';
import { getCookie } from '@/lib/utils'

export default {
    getInformation ({ commit }) {
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
    history ({ commit, state }, id) {
        return new Promise((resolve, reject) => {
            getHistory(id).then((result) => {
                commit('getHistory', { data: result.data, page: result.page })
                resolve()
            }).catch((err) => {
                reject(err)
            });
        });
    },
}