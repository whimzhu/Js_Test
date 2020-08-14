<template>
  <div id="app">
    <router-view></router-view>
    <bottom-menu>
      <bottom-menu-items path="/home">
        <template #iconfont>
          <span class="iconfont">&#xe600;</span>
        </template>
        <template #icontext>
          首页
        </template>
      </bottom-menu-items>
      <bottom-menu-items path="/hot">
        <template #iconfont>
          <span class="iconfont">&#xe647;</span>
        </template>
        <template #icontext>
          热点
        </template>
      </bottom-menu-items>
      <bottom-menu-items path="/profile">
        <template #iconfont>
          <span class="iconfont">&#xe601;</span>
        </template>
        <template #icontext>
          我的
        </template>
      </bottom-menu-items>
    </bottom-menu>
  </div>
</template>

<script>
import bottomMenu from './components/common/bottomMenu/bottomMenu';
import bottomMenuItems from './components/common/bottomMenu/bottomMenuItems';

export default {
  name: "App",
  components: {
    bottomMenu,
    bottomMenuItems
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/base.scss';
</style>
