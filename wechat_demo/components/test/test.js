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
