<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="activeIndex"
          :router="flag"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
          <el-menu-item index="/demo/write">
            <i class="el-icon-location"></i>
            <span slot="title">输入</span>
          </el-menu-item>
          <el-menu-item index="/demo/detail">
            <i class="el-icon-menu"></i>
            <span slot="title">记录</span>
          </el-menu-item>
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>-->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  computed: {
    activeIndex() {
      return this.$route.path;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch: {
    $route(to, from) {
      //   console.log(this.$route.matched)
      //   console.log(`前往路由：${to.name}`);
    }
  }
};
</script>