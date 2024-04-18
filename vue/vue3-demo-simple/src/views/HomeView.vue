<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DemoComp />
  </div>
</template>

<script>
// @ is an alias to /src
import DemoComp from "@/components/DemoComp.vue";

export default {
  name: "HomeView",
  components: {
    DemoComp,
  },
};
</script>
