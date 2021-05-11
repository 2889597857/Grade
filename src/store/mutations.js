import { getInf } from '@/config/inf.js';
import { dataTool } from 'echarts';
export default {
    addHis (state, id) {
        state.history.unshift(id)
    },
    get (state, id) {
        state.information = Object.assign({}, id, getInf(id.role))
    },
    getHistory (state, history) {
        state.history = history.data
        state.historyPage = history.page
    },
    setFindHistory (state, history) {
        state.appendHistory.unshift(history)
    },
    appendHistory (state, history) {
        state.appendHistory.push(...history.data)
        state.appendPage = history.page - 1
    },
    changeExam (state, value) {
        state.exam = value
    },
    getFindGradeID (state, value) {
        const a = state.findGradeID.every(a => a != value)
        if (a) {
            state.findGradeID.unshift(value)
        }
    }
}