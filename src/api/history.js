import { axios } from './index';
export const getHistory = (id) => {
    return axios.request({
        url: '/api/amend',
        method: 'get',
        params: {
            skip: id
        }
    });
};
export const amend = (history) => {
    console.log(history)
    return axios.request({
        url: '/api/amend/add',
        method: 'post',
        data: {
            data: history.data,
            exam: history.examing
        }
    });
};
