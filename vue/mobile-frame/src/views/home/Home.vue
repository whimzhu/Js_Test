<template>
  <!-- 此处外部不要包裹任何dom，不然better-scroll组件无法滚动 -->
  <scroll
    ref="scroll"
    :pullUpLoad="true"
    @pullingUp="getUserList"
    @scroll="getScroll"
  >
    <template #scroll-con>
      <user-list :userLists="userLists"></user-list>
      <!-- <db-top-list :dbTopLists="dbTopLists"></db-top-list> -->
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
import { getUserList, getDbTop250 } from '@/network/home';//home模块相关请求

import UserList from '@/views/home/childComps/UserList';
import DbTopList from '@/views/home/childComps/DbTopList';

import { debounce } from '@/common/utils';
import { toTopMixin } from '@/common/mixins';

export default {
  data() {
    return {
      userLists: [],
      dbTopLists: [],
      // isShowLoading: false
    }
  },
  created() {
    //请求数据
    this.getUserList();
    this.getDbTop250();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    })
  },
  mixins: [toTopMixin],
  methods: {
    getUserList() {
      getUserList().then(res => {
        this.userLists.push(...res.data.array);
        this.$refs.scroll.finishPullUp();
        // this.isShowLoading = false;
      }).catch(function (err) {
        console.log(err)
      });
    },
    getDbTop250() {
      getDbTop250().then(res => {
        console.log(res);
        this.dbTopLists.push(...res.data.subjects);
        this.$refs.scroll.finishPullUp();
        // this.isShowLoading = false;
      }).catch(function (err) {
        console.log(err)
      });
    }
  },
  components: {
    Scroll,
    UserList,
    DbTopList
  }
}
</script>

<style lang="scss" scoped>
</style>
