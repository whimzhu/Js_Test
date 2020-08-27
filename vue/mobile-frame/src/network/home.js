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

export function getDbTop250(start, count = 10) {
  return request({
    url: "/douban/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b",
    // responseType: 'json/text',
    method: "get",
    params: {
      start: start,
      count: count
    }
  })
}

// export class UserList {
//   constructor(data) {
//     this.id = data.id;
//     this.name = data.username;
//     this.url = data.avatar;
//   }
// }
