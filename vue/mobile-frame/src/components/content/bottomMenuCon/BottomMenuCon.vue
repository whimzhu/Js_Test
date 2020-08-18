<template>
  <Bottom-menu>
    <Bottom-menu-items path="/home">
      <template #iconfont>
        <span class="iconfont">&#xe600;</span>
      </template>
      <template #icontext>
        首页
      </template>
    </Bottom-menu-items>
    <Bottom-menu-items path="/hot">
      <template #iconfont>
        <span class="iconfont">&#xe647;</span>
      </template>
      <template #icontext>
        热点
      </template>
    </Bottom-menu-items>
    <Bottom-menu-items path="/profile">
      <template #iconfont>
        <span class="iconfont">&#xe601;</span>
      </template>
      <template #icontext>
        我的
      </template>
    </Bottom-menu-items>
  </Bottom-menu>
</template>

<script>
import BottomMenu from '@/components/common/bottomMenu/BottomMenu';
import BottomMenuItems from '@/components/common/bottomMenu/BottomMenuItems';

export default {
  components: {
    BottomMenu,
    BottomMenuItems
  }
}
</script>

<style lang="scss" scoped>
</style>
