<template>
  <div><img
      @load="imgLoad"
      :src="userList.avatar"
      alt=""
    ></div>
</template>

<script>
export default {
  props: {
    userList: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
