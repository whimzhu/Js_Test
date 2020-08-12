<template>
  <div>
    <router-link to="/home/hello1">页面1</router-link> |
    <router-link to="/home/hello2">页面2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { myAxios, request } from '@/axios';

export default {
  created() {
    //all
    myAxios.all([request({
      url: "get",
      params: {}
    }), request({
      url: "post",
      method: "post",
      data: {}
    })]).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped></style>
