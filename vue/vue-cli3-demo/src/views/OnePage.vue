<template>
  <div>
    欢迎来到OnePage页面
    <div>{{ name }}|{{ ageAlias }}|{{ countPlus }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'OnePage',
  data() {
    return {
      localAge: 999
    }
  },
  computed: {
    ...mapState({
      // 此处的state即为store里面的state
      name: state => state.name,
      // 当计算属性的名称与state的状态名称一样时，可以省写
      // 映射 this.age 为 store.state.age
      // age,
      //'_name'等同于 ‘state => state.name
      ageAlias: 'age',
      countPlus(state) {
        // 使用普通函数是为了保证this指向组件对象
        return state.age + this.localAge
      }
    })
  },
  created() {}
}
</script>

<style lang="scss" scoped></style>
