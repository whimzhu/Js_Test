import axios from 'axios';

export const myAxios = axios;

export function request(config) {
  const myAxiosC = axios.create({
    baseURL: 'http://httpbin.org/',
    timeout: 5000
    // headers: headers
  });

  //request拦截器
  myAxiosC.interceptors.request.use(
    (cf) => {
      console.log(cf);
      return cf;
    },
    (err) => {
      console.log(err);
    }
  );

  //response拦截器
  myAxiosC.interceptors.response.use(
    (res) => {
      console.log(res);
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return myAxiosC(config);
}
