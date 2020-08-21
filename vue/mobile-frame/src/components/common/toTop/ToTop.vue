<template>
  <div id="to-top">
    <slot><span class="iconfont">&#xe6a5;</span></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#to-top {
  width: 40px;
  height: 40px;
  border-radius: 50% 50%;
  background-color: #fffef9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 10px;
  bottom: 58px;
  z-index: 1000;
  .iconfont {
    font-size: 30px;
    color: $high-color;
  }
}
</style>
