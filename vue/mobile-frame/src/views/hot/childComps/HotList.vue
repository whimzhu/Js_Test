<template>
  <div id="hot-list">
    <hot-list-item
      v-for="n in 10"
      :key="n"
    ></hot-list-item>
  </div>
</template>

<script>
import HotListItem from './HotListItem';
export default {
  components: {
    HotListItem
  }
}
</script>

<style lang="scss" scoped>
#hot-list {
  padding: 10px 20px;
}
</style>
