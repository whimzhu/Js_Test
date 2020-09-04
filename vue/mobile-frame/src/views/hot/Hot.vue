<template>
  <scroll
    class="scroll-wrap"
    ref="scroll"
    @scroll="getScroll"
  >
    <template #scroll-con>
      <hot-list></hot-list>
    </template>
    <template #to-top>
      <to-top
        @click.native="tClick"
        v-show="isShowToTop"
      ></to-top>
    </template>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll';

import HotList from './childComps/HotList';

import { debounce } from '@/common/utils';
import { toTopMixin } from '@/common/mixins';

export default {
  mounted() {
    this.refresh();
  },
  activated() {
    this.$bus.$emit("itemHotImgLoad");
  },
  methods: {
    refresh() {
      const refresh = debounce(this.$refs.scroll.refresh);
      this.$bus.$on("itemHotImgLoad", () => {
        refresh();
      })
    }
  },
  mixins: [toTopMixin],
  components: {
    Scroll,
    HotList
  }
}
</script>

<style lang="scss" scoped>
.scroll-wrap {
  background-color: #f0f4f7;
}
</style>
