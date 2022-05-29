
Page({
  data: {
    userInfo: {},//创建用户信息数组
    hasUserInfo: false//设定一个是否获取了用户信息的初始值
  },
  CopyLink(){
    wx.navigateTo({
      url: '../about/result',
    })
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '必须授权才可以使用',
      success: res => {
        console.log('成功', res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail: res => {
        console.log('失败', res)
      }
    })
  },
})