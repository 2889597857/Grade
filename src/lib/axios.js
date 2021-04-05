import axios from 'axios';
import { getCookie } from '@/lib/utils';
class HttpRequest {
    constructor(baseUrl) {
        this.baseURL = baseUrl;
        this.queue = {}; //请求队列
    }

    getInsideConfig () {
        const config = {
            baseURL: this.baseURL,
            timeout: 6000,
            headers: {}
        };
        return config;
    }

    distroy (url) {
        delete this.queue[url];
        if (!Object.keys(this.queue).length) {
            // Spin.hide() 请求完成或失败,取消loading
        }
    }
    //拦截器
    interceptors (instance, url) {
        // 发送请求前 
        instance.interceptors.request.use(
            config => {
                if (!Object.keys(this.queue).length) {
                    //添加全局loading 
                }
                this.queue[url] = true;
                //将token封装到请求头中
                // config.headers['Authorization'] = getCookie();
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
        // 发送请求后
        instance.interceptors.response.use(
            res => {
                this.distroy(url)
                const { data, status } = res;
                return { data, status };
            },
            error => {
                this.distroy(url)
                return Promise.reject(error);
            }
        );
    }

    request (options) {
        const instance = axios.create(); //创建请求 函数
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);//对请求进行拦截
        return instance(options);
    }
}
export default HttpRequest;
