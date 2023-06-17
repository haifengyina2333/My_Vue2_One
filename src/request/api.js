// 统一管理项目的请求api

import request from './request.js'
import qs from 'qs'

// 使用箭头函数防止导入时被调用
export const JingpinAPI = () => request.get("/products/recommend");

// 短信验证码请求
export const SendSMSAPI = (params) => request.post("/sendSMS",qs.stringify(params));

// 
export const PhoneLoginAPI = (params) => request.post("/phoneRegin",qs.stringify(params));