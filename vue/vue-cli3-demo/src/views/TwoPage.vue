<template>
  <div></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TwoPage',
  created() {
    this.getRootList()
  },
  methods: {
    getRootList() {
      axios
        .get('/user/userinfo')
        .then(res => {
          console.log(res)
          // this.print_array(res)
          // console.log(JSON.stringify(res.data))
        })
        .catch(() => {
          // alert(err)
        })
    },
    //打印数组
    print_array(arr) {
      console.log(arr)
      for (var key in arr) {
        if (typeof arr[key] == 'object') {
          //递归调用
          this.print_array(arr[key])
        } else {
          document.write(key + ' = ' + arr[key] + '<br>')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
