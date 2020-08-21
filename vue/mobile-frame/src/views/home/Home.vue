<template>
  <scroll
    ref="scroll"
    :pullUpLoad="true"
    @pullingUp="getUserList"
    @scroll="getScroll"
  >
    <template #scroll-con>
      <user-list :userLists="userLists"></user-list>
    </template>
    <template #to-top>
      <to-top
        @click.native="tClick"
        v-show="isShowToTop"
      ></to-top>
    </template>
    <!-- <template #vant-loading>
      <div
        class="vant-loading"
        v-show="isShowLoading"
      >
        <van-loading
          type="spinner"
          color="#f58220"
        />
      </div>
    </template> -->
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll';
import ToTop from '@/components/common/toTop/ToTop';
import { getUserList } from '@/network/home';//home模块相关请求

import UserList from '@/views/home/childComps/UserList';

export default {
  data() {
    return {
      userLists: [],
      isShowToTop: false,
      // isShowLoading: false
    }
  },
  created() {
    //请求数据
    this.getUserList();

  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    })
  },
  computed: {

  },
  methods: {
    //防抖函数
    debounce(fn, wait) {
      let timer = null;
      return function () {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
      }
    },
    getUserList() {
      getUserList().then(res => {
        this.userLists.push(...res.data.array);
        this.$refs.scroll.finishPullUp();
        // this.isShowLoading = false;
      }).catch(function (err) {
        console.log(err)
      });
    },
    tClick() {
      this.$refs.scroll.scrollToTop();
    },
    getScroll({ x, y }) {
      this.isShowToTop = (-y) > 300 ? true : false;
    }
  },
  components: {
    Scroll,
    ToTop,
    UserList
  }
}
</script>

<style lang="scss" scoped>
</style>
