<template>
  <scroll
    class="scroll-wrap"
    ref="scroll"
    @scroll="getScroll"
  >
    <template #scroll-con>
      <movie-info
        @itemImgLoad="itemImgLoad"
        :dbTopDetail="dbTopDetail"
        v-if="dbTopDetailFlag"
      ></movie-info>
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
import { getDbTopDetail, movieInfo } from '@/network/detail';//home模块相关请求

import MovieInfo from './childComps/MovieInfo';

import { debounce } from '@/common/utils';
import { toTopMixin } from '@/common/mixins';

export default {
  name: "Detail",
  data() {
    return {
      isShowToTop: false,
      dbTopDetail: {},
      dbTopDetailFlag: false,
    }
  },
  created() {
    this.getDbTopDetail(this.$route.params.id);
  },
  computed: {
    refresh() {
      return debounce(this.$refs.scroll.refresh);
    }
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh);
    // this.$on("itemImgLoad", () => {
    //   refresh();
    // })
  },
  methods: {
    getDbTopDetail(id) {
      getDbTopDetail(id).then(res => {
        console.log(res);
        this.dbTopDetail = new movieInfo(res.data);
        this.dbTopDetailFlag = true;
      }).catch(function (err) {
        console.log(err)
      });
    },
    itemImgLoad() {
      this.refresh();
    }
  },
  mixins: [toTopMixin],
  components: {
    Scroll,
    MovieInfo
  }
}
</script>

<style lang="scss" scoped>
.scroll-wrap {
  background-color: #006d84;
}
</style>
