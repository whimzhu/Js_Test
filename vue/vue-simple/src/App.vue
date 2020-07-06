<template>
  <div id="app">
    <app-header></app-header>
      <router-view></router-view>
    <!-- <father></father> -->
  </div>
</template>

<script>
// import father from './components/father.vue'
import Header from "./components/header.vue";

export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
