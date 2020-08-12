<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      path: "/home/hello1"
    }
  },
  created() {
    console.log("create");
  },
  activated() {
    // console.log("activated");
    this.$router.push(this.path)
  },
  // deactivated() {
  //   console.log("deactivated");
  // },
  beforeRouteLeave(to, from, next) {
    // console.log(from.path);
    this.path = from.path;
    next()
  },
  components: {
    HelloWorld
  }
};
</script>
