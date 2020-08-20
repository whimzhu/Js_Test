<template>
  <div id="home-item-wrap">
    <div
      v-for="userList in userLists"
      :key="userList.id"
      class="home-item"
    >
      <user-list-item :userList="userList"></user-list-item>
    </div>
  </div>
</template>

<script>
import UserListItem from '@/views/home/childComps/UserListItem'

export default {
  props: {
    userLists: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    UserListItem
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
