// 统一管理项目的请求api
import request from './request.js'
import qs from 'qs'
// 使用箭头函数防止导入时被调用

// 精品推荐
export const JingpinAPI = () => request.get("/products/recommend");
// 热门兑换
export const ReMenAPI = () => request.get("/products/hot");
// 短信验证码请求
export const SendSMSAPI = (params) => request.post("/sendSMS", qs.stringify(params));
// 短信登录
export const PhoneLoginAPI = (params) => request.post("/phoneRegin", qs.stringify(params));
// 扫描登录
export const wechanLoginAPI = (params) => request.post("/wechatUsers/PCLogin", qs.stringify(params));
// 绑定手机的登录
export const BindPhoneLoginAPI = (params) => request.post("/wechatUsers/binding", qs.stringify(params));
// 获取用户信息
export const UserProfilesAPI = () => request.get("/shop/userProfiles");
// 商品详情
export const GoodsDetailsAPI = (id) => request.get(`/products/${id}`);
// 加入购物车
export const addToCarAPI = (params) => request.post("/shop/carts/add", qs.stringify(params));
// 搜索
export const GoodsselectAPI = (params) => request.get("/products",{params})
// 购物车
export const GetCartAPI = () => request.get("/shop/carts")
// 删除购物车
export const removeCartApi = (id) => request.delete(`/shop/carts?productIds=${id}`)