import { axios } from './index';
export const signin = (id) => {
    return axios.request({
        url: '/api/login',
        method: 'get',
        data: id
    });
};