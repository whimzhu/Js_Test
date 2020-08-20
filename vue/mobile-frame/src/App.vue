<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <bottom-menu-con></bottom-menu-con>

    <!-- <div class="header"></div>
        <div class="con">
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
        </div>
        <div class="footer"></div> -->
  </div>
</template>

<script>
import TopNav from './components/common/topNav/TopNav';
import BottomMenuCon from './components/content/bottomMenuCon/BottomMenuCon';

export default {
  name: "App",
  components: {
    BottomMenuCon,
    TopNav
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/base.scss';

// #app {
//   // display: flex;
//   // flex-direction: column;
//   // width: 100%;
//   // height: 100vh;
//   padding: 48px 0;
//   height: 100vh;
//   // .main {
//   //   flex: 1;
//   //   overflow: hidden;
//   // }
// }

body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
