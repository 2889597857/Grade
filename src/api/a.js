import { axios } from './index';
export default function a () {
    return axios.request({
        url: '/api/inf',
        method: 'get',
    })

}