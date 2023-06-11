// 统一管理项目的请求api

import request from './request.js'


// 使用箭头函数防止导入时被调用
export const JingpinAPI = () => request.get("/products/recommend");