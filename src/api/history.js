import { axios } from './index';
export const history = (id) => {
    return axios.request({
        url: '/api/history',
        method: 'get',
        data: id
    });
};