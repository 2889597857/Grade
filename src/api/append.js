import { axios } from './index';
export const append = (id) => {
    return axios.request({
        url: '/api/append',
        method: 'get',
        data: id
    });
};