<template>
  <div id="app">
    <top-nav class="top-nav">
      <template
        v-if="isShowBack"
        #t-nav-l
      >
        <span
          class="iconfont"
          @click="toBack"
        >&#xe718;</span>
      </template>
    </top-nav>
    <div class="main">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
    </div>
    <bottom-menu-con v-if="isShowBot"></bottom-menu-con>
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
  data() {
    return {
      isShowBot: true,
      isShowBack: false
    }
  },
  components: {
    BottomMenuCon,
    TopNav
  },
  methods: {
    toBack() {
      this.$router.back();
    }
  },
  watch: {
    $route(to, from) {
      this.isShowBot = to.name == "home" || to.name == "hot" || to.name == "profile";
      this.isShowBack = to.name == "detail";
      // console.log(to, from, this.$route.path)
    }
  },
}
</script>

<style lang="scss">
// @import '~@/assets/css/base.scss';

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
  .top-nav {
    .iconfont {
      font-size: 24px;
      color: $color;
    }
  }
  .main {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .vant-loading {
    height: 100%;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  }
}
</style>
