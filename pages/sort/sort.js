// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey:0,
    currentTab:0,
    rem_imgs:[{src:"/pages/images/rem-shoes.png",name:"高跟鞋"},{src:"/pages/images/11629200@2x.png",name:"外国直邮"},{src:"/pages/images/11591088@2x.png",name:"单肩包"},{src:"/pages/images/12559133@2x.png",name:"手提包"},{src:"/pages/images/11695614@2x.png",name:"围巾"},{src:"/pages/images/11864495@2x.png",name:"项链"},{src:"/pages/images/11839754@2x.png",name:"手表"},{src:"/pages/images/12148968@2x.png",name:"斜挎包"},{src:"/pages/images/11763445@2x.png",name:"戒指"}]
  },
  //事件函数
  onChange(e) {
    this.setData({
      currentTab: e.detail
    })
  },
  catchTouchMove:function(res){
    return false
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
})