<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-main>
        <!-- <transition name="fade"> -->
          <router-view></router-view>
        <!-- </transition> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Aside from "./aside.vue";

export default {
  components: {
    appAside: Aside
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 60px; */
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.right-enter, .right-leave-to {
      transform: translate3d(100%,0, 0)
}
.right-leave, .right-enter-to {
      transform: translate3d(0, 0, 0)
}
.right-enter-active, .right-leave-active {
      transition: all .2s
}
</style>

<style scoped>
.el-container {
  margin-top: 40px;
}
</style>