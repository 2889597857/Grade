import { signin } from '@/api/signin';

export default {
    login ({ commit }, id) {
        return new Promise((resolve, reject) => {
            signin(id).then((result) => {
                commit('get', { data: result.data, id })
                resolve()
            }).catch((err) => {

            });
        });
    }
}