// pages/result/result.js
Page({
  globalData: {
    WorkList: [{
        url: '../all/all',
        name: 'java后端工程师'
      },
      {
        url: '../all/all',
        name: '前端工程师'
      },
      {
        url: '../all/all',
        name: '软件测试工程师'
      },
      {
        url: '../all/all',
        name: '数据库管理与应用'
      },
      {
        url: '../all/all',
        name: '动画制作'
      },
      {
        url: '../all/all',
        name: '广告设计与制作'
      },
      {
        url: '../all/all',
        name: '网站维护'
      },
      {
        url: '../all/all',
        name: '嵌入式开发'
      },
      {
        url: '../all/all',
        name: '移动应用开发'
      },
    ]
  },
  data: {
  },
  onLoad() {
    let WorkList=this.globalData.WorkList
    this.setData({
      WorkList
    })
  },
})