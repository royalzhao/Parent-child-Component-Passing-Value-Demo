<template>
  <div class="hello">
    <div>
      <p>我是爸爸</p>
    </div>
    <div>
        大儿子告诉我:{{message}}
    </div>
    <test1 :toast="talkToTest1" @tell = "tellfather" @tellBrother = "telldidi"></test1>
    <test2 :toast="talkToTest2" :brotherTell1="message2" :brotherTell2="message3"></test2>
  </div>
</template>

<script>
import test1 from "../common/test1";
import test2 from "../common/test2";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      talkToTest1:"你是咱家老大",
      talkToTest2:"你是咱家老二",
      message:'',
      message2:'',
      message3:'',
    };
  },
  components: {
    test1,
    test2
  },
  methods:{
      tellfather(message){
          this.message = message
      },
      telldidi(message1,message2){
          this.message2 = message1
          this.message3 = message2
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
