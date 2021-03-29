import { getInf } from '@/config/inf.js';
export default {
    addHis (state, id) {
        state.history.push(id)
    },
    get (state, id) {
        state.information = getInf(id)
    }
}