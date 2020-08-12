<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button @click="aClick">About</button>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  methods: {
    aClick() {
      this.$router.push({ path: "/about", query: { name: "kobe", age: 41 } })
    }
  },
}
</script>

<style></style>
