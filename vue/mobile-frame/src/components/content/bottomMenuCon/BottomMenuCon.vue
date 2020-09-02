<template>
  <Bottom-menu>
    <Bottom-menu-items path="/home">
      <template #iconfont>
        <span class="iconfont">&#xe600;</span>
      </template>
      <template #icontext>
        首页
      </template>
    </Bottom-menu-items>
    <Bottom-menu-items path="/hot">
      <template #iconfont>
        <span class="iconfont">&#xe603;</span>
      </template>
      <template #icontext>
        收藏
      </template>
    </Bottom-menu-items>
    <Bottom-menu-items path="/profile">
      <template #iconfont>
        <span class="iconfont">&#xe601;</span>
      </template>
      <template #icontext>
        我的
      </template>
    </Bottom-menu-items>
  </Bottom-menu>
  <!-- <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar> -->
</template>

<script>
import BottomMenu from '@/components/common/bottomMenu/BottomMenu';
import BottomMenuItems from '@/components/common/bottomMenu/BottomMenuItems';

// import Vue from 'vue';
// import Tabbar from 'vant/lib/tabbar';
// import 'vant/lib/tabbar/style';
// import TabbarItem from 'vant/lib/tabbar-item';
// import 'vant/lib/tabbar-item/style';

// Vue.use(Tabbar);
// Vue.use(TabbarItem);

export default {
  // data() {
  //   return {
  //     active: 0,
  //   };
  // },
  components: {
    BottomMenu,
    BottomMenuItems
  }
}
</script>

<style lang="scss" scoped>
</style>
