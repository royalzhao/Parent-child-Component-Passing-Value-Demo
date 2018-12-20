<template>
    <div>
        组件1 <br>
        爸爸跟我说的话,{{toast}}  <br>
        <button @click="tell">告诉爸爸</button>
        <button @click="tellBrother">告诉弟弟</button>
    </div>
</template>
<script>
export default {
    props:[
        'toast'
    ],
    data(){
        return{
            message:'好好照顾身体',
            message2:'好好学习',
            message3:'天天向上',
        }
    },
    methods:{
        tell(){
            this.$emit('tell',this.message)
        },
        tellBrother(){
            this.$emit("tellBrother",this.message2,this.message3)
        }
    }
}
</script>
<style scoped>

</style>


