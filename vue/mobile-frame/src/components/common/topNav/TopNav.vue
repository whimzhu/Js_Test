<template>
  <div id="t-nav">
    <div class="t-nav-l">
      <slot name="t-nav-l"></slot>
    </div>
    <div class="t-nav-c">
      <slot name="t-nav-c-tit">{{topNavTit}}</slot>
    </div>
    <div class="t-nav-r">
      <slot name="t-nav-r"></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    topNavTit() {
      return this.$route.meta.title
    }
  },
}
</script>

<style lang="scss" scoped>
#t-nav {
  width: 100%;
  height: 48px;
  display: flex;
  background-color: #f9f9f9;
  box-shadow: 2px 0 5px #e1e1e1;
  // position: fixed;
  // left: 0;
  // right: 0;
  // top: 0;
  // z-index: 999;
  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .t-nav-c {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: $color;
  }
}
</style>
