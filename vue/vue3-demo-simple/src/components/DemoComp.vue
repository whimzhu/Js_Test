<template>
  <h1>用户信息</h1>
  <h2>姓名：{{ fullName }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
  name: "DemoComp",
  setup() {
    // 响应式数据
    let msg = ref("你好啊");
    const person = reactive({
      firstName: "zhu",
      lastName: "cai",
      age: 20,
    });

    // computed完整写法
    let fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    // watch
    //监视reactive定义的响应式数据
    //这里有两个坑，第一个是reactive定义的数据，监视时回调中无法获得oldValue！oldValue和new一样
    //第二个坑是，监视reactive定义的数据，默认开启的deep:true，且deep不能改成false
    // watch(
    //   person,
    //   (newValue, oldValue) => {
    //     console.log("person变化了", newValue, oldValue);
    //   },
    //   { immediate: true, deep: false }
    // ); //此处的deep配置不再奏效

    //监视reactive定义的响应式数据中的某个属性
    //这里要注意，第一个参数必须写成箭头函数，如果直接写person.lastName，那么就相当于写了个死的值，这样是监视不到的。还有就是如果lastName是一个对象，那么默认deep是false的，如果要深度监视需要手动开启deep:true（deep配置有效）
    // watch(
    //   () => person.lastName,
    //   (newValue, oldValue) => {
    //     console.log("person的lastName变化了", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    //监视ref定义的响应式数据
    // watch(
    //   msg,
    //   (newValue, oldValue) => {
    //     console.log("msg变化了", newValue, oldValue);
    //   }
    //   // { immediate: true }
    // );

    watch(
      () => msg.value,
      (newValue, oldValue) => {
        console.log("msg变化了", newValue, oldValue);
      }
      // { immediate: true }
    );

    //watchEffect的回调一上来会先执行一次
    //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
    watchEffect(() => {
      const x1 = msg.value;
      const x2 = person.age;
      console.log("watchEffect配置的回调执行了", x1, x2);
    });

    // 方法
    function sayHello() {
      msg.value = "什么？";
      person.lastName = "xiong";
      alert(`我叫${fullName.value},我${person.age}岁了,${msg.value}`);
    }

    // 返回一个对象（常用）
    return {
      msg,
      person,
      fullName,
      sayHello,
    };
  },
};
</script>

<style lang="scss" scoped></style>
