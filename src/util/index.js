export const validatePhoneNum = value => {
    // 验证码手机号函数
    let reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/         
    return reg.test(value);
}
    
