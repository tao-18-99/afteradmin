import axios       from 'axios/index';
import Vue from 'vue';

const qs = require('qs');
// const baseURL = "http://api.test.company.shaoziketang.com/v1.0";
const  baseURL ="/api";
const UploadImgDir = baseURL; // 上传的图片根路径地址
// require('promise.prototype.finally').shim(); // promise添加finally回调

/**
 * http请求封装
 * 1. header中添加token
 * 2. 传参处理
 * 3. 统一的异常处理
 */

const baseHttp = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  headers: {
    'Content-type': 'application/json;charset=UTF-8'
  }
});

baseHttp.interceptors.request.use(config => {
  if (localStorage.userInfo) {
     config.headers['token'] =   JSON.parse(localStorage.getItem("userInfo")).user_info.token
  }
  return config
}, error => {
  return Promise.reject(error)
});
baseHttp.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
});

const http = (request, data, addLoading = true) => {
  return new Promise((resolve, reject) => {
    let method = request.method;
    let params = {};

    if (['get', 'delete', 'head'].indexOf(method) > -1 && data) {
      request.url += `?${qs.stringify(data, {arrayFormat: 'repeat'})}`;
      
    } else {
      params = {
        data: data
      };
      if (localStorage.userInfo) {
        let token = JSON.parse(localStorage.getItem("userInfo")).user_info.token
        request.url += `?token=${token}`;
      }
    }

    let loading = null;

    baseHttp({
      ...request,
      ...params
    }).then(
      response => {
        if (response.data.code && response.data.code === 200) {
          resolve(response.data);
        } else {
          console.log("err",response)
          Vue.prototype.$message.warning(response.data.message);

          /**
           * NOTE
           * 登录超时，清除登录信息，跳转登录页
           */
          if (response.data.code && response.data.code === 700) {

            reject(response.data);
          }
          reject(response.data);
        }
      }).catch(err => {
      console.error(err);
      if (err.message.indexOf('timeout') === 0) {
        reject("网络请求超时！请重试！");
        Vue.prototype.$message.warning("网络请求超时！请重试！");
            } else {
        reject("网络请求失败！请检查您的网络设置！");
        Vue.prototype.$message.warning("网络请求超时！请检查您的网络设置！");

      }
      reject(err);
    }).finally(() => {

    })
  })
};

export {
  http,
  baseURL,
  UploadImgDir
}
