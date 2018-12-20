## 父子组件及兄弟组件传值demo



> 此文档包含Vue，React和小程序实例



### Vue

父组件——index.vue

```vue
<template>

  <div class="hello">
    <div>
      <p>我是爸爸</p>
    </div>
    <div>
        大儿子告诉我:{{message}}
    </div>
    <test1 :toast="talkToTest1" @tell = "tellfather" @tellBrother = "telldidi">	</test1>
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
```

子组件1——test1  

```vue
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
```

子组件2——test2

```vue
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
```

### 小程序

父级——index

index.wxml文件

```html
<!--index.wxml-->
<view class="container">
  <test name="{{motto}}" bind:change="changeName" bind:add="addAge"></test>
  <text>我今年已经{{age}}岁了</text>
  <test2 name="{{aribo}}"></test2>
</view>

```

index.js文件

```js
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    age:1,
    aribo: 'Hello zhao'
  },
  
  onLoad: function () {
   
  },
  addAge:function(e){
    let num = 0;
    num = this.data.age + e.detail.num;

    this.setData({
      age: num
    })
  },
  changeName:function(e){
    this.setData({
      aribo:e.detail.name
    })
  }

})

```

index.json文件

```json
{
  "usingComponents":{
    "test":"/components/test/test",
    "test2":"/components/test2/test2"
  }
}
```

子组件1

test.wxml文件

```html
<!--components/test.wxml-->
<text>我是从父组件过来的---{{name}}</text>
<button bindtap='click'>加年龄</button>
<button bindtap='change'>改名字</button>
```

test.js文件

```js
// components/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type:String,
      value:'111'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click:function(data){
      let num = {
        num:1
      }
      this.triggerEvent('add',num)
    },
    change:function(){
      let data = {
        name:'Hello liu'
      }
      this.triggerEvent('change',data)
    }
  }
})
```

test.json

```json
{
  "component": true,
  "usingComponents": {}
}
```

子组件2

test2.html

```html
<!--components/test2/test2.wxml-->
<text>我是test2文件,我的名字是{{name}}</text>
```

test2.js

```js
// components/test2/test2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
```

test2.json

```json
{
  "component": true,
  "usingComponents": {}
}
```

### react

父级——app.js文件

```react
import React, { Component } from 'react';
import './App.css';
import Child1 from './components/child1'
import Child2 from './components/child2'

class App extends Component {
  constructor(){
    super();

    this.state = {
      talkTo1:'你是咱家老大',
      talkTo2:'你是咱家老二',
      childToMeMessage:'',
      tell:''
    }
  }
  childToMe(message){
    this.setState({
      childToMeMessage:message
    })
  }
  child2ToChild1(message){
    this.setState({
      tell:message
    })
  }
  render() {
    const talkTo1 = "你是咱家老大"
    const talkTo2 = "你是咱家老二"
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-4">
                  <h2>我是爸爸</h2>
                  <p>大儿子跟我说：{this.state.childToMeMessage}</p>
              </div>
              <div className="col-md-4">
                  <h2>我是大儿子</h2>
                  <Child1 tell={this.state.tell} talk={this.state.talkTo1} toFather={this.childToMe.bind(this)}></Child1>
              </div>
              <div className="col-md-4">
                  <h2>我是小儿子</h2>
                  <Child2 talk={this.state.talkTo2} toBrother={this.child2ToChild1.bind(this)}></Child2>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

```

子组件1——child1.js

```react
import React , {Component} from 'react';
import PropTypes from 'prop-types';

export default class Child1 extends Component{
    constructor(props){
        super(props);

        this.state ={
            talkToFather:'好好照顾身体'
        }
    }
    talkToFather(){
        this.props.toFather(this.state.talkToFather)
    }
    render() {
        return (
            <div className="container">
                <p>爸爸告诉我：{this.props.talk}</p>
                <button className="btn btn-default" onClick={this.talkToFather.bind(this)}>我要跟爸爸说</button>
                <p>弟弟告诉我：{this.props.tell}</p>
            </div>
        );
    }
}
Child1.PropTypes = {
    talk:PropTypes.string
}
```

子组件2——child2.js

```react
import React , {Component} from 'react';
import PropTypes from 'prop-types';

export default class Child2 extends Component{
    constructor(props){
        super(props);

        this.state ={
            talkToBrother:'要好好学习啊'
        }
    }
    talkToBrother(){
        this.props.toBrother(this.state.talkToBrother)
    }

    render() {
        return (
            <div className="container">
                <p>爸爸告诉我：{this.props.talk}</p>
                <button onClick={this.talkToBrother.bind(this)} className="btn btn-info">我要跟哥哥说</button>
            </div>
        );
    }
}
Child2.PropTypes = {
    talk:PropTypes.string
}
```

文章涉及的Vue文件内容使用vue-cli脚手架搭建，React内容使用Create-app-react搭建，小程序使用原生

代码详细内容参见[github](https://github.com/royalzhao/Parent-child-Component-Passing-Value-Demo)