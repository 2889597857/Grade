import { getInf } from '@/api/signin';
import { getHistory } from '@/api/history.js';
import { getCookie } from '@/lib/utils'
import { appendAll } from '@/api/append.js';
import { rate } from '@/api/rate.js';

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
    appendHistory ({ commit }, id) {
        return new Promise((resolve, reject) => {
            appendAll(id).then((result) => {
                commit('appendHistory', result, id)
                resolve()
            }).catch((err) => {
                reject(err)
            });
        })
    }
}