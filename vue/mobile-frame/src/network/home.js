import {
  request
} from '@/network/request';

export function getUserList() {
  return request({
    url: "/user/userList",
    // responseType: 'json/text',
    // method: "post",
    // data: {}
  })
}
