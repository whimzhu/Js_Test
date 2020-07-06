<template>
    <div class="border">
        {{ sonTwoMsg }}||{{ msg }}
        <button @click="changeSonTwoMsgFn()">改变子页面二的数据</button>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
    props:['sonTwoMsg','changeSonTwoMsgFn'],
    data(){
        return {
            msg:'我是子页面二'
        }
    },
    created() {
        eventBus.$on("changeMsgE",(data)=>{
            this.msg = data;
        })
    },
}
</script>

<style scoped>
    .border{
        border: 1px solid red;
        margin-bottom:10px;
    }
</style>