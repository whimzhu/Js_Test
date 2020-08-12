<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      :router=flag
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/">父子关系组件
        <!-- <router-link to="/">父子关系组件</router-link> -->
      </el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>-->
      <el-menu-item index="/demo/write">Demo组件
        <!-- <router-link to="/demo">Demo组件</router-link> -->
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  // created() {
  //   this.$router.push({path:this.$route.matched[1].path});
  // },
  computed: {
    activeIndex() {
      return this.$route.path
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch: {
    $route(to, from) {
      // console.log(this.$route.matched)
      //   console.log(`前往路由：${to.name}`);
    }
  }
};
</script>