import {
  request
} from '@/network/request';

export function getDbTopDetail(id) {
  return request({
    url: `/douban/v2/movie/subject/${id}`,
    // responseType: 'json/text',
    method: "get",
    params: {}
  })
}

export class movieInfo {
  constructor(dbTopDetail) {
    this.image = dbTopDetail.images.large;
    this.mainTitle = dbTopDetail.title.split(" ")[0];
    this.otherTitle = dbTopDetail.title.split(" ").splice(1).join(" ");
    this.genres = dbTopDetail.genres;
    this.year = dbTopDetail.year;
    this.casts = dbTopDetail.casts;
    this.countries = dbTopDetail.countries;
  }
}
