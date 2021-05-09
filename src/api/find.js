import { axios } from './index';

export const findGrade = (id) => {
    let url = null
    if (id.value) {
        url = `/api/findgrade/${id.value}`
    } else {
        url = `/api/findgrade`
    }
    return axios.request({
        url: url,
        method: 'post',
        data: {
            id: id.id
        }
    });
};