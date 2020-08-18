<template>
  <div
    class="wrapper"
    ref="wrapper"
  >
    <div class="content">
      <slot></slot>
    </div>
    <!-- <ul class="content">
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
      <li>"sdasdad"</li>
    </ul> -->
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  methods: {
    // 重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
    refresh() {
      this.scroll.refresh();
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
}
</style>
