<template>
  <div id="b-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#b-menu {
  width: 100%;
  height: 48px;
  display: flex;
  background-color: #f9f9f9;
  box-shadow: 0 -2px 5px #e1e1e1;
  // position: fixed;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // z-index: 999;
}
</style>
