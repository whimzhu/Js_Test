<template>
  <div
    class="item"
    @click="itemClick"
  >
    <div class="item-left">
      <img
        @load="imgLoad"
        @error="noFindImg"
        :src="hotListItem.image"
        alt=""
      >
    </div>
    <div class="item-right">
      <p class="movie-title">{{hotListItem.mainTitle}}</p>
      <p class="movie-year">{{hotListItem.year}}</p>
      <div class="movie-rating">
        <van-rate
          v-model="rating"
          icon="like"
          void-icon="like-o"
          :allow-half="true"
          :readonly="true"
          class="van-rate"
        />
        <span>{{hotListItem.rating}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Rate from 'vant/lib/rate';
import 'vant/lib/rate/style';

Vue.use(Rate);

import { imgMixin } from '@/common/mixins';
export default {
  props: {
    hotListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    rating() {
      return parseInt(this.hotListItem.rating) / 10 * 5
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemHotImgLoad");
    },
    itemClick() {
      this.$router.push({
        name: 'detail',
        params: {
          id: this.hotListItem.id
        }
      })
    }
  },
  mixins: [imgMixin]
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  width: 100%;
  height: 180px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 1px 2px #bbb;
  .item-left {
    margin-right: 10px;
    height: 100%;
    img {
      height: 100%;
      border: 1px solid #fffffb;
      border-radius: 10px;
    }
  }
  .item-right {
    flex: 1;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    .movie-title {
      font-size: 18px;
      font-weight: bold;
      color: #3e4145;
      margin-bottom: 5px;
    }
    .movie-year {
      font-size: 14px;
      color: #a1a3a6;
      padding-bottom: 20px;
      border-bottom: 1px solid #d3d7d4;
    }
    .movie-rating {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 16px;
        color: #ed1941;
        margin-left: 5px;
      }
    }
  }
}
</style>
