<template>
  <div
    class="img-box"
    @click="itemClick"
  ><img
      @load="imgLoad"
      @error="noFindImg"
      :src="dbTopList.images.large"
      alt=""
    >
    <p class="img-rating"><span>{{dbTopList.rating.average}}</span></p>
    <p class="img-text">{{getTitle}}</p>
  </div>
</template>

<script>
import { imgMixin } from '@/common/mixins';

export default {
  props: {
    dbTopList: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      title: ""
    }
  },
  computed: {
    getTitle() {
      //正则匹配汉字
      // return this.title = this.dbTopList.title.match(/[\u4e00-\u9fa5]+/g).join("");
      return this.title = this.dbTopList.title.split(" ")[0];
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    itemClick() {
      // this.$router.push("/home/detail/" + this.dbTopList.id)
      this.$router.push({
        name: 'detail',
        params: {
          id: this.dbTopList.id
        }
      })
    }
  },
  mixins: [imgMixin]
}
</script>

<style lang="scss" scoped>
.img-box {
  width: 150px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  .img-rating {
    position: absolute;
    right: -2px;
    top: -2px;
    font-size: 14px;
    background-color: #ec901f;
    padding: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    span {
      color: #fff;
    }
    &::first-letter {
      font-size: 18px;
    }
  }
  .img-text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 14px;
    padding: 5px 0;
  }
}
</style>
