<template>
  <div
    class="hr-wrap"
    :style="ownDir"
  >
    <div
      v-for="n in 8"
      :key="n"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "bottom"
    }
  },
  data() {
    return {

    }
  },
  computed: {
    ownDir() {
      return this.direction == "top" ? { top: 0 } : { bottom: 0 }
    }
  },
}
</script>

<style scoped>
.hr-wrap {
  width: 100%;
  display: flex;
  height: 5px;
  position: fixed;
  left: 0;
  right: 0;
}
.hr-wrap div {
  flex: 1;
  height: 100%;
}
.hr-wrap div:nth-child(1) {
  background-color: #ff4554;
}
.hr-wrap div:nth-child(2) {
  background-color: #565cde;
}
.hr-wrap div:nth-child(3) {
  background-color: #0078ff;
}
.hr-wrap div:nth-child(4) {
  background-color: #369ed8;
}
.hr-wrap div:nth-child(5) {
  background-color: #3ec55d;
}
.hr-wrap div:nth-child(6) {
  background-color: #ffc400;
}
.hr-wrap div:nth-child(7) {
  background-color: #ff9700;
}
.hr-wrap div:nth-child(8) {
  background-color: #ff4b2d;
}
</style>