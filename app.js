//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
/*     wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    }) */
    // 获取用户信息
/*     wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    }) */
  },
  globalData: {
    userInfo: null,
    islogin: false
  },
  setIsLogin(){
    let isLogin = wx.getStorageSync("isLogin")
    return isLogin !=null && isLogin !=""
  },
  checkLoging(){
    if(!this.setIsLogin()){
      wx.showModal({
        title:"系统提示",
        cotent:"您还没有登录",
        showCancel:true,
        cancelText:"算了",
        cancelColor:"#000:",
        confirmText:"去登陆",
        confirmColor:"#3cc51f",
        success:res=>{
            if(res.confirm){
                //用户同意 跳转到登录界面
                wx.navigateTo({
                    url:"/pages/login/login"
                });
            }else{
                wx.switchTab({
                    url:"/pages/index/index"
                })
            }
        }
    })
    return
    }

  }
})