<template>
  <div id="app">
    <top-nav></top-nav>
    <scroll>
      <router-view></router-view>
    </scroll>
    <bottom-menu-con></bottom-menu-con>
  </div>
</template>

<script>
import TopNav from './components/common/topNav/TopNav';
import Scroll from './components/common/scroll/Scroll';
import BottomMenuCon from './components/content/bottomMenuCon/BottomMenuCon';

export default {
  name: "App",
  components: {
    BottomMenuCon,
    TopNav,
    Scroll
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/base.scss';

#app {
  padding-top: 48px;
  height: calc(100vh - 48px);
}
</style>
