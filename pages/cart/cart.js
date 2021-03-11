// pages/cart/cart.js
const computedBehavior = require('miniprogram-computed')

Component({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    goodlist1: [false,false,false],//设定第一个为该list全选
    goodlist2:  [false,false],
    option1: [
      { text: '30天礼盒装', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    value1: 0,
    value2:false,
    num:0,
    pri:378,
    good:[1,1,1]
  },
  computed:{
    num(data){
      var n=0;
      data.goodlist1.forEach((item,index)=>{
        if(item && index!=0){
          let goodnum=data.good[index-1]
          console.log("goodnum",goodnum)
          n+=goodnum;
        }
      })
      data.goodlist2.forEach((item,index)=>{
        if(item && index!=0){
          let goodnum=data.good[index+1]
          n+=goodnum;
        }
      })
      console.log('n',n)
      return n;
    },
    checked(data){
      var a=0;
      data.goodlist1.forEach(item=>{
        if(!item){
          a=1;
        }
      })
      data.goodlist2.forEach(item=>{
        if(!item){
          a=1;
        }
      })
      console.log("checked",a)
      if(a==0){
        return true;
      }else{
        return false
      }
    },
    'goodlist1[0]'(data){
      var a=0;
      data.goodlist1.forEach((item,index)=>{
        if(index!=0){
            if(!item){
            a=1;
          }
        }
        
      })
      console.log("goodlist1[0]",a)
      if(a==0){
        return true
      }else{
        return false
      }
    },
    'goodlist2[0]'(data){
      var a=0;
      data.goodlist2.forEach((item,index)=>{
        if(index!=0){
            if(!item){
            a=1;
          }
        }
        
      })
      console.log("goodlist2[0]",a)
      if(a==0){
        return true
      }else{
        return false
      }
    } 
  },
  methods:{
      //事件函数
  numadd(e){
    var index= e.currentTarget.dataset.item;
    var num=this.data.good[index];
    num++;
    console.log(index,num)
    this.setData({
      ['good[' + index + ']']:num
    })
  },
  numrdc(e){
    var index= e.currentTarget.dataset.item;
    var num=this.data.good[index];
    num--;
    num=num>=1?num:1;
    console.log(index,num)
    this.setData({
      ['good[' + index + ']']:num
    })
  },
  selectchange(e){
    let index=e.currentTarget.dataset.index;
    console.log(index)
    if(index<3){
      var bol = this.data.goodlist1[index];
      this.setData({
        ['goodlist1['+ index +']']:!bol
      })
      if(index==0){
        for(var j=0;j<3;j++){
          this.setData({
            ['goodlist1['+ j +']']:!bol
          })
        } 
      }
    }else{
      var bol = this.data.goodlist2[index-3]
      this.setData({
        ['goodlist2['+ (index-3) +']']:!bol
      })
      if(index==3){
        for(var i=0;i<2;i++){
          this.setData({
            ['goodlist2['+ i +']']:!bol
          })
        }
      }
    }
  
  },
  onChange(){
    var reverse = this.data.checked;
    this.setData({
      checked:!this.data.checked
    })
    for(var i=0;i<2;i++){
      this.setData({
        ['goodlist2['+ i +']']:!reverse
      })
    }
    for(var j=0;j<3;j++){
      this.setData({
        ['goodlist1['+ j +']']:!reverse
      })
    } 
    console.log(this.data.goodlist1,this.data.goodlist2)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  }
})