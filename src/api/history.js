import { axios } from './index';
export const getHistory = (id) => {
    return axios.request({
        url: '/api/history',
        method: 'get',
        data: id
    });
};