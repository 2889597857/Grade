import { axios } from './index';
export const signin = (id) => {
    return axios.request({
        url: '/api/login',
        method: 'post',
        data: id
    });
};
export const getInf = (token) => {
    return axios.request({
        url: '/api/information',
        method: 'post',
        data: token
    });
};