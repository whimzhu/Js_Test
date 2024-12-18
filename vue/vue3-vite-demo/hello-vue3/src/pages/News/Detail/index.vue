<template>
  <div>{{ query.title }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { toRefs } from "vue";

const { query } = toRefs(useRoute());
</script>

<style scoped></style>
