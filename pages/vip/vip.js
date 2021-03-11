// pages/vip/vip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currindex:0,
    vipPriv:[{name:"每日金币",src:"/pages/images/money@2x.png"},{name:"大额神券",src:"/pages/images/vip-ticket.png"},{name:"更多返利",src:"/pages/images/packet.png"},{name:"精选商品",src:"/pages/images/goods.png"},{name:"极速到账",src:"/pages/images/flash.png"},{name:"分享赚",src:"/pages/images/share.png"},{name:"专享活动",src:"/pages/images/events.png"},{name:"生日折扣",src:"/pages/images/birthday.png"},{name:"上架提醒",src:"/pages/images/vip-remind.png"},{name:"专属客服",src:"/pages/images/server.png"},]
  },
  //事件函数
  isactive:function(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({
      currindex: e.currentTarget.dataset.index
    });
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