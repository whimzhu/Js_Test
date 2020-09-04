<template>
  <div id="hot-list">
    <hot-list-item
      v-for="item in hotList"
      :key="item.id"
      :hotListItem="item"
    ></hot-list-item>
  </div>
</template>

<script>
import HotListItem from './HotListItem';

export default {
  data() {
    return {
      hotList: this.$store.state.myMovieList
    }
  },
  // computed: {
  //   hotList() {
  //     return this.$store.state.myMovieList;
  //   }
  // },
  // watch: {
  //   hotList: {
  //     handler(newName, oldName) {
  //       this.$bus.$emit("itemHotImgLoad");
  //     },
  //     // deep: true
  //   }
  // },
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
