<template>
  <div id="home-item-wrap">
    <div
      v-for="dbTopList in dbTopLists"
      :key="dbTopList.id"
      class="home-item"
    >
      <db-top-list-item :dbTopList="dbTopList"></db-top-list-item>
    </div>
  </div>
</template>

<script>
import DbTopListItem from '@/views/home/childComps/DbTopListItem'

export default {
  props: {
    dbTopLists: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    DbTopListItem
  }
}
</script>

<style lang="scss" scoped>
#home-item-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // height: 100%;
  // overflow-x: hidden;
  // overflow-y: auto;
  .home-item {
    margin: 5px 0;
  }
}
</style>
