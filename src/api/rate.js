import { axios } from './index';
export const rate = (id) => {
    return axios.request({
        url: '/api/rate',
        method: 'get',
        data: id
    });
};