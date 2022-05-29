Page({
  data: {
    cardCur: 0,
    options: {
      addGlobalClass: true,
    },
    url:[],
    //分类测试主题
    elements: [{
      title: '性格测试',
      name: 'personality',
      icon: 'newsfill'
    },
    {
      title: '能力测试',
      name: 'proficiency',
      icon: 'upstagefill'
    }],

    //轮播图
    swiperList: [{
      id: 0,
      type: 'image',
      url: '../../article/paper1/paper1',
      src: '/images/1.png',
      title: '计算机各类职业在2021年的收入对比..'
    }, {
      id: 1,
      type: 'image',
      url: 'pages/article/paper1/paper1',
      src: '/images/2.jpg',
      title: '全国计算机行业的收入对比..'
    }, {
      id: 2,
      type: 'image',
      url: 'pages/article/paper1/paper1',
      src: '/images/3.jpg',
      title: '2020中国软件和信息服务业主要发展目标..'
    }],
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})