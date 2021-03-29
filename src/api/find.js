import { axios } from './index';
export const findGrade = (id) => {
    return axios.request({
        url: '/api/find',
        method: 'get',
        data: id
    });
};