<template>
  <div>
    <div class="wrap">
      <h1>{{msg}}</h1>
      <h2 v-change-color="'red'">{{ msg | to-reverse }}||{{ msg1 }}||{{ msg2 }}||{{ msg3 }}</h2>
      <h3><button @click='resetData'>重置数据</button></h3>
      <!-- <sonOne :sonOneMsg="msg1" @changeSonOneMsg="msg1 = $event"></sonOne> -->
      <sonOne :sonOneMsg.sync="msg1"></sonOne>
      <!-- <sonTwo
        :sonTwoMsg="msg2"
        :changeSonTwoMsgFn="SonTwoMsgFn"
      ></sonTwo> -->
      <!-- 动态获取sonTwo组件，并传入props -->
      <component
        :is="item.name"
        v-for="(item,index) in cp"
        :key="index"
        v-bind="item.props"
      ></component>
      <sonThree
        :sonThreeMsg="msg3"
        @changeSonThreeMsg="msg3 = $event"
      >
        <!-- 有name的slot必须用template包裹 -->
        <template v-slot:aa="{ b }">
          <p>{{b}}</p>
        </template>
      </sonThree>
    </div>
  </div>
</template>

<script>
import SonOne from './sonOne.vue'
import SonTwo from './sonTwo.vue'
import SonThree from './sonThree.vue'
import { eventBus } from '@/main.js'
export default {
  data() {
    return {
      msg: '我是父页面',
      msg1: '我是子页面一',
      msg2: '我是子页面二',
      msg3: '我是子页面三'
    }
  },
  computed: {
    cp() {
      return [{
        name: "sonTwo",
        props: {
          sonTwoMsg: this.msg2,
          changeSonTwoMsgFn: this.SonTwoMsgFn
        }
      }]
    }
  },
  mounted() {
    this.msg = '什么玩意?';
    let dom = document.getElementsByTagName("h1")[0];
    console.log(dom.innerHTML);
  },
  methods: {
    resetData() {
      // console.log(this.$children)
      // console.log(this.$options.data)
      // this.msg1 = '我是子页面一';
      // this.msg2 = '我是子页面二';
      // this.msg3 = '我是子页面三';
      Object.assign(this.$data, this.$options.data());
      this.$children.forEach(item => {
        // console.log(item)
        Object.assign(item.$data, item.$options.data());
      });
    },
    SonTwoMsgFn() {
      this.msg2 = '改变后的我是子页面二';
    }
  },
  directives: {//指令
    'change-color': {
      bind(el, binding) {
        el.style.color = binding.value
      }
    }
  },
  filters: {//过滤器
    'to-reverse'(value) {
      return value.split("").reverse().join("")
    }
  },
  components: {
    SonOne,
    SonTwo,
    SonThree
  }
}
</script>

<style scoped>
</style>
