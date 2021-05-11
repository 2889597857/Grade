import { axios } from './index';
export const append = (id) => {
    return axios.request({
        url: '/api/append',
        method: 'get',
        params: id
    });
};
export const appendAdd = (id) => {
    return axios.request({
        url: '/api/append/add',
        method: 'post',
        data: {
            data: id.data,
            exam: id.examing
        }
    });
};
export const appendAll = (id) => {
    return axios.request({
        url: '/api/append/all',
        method: 'get',
        params: {
            skip: id
        }
    });
};