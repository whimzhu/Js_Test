<template>
  <div id="app">
    <app-hr direction="top"></app-hr>
    <app-hr direction="bottom"></app-hr>
    <app-header></app-header>
    <router-view></router-view>
    <!-- <father></father> -->
  </div>
</template>

<script>
// import father from './components/father.vue'
import Header from "@/views/Header";
import Hr from '@/components/common/Hr';

export default {
  components: {
    appHeader: Header,
    appHr: Hr
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
