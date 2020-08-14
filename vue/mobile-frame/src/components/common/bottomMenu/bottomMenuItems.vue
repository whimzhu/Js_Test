<template>
  <div
    class="b-items"
    @click="itemsClick"
    :class="{'cur':isActive}"
  >
    <!-- 图标 -->
    <div class="b-items-t">
      <slot name="iconfont"></slot>
    </div>
    <!-- 文字 -->
    <div class="b-items-b">
      <slot name="icontext"></slot>
    </div>
  </div>
  <!-- <div class="b-items-wrap">
    <div class="b-items">
      <div class="b-items-t"><span class="iconfont">&#xe600;</span></div>
      <div class="b-items-b">首页</div>
    </div>
    <div class="b-items">
      <div class="b-items-t"><span class="iconfont">&#xe647;</span></div>
      <div class="b-items-b">热点</div>
    </div>
    <div class="b-items cur">
      <div class="b-items-t"><span class="iconfont">&#xe601;</span></div>
      <div class="b-items-b">我的</div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemsClick() {
      this.$router.replace(this.path)
    }
  },
}
</script>

<style lang="scss" scoped>
.b-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  .b-items-t {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont {
      font-size: 20px;
      color: $color;
    }
  }
  .b-items-b {
    @extend .b-items-t;
    flex: 2;
  }
}
.cur {
  @extend .b-items;
  .b-items-t {
    .iconfont {
      color: $high-color;
    }
  }
  .b-items-b {
    color: $high-color;
  }
}
</style>
