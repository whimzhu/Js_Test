import ToTop from '@/components/common/toTop/ToTop';

export const toTopMixin = {
  components: {
    ToTop
  },
  data() {
    return {
      isShowToTop: false
    }
  },
  methods: {
    tClick() {
      this.$refs.scroll.scrollToTop();
    },
    getScroll({
      x,
      y
    }) {
      this.isShowToTop = (-y) > 300 ? true : false;
    }
  },
}

export const imgMixin = {
  methods: {
    noFindImg() {
      let img = event.srcElement;
      // img.src = "http://temp.im/150x200";
      img.src = require('@/assets/img/pic404.jpg');
      img.onerror = null; //防止一直跳动
    },
  },
}
