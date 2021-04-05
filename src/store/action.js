import { signin } from '@/api/signin';
import { d } from '../../dist/assets/index.d782c3b2';

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
    }
}