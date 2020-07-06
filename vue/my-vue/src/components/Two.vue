<template>
  <div class="hello">
    <p>ID：{{ $route.params.id}}</p>
    <p>名称：{{ $route.params.name}}</p>
  </div>
</template>
<script>
export default {
  name: 'Two',
  data () {
    return {
      msg: 'Hi, I am Two Page!'
    }
  }
}
</script>

<style scoped>
</style>
