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
