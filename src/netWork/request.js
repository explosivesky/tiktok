import axios from 'axios'

export function request(baseURL, config) {
 return new Promise((resolve, reject) => {
  let instance = axios.create({
   baseURL,
   timeout: 5000,
   headers: {
    'Content-Type': 'Access-Control-Allow-Origin'
   }
  });
  //请求拦截
  instance.interceptors.request.use(req => {
   return req
  });
  //响应拦截
  instance.interceptors.response.use(res => {
   return res
  }, err => {
   console.log(err);
  })
  instance(config).then(res => {
   resolve(res)
  }).catch(err => {
   reject(err)
  })
 })

}