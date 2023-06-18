// 统一管理项目的请求api

import request from './request.js'
import qs from 'qs'

// 使用箭头函数防止导入时被调用
export const JingpinAPI = () => request.get("/products/recommend");

// 短信验证码请求
export const SendSMSAPI = (params) => request.post("/sendSMS",qs.stringify(params));

// 短信登录
export const PhoneLoginAPI = (params) => request.post("/phoneRegin",qs.stringify(params));


// 扫描登录
export const wechanLoginAPI = (params) =>request.post("/wechatUsers/PCLogin",qs.stringify(params));


// 绑定手机的登录
export const BindPhoneLoginAPI = (params) =>request.post("/wechatUsers/binding",qs.stringify(params));

