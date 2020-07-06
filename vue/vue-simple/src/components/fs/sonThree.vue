<template>
    <div class="border">
        <div>{{ sonThreeMsg }}</div>
        <slot></slot>
        <button @click="changeMsg">改变子页面二的数据</button>
        <button @click="changeSonThreeMsg">改变子页面三的数据</button>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
    props:['sonThreeMsg'],
    data(){
        return {
            // msg:'我是子页面二'
        }
    },
    methods: {
        changeMsg(){
            eventBus.$emit("changeMsgE",'改变后的我是子页面三');
        },
        changeSonThreeMsg(){
            this.$emit("changeSonThreeMsg",'改变后的我是子页面三')
        }
    },
}
</script>

<style scoped>
    .border{
        border: 1px solid purple
    }
</style>