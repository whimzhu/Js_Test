<template>
  <div class="border">
    <div>{{ sonThreeMsg }}</div>
    <slot
      name="aa"
      :a="slotMsg"
      :b="slotMsgOther"
    >默认插槽数据</slot>
    <button @click="changeMsg">改变子页面二的数据</button>
    <button @click="changeSonThreeMsg">改变子页面三的数据</button>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
  props: ['sonThreeMsg'],
  data() {
    return {
      slotMsg: "我是slot数据",
      slotMsgOther: "我是其他slot数据"
      // msg:'我是子页面二'
    }
  },
  methods: {
    changeMsg() {
      eventBus.$emit("changeMsgE", '改变后的我是子页面三');
    },
    changeSonThreeMsg() {
      this.$emit("changeSonThreeMsg", '改变后的我是子页面三')
    }
  },
}
</script>

<style scoped>
.border {
  border: 1px solid purple;
}
</style>