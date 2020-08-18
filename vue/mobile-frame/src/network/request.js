import axios from 'axios';

export const myAxios = axios;

export function request(params) {
  const request = axios.create({
    // baseURL: baseURL
    // timeout: 20000
    // headers: headers
  });

  return request(params);
}
