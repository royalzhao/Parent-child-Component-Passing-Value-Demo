<template>
    <div>
        组件2 <br>
        爸爸跟我说的话,{{toast}}  <br>
        哥哥跟我说的话：{{brotherTell1}}{{brotherTell2}}
    </div>
</template>
<script>
export default {
    props:[
        'toast','brotherTell1','brotherTell2'
    ],
    data(){
        return{

        }
    }
}
</script>
<style scoped>

</style>


