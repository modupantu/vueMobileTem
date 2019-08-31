import axios from 'axios';
import QS from 'qs';

console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_API_URL_WEB)
let baseURL = process.env.VUE_APP_API_URL_WEB;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const $http = axios.create({
  baseURL
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    $http.get(url, {
      params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}


export const post = (url, params = {}) => {
  params = Object.keys(params).length ? QS.stringify(params) : {}
  return new Promise((resolve, reject) => {
    $http.post(url, params).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}