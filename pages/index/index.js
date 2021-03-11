//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arr:["../images/all@2x.png","../images/limit.png","../images/N@2x.png","../images/redpaper.png","../images/flowerofhope.png","../images/insurance.png","../images/telcharge.png","../images/confession.png","../images/Lotto.png","../images/merchant.png"],
    arr1:["全部分类","限时抢购","直播","红包劵","精准扶贫","保险服务","话费充值","表白交友","千库抽奖","周边商家"],
    isactive:false,
    tags:["精选", "吃货联盟", "品质生鲜", "母婴必备", "美妆护肤", "吃货必备"],
    tags2:["猜你喜欢", "好吃不贵", "优选好物", "口碑推荐", "精致生活", "猜你喜欢"],
    current:"0"
  },
  //事件处理函数
  go2pages:function(e){
    console.log(e.currentTarget)
    let index = e.currentTarget.dataset.index
    switch (index){
      case 0:
        wx.switchTab({
          url: '/pages/sort/sort',
        });
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/seckill/seckill',
          success:function(res){
            console.log(res)
          }
        })
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/live/live',
          success:function(res){
            console.log(res)
          }
        })
        break;
      case 8:
        wx.navigateTo({
          url: '/pages/lottery/lottery',
          success:function(res){
            console.log(res)
          }
        })
        break;
      case 9:
        wx.navigateTo({
          url: '/pages/ticket/ticket',
          success:function(res){
            console.log(res)
          }
        })
        break;
    }
  },
  getactive:function(e) {
    // 获取索引
    let index = e.currentTarget.dataset.index
    console.log(e.currentTarget)
    // 切换颜色 / 更新数据
    this.setData({
      current: index
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
