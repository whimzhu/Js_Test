<template>
  <div class="img-box"><img
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
.img-box {
  width: 150px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
