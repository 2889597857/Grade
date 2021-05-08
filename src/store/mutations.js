import { getInf } from '@/config/inf.js';
export default {
    addHis (state, id) {
        state.history.push(id)
    },
    get (state, id) {
        state.information = Object.assign({}, id, getInf(id.role))
    },
    getHistory (state, history) {
        state.history = history
    },
    setFindHistory (state, history) {
        state.FindHistory.unshift(history)
    }
}