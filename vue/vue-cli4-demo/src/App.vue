<template>
  <div id="app" ref="appWrap">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button @click="aClick">About</button>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollbarWidth: 0
    }
  },
  mounted() {
    // 使用函数
    this.scrollbarWidth = this.getScrollbarWidth();
    console.log("滚动条宽度:", this.scrollbarWidth);
  },
  methods: {
    aClick() {
      this.$router.push({ path: "/about", query: { name: "kobe", age: 41 } });
    },
    getScrollbarWidth() {
      // 创建一个隐藏的div，设置其宽度、高度、overflow属性来产生滚动条
      const div = document.createElement("div");
      div.style.width = "100px";
      div.style.height = "100px";
      div.style.overflow = "scroll";
      div.style.position = "absolute";
      div.style.top = "-9999px"; // 确保div不在视野内

      document.body.appendChild(div); // 将div添加到文档中
      const scrollbarWidth = div.offsetWidth - div.clientWidth; // 计算滚动条宽度
      document.body.removeChild(div); // 移除div

      return scrollbarWidth;
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
