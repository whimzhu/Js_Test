<template>
  <user-list :userLists="userLists"></user-list>
</template>

<script>
import { request } from '@/network/request';
import mock from '@/mock/mock';

import UserList from '@/views/home/childComps/UserList'

export default {
  data() {
    return {
      userLists: []
    }
  },
  created() {
    request({
      url: "/user/userList",
      // responseType: 'json/text',
      // method: "post",
      // data: {}
    }).then(res => {
      console.log(res)
      this.userLists = res.data.array;
    }).catch(function (err) {
      console.log(err)
    })

  },
  mounted() {
    this.$bus.$on("itemImgLoad", () => {
      this.$parent.scroll.refresh();
    });
  },
  components: {
    UserList
  }
}
</script>

<style lang="scss" scoped>
</style>
