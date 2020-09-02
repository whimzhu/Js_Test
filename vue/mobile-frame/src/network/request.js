import axios from 'axios';

export const myAxios = axios;

export function request(params) {
  const request = axios.create({
    // baseURL: baseURL
    // timeout: 20000
    // headers: headers
  });

  // request.interceptors.request.use(config => {
  //   if (process.env.NODE_ENV == "production") {
  //     config.url = 'http://t.yushu.im/' + config.url.split("/douban/")[1];
  //   }
  //   return config;
  // }, error => {
  //   // Do something with request error
  //   return Promise.reject(error);
  // });

  return request(params);
}
