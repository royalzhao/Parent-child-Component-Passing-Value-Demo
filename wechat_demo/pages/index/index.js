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
