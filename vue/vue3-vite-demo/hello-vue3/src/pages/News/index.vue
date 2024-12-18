<template>
  <div class="news-wrap">
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <RouterLink
          :to="{
            path: '/news/detail',
            query: { id: item.id, title: item.title },
          }"
          >{{ item.title }}</RouterLink
        >
      </li>
    </ul>
    <div class="con-wrap">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const newsList = reactive([
  {
    id: 1,
    title: "新闻一",
  },
  {
    id: 2,
    title: "新闻二",
  },
  {
    id: 3,
    title: "新闻三",
  },
]);
</script>

<style scoped>
.news-wrap {
  display: flex;
  height: 100%;
}
.news-wrap ul li {
  cursor: pointer;
}
.news-wrap .con-wrap {
  flex: 1;
  margin: 10px 20px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: aliceblue;
}
</style>
