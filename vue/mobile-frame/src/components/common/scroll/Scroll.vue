<template>
  <div
    class="wrapper"
    ref="wrapper"
  >
    <div class="content">
      <slot name="scroll-con"></slot>
    </div>
    <slot name="to-top"></slot>
    <slot name="vant-loading"></slot>
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
import Pullup from '@better-scroll/pull-up';



export default {
  name: "Scroll",
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    BScroll.use(Pullup);

    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      // 是否开启上拉加载
      pullUpLoad: this.pullUpLoad
    });

    //监测上拉动作
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    })

    //监听滚动
    this.scroll.on('scroll', ({ x, y }) => {
      this.$emit("scroll", { x, y });
    })
  },
  methods: {
    // 重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
    refresh() {
      this.scroll.refresh();
    },
    //每次触发上拉事件后，在回调函数的最后，都应该调用 finishPullUp() 方法。在 finishPullUp() 方法调用前不会触发下一次的 pullingUp 事件。
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    //回到顶部
    scrollToTop() {
      this.scroll.scrollTo(0, 0, 1000);
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
