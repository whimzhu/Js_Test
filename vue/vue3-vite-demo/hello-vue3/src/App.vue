<template>
  <div class="nav-wrap">
    <div class="nav active">
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
    </div>
    <div class="nav">
      <RouterLink to="/activity" active-class="active">活动</RouterLink>
    </div>
    <div class="nav">
      <RouterLink to="/about" active-class="active">关于我们</RouterLink>
    </div>
  </div>
  <div class="content-wrap">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.nav-wrap {
  display: flex;
}
.nav-wrap .nav {
  border: 1px solid #dedede;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}
.nav-wrap .nav a {
  text-decoration: none;
  display: block;
  padding: 8px;
  color: #000;
}
.nav-wrap .nav a.active {
  background-color: rgb(250, 173, 72);
}
.content-wrap {
  height: 300px;
  margin: 10px 0;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: blanchedalmond;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
