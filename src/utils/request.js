import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

const request = axios.create({
    // baseURL: 'http://localhost:8080',
    timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
    // 进度条开始
    nprogress.start();
    return config
}, (error) => {
    return error
});

// 添加响应拦截器
request.interceptors.response.use(function (res) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 进度条结束
    nprogress.done();
    return res.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default request