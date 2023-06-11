// 对axios进行封装
import axios from 'axios'

// 创建axios实例

const instance = axios.create({
    baseURL:"http://kumanxuan1.f3322.net:8881/cms",
    timeout:5000
})
// 封装请求拦截器 （在请求发送之前执行）
//请求前的准备工作 比如请求头
instance.interceptors.request.use(config=>{
    // config 是一个请求对象，是关于本次请求的信息


    return config
    // 如果不返回，请求无法继续发送
},err=>{
    return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res=>{
    return res.data;
}),err=>{
    return Promise.reject(err)
}

export default instance