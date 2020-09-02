<template>
  <div class="movie-info">
    <div class="movie-img-wrap">
      <img
        @load="imgLoad"
        @error="noFindImg"
        :src="dbTopDetail.image"
        alt=""
        class="movie-img"
      >
      <div
        class="movie-collect"
        v-show="!isCollectHigh"
        @click="itemClick"
      ><span class="iconfont">&#xe602;</span></div>
      <div
        class="movie-collect"
        v-show="isCollectHigh"
        @click="itemClick"
      ><span class="iconfont">&#xe603;</span></div>
    </div>
    <p class="movie-text">{{dbTopDetail.mainTitle}}</p>
    <p class="movie-text">{{dbTopDetail.otherTitle}}</p>
    <div class="movie-genres">
      <p class="tit">类型：</p>
      <div class="genres-wrap">
        <p
          class="con"
          v-for="(item,index) in dbTopDetail.genres"
          :key="index"
        >{{item}}</p>
      </div>
    </div>
    <div class="movie-year">
      <p class="tit">上映年份：</p>
      <p class="con">{{dbTopDetail.year}}</p>
    </div>
    <div class="movie-countries">
      <p class="tit">国家：</p>
      <div class="countries-wrap">
        <p
          class="con"
          v-for="(item,index) in dbTopDetail.countries"
          :key="index"
        >{{item}}</p>
      </div>
    </div>
    <div class="movie-casts">
      <p class="">演员表：</p>
      <div class="casts-wrap">
        <div
          class="con"
          v-for="(item,index) in dbTopDetail.casts"
          :key="index"
        >
          <img
            @load="imgLoad"
            @error="noFindImg"
            :src="item.avatars.large"
            alt=""
            class="casts-img"
          >
          <p class="casts-name">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imgMixin } from '@/common/mixins';

import { mapState } from "vuex";
import { SAVE_MOVIE } from '@/store/mutations-type';
import { DELETE_MOVIE } from '@/store/actions-type';

export default {
  props: {
    dbTopDetail: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isCollectHigh: false
    }
  },
  computed: {
    ...mapState({
      myMovieList: state => state.myMovieList
    })
  },
  created() {
    this.checkCollected();
  },
  methods: {
    imgLoad() {
      this.$emit("itemImgLoad");
    },
    itemClick() {
      if (this.isCollectHigh) {
        this.$store.dispatch(DELETE_MOVIE, this.dbTopDetail);
      } else {
        this.$store.commit(SAVE_MOVIE, this.dbTopDetail);
      }
      this.isCollectHigh = !this.isCollectHigh;
    },
    checkCollected() {
      this.isCollectHigh = !!this.myMovieList.filter(i => i.id == this.dbTopDetail.id).length
    }
  },
  mixins: [imgMixin],
}
</script>

<style lang="scss" scoped>
.movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  .movie-img-wrap {
    position: relative;
    .movie-img {
      width: 200px;
      box-shadow: 5px 5px 5px #464547;
    }
    .movie-collect {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 999;
      .iconfont {
        font-size: 24px;
        color: $high-color;
      }
    }
  }
  .movie-text {
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    text-shadow: 0.133333rem 0.133333rem 0.133333rem #464547;
  }
  .movie-genres {
    width: 100%;
    margin-top: 10px;
    p {
      font-size: 16px;
      color: #fff;
      padding: 3px;
    }
    .tit {
      float: left;
    }
    .genres-wrap {
      display: flex;
      flex-wrap: wrap;
      .con {
        border: 1px solid #fff;
        border-radius: 5px;
        margin-right: 10px;
        margin-bottom: 5px;
      }
    }
  }
  .movie-year {
    @extend .movie-genres;
    margin-top: 5px;
  }
  .movie-countries {
    @extend .movie-genres;
    margin-top: 5px;
    .countries-wrap {
      float: left;
      .con {
        float: left;
        margin-right: 5px;
      }
    }
  }
  .movie-casts {
    @extend .movie-genres;
    .casts-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .con {
        flex: 1;
        margin-top: 5px;
        text-align: center;
        // width: 70px;
        // height: 100px;
        img {
          width: 90px;
          box-shadow: 3px 3px 3px #464547;
          // width: 100%;
          // height: 100%;
        }
        .casts-name {
          text-align: center;
          color: #fff;
          font-size: 14px;
          padding: 5px 0;
        }
      }
    }
  }
}
</style>
