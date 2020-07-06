<template>
    <div class="border">
        {{ sonOneMsg }}
        <button @click='changeMsg'>改变子页面一的数据</button>
    </div>
</template>

<script>
export default {
    mounted() {
        const parent = this.$parent;
        console.log(parent.msg);
    },
    props:['sonOneMsg'],
    data(){
        return {
            // msg:'我是子页面一'
        }
    },
    methods: {
        changeMsg(){
            // this.sonOneMsg = '改变后的我是子页面一';
            // this.$emit("changeSonOneMsg",this.sonOneMsg)
            this.$emit("update:sonOneMsg",'改变后的我是子页面一')
        }
    },
}
</script>

<style scoped>
    .border{
        border: 1px solid green;
        margin-bottom:10px;
    }
</style>