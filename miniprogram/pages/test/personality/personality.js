const { title } = require("personality")

// 题库
const titles = [{
  title: '1.我喜欢把一件事情做完后再做另一件事。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '2.在学习和生活中我喜欢独自筹划，不愿受别人干涉。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '3.在集体讨论中，我往往保持沉默。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '4.我喜欢做戏剧、音乐、歌舞、新闻采访等方面的工作。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '5.每次写信我都一挥而就，不再重复。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '6.我经常不停地思考某一问题，直到想出正确的答案。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '7.对别人借我的和我借别人的东西，我都能记得很清楚。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '8.我喜欢抽象思维的工作，不喜欢动手的工作。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '9.我喜欢成为人们注意的焦点。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '10.我喜欢不时地夸耀一下自己取得的好成就。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '11.我很渴望参加探险活动。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '12.当我一个独处时，会感到更愉快。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '13.我喜欢在做事情前，对此事情做出细致的安排。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '14.我讨厌修理自行车、电器一类的工作。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '15.我喜欢参加各种各样的聚会。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '16.对于将来的职业，我愿意从事虽然工资少、但是比较稳定的职业。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '17.我常陶醉于音乐之中。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '18.我办事很少思前想后。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '19.我在处理学校事务时，经常请示老师。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '20.比较普通的游戏，我更喜欢需要动脑子的智力游戏。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '21.我很难持续集中注意力在2小时以上。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '22.我喜欢亲自动手制作一些小玩意儿，从中得到乐趣。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '23.我的动手能力很差。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '24.和不熟悉的人交谈对我来说毫不困难。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '25.和别人谈判时，我总是很容易放弃自己的观点。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '26.我很容易结识同性别的朋友。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '27.我做人做事，既不悲观，也不偏激，基本属于不偏不倚的温和型',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '28.当我开始做一件事情后，即使碰到再多的困难，我也要执著地干下去。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '29.我是一个沉静而不易动感情的人。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '30.做事情时，我喜欢避免干扰。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '31.我的理想是当一名科学家。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '32.与言情小说相比，我更喜欢推理小说。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '33.有些人太霸道，有时明明知道他们是对的，也要和他们对着干。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '34.我爱幻想。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '35.我总是主动地向别人提出自己的建议。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '36.我喜欢使用钳子、改锥、螺丝刀、万用表一类的工具。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '37.我乐于助人。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '38.我比赛或玩游戏，爱与别人打赌。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '39.我乐于按父母和老师的安排去做事。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '40.如果将来参加工作，我希望能经常换不同的工作来做。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '41.与朋友约好了见面，我总留有充裕的时间以免迟到。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '42.我喜欢阅读自然科学方面的书籍和杂志。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '43.如果掌握一门精湛的手艺并能以此赚到足够多的钱，我会感到满足。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '44.我对汽车司机、汽车修理工职业比较感兴趣。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '45.听别人谈“家中被盗”一类的事，很难引起我的同情。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '46.如果待遇相同，我宁愿当商品推销员，而不愿当图书管理员。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '47.我讨厌跟各类机械打交道。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '48.我小时候经常把玩具拆开，把里面看个究竟。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '49.当接受新任务后，我喜欢以自己的独特方法去完成它。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '50.我有文艺方面的天赋。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '51.我喜欢把一切安排得整整齐齐、井井有条。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '52.我喜欢做一名教师。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '53.和一群人在一起的时候，我总想不出恰当的话来说。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '54.看情感影片时，我常禁不住眼圈红润。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '55.我讨厌学数学。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '56.假如将我单独一个人留着实验室做实验，我会感到非常无聊。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '57.对于急躁、爱发脾气的人，我仍能以礼相待。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '58.遇到难解答的题目时，我常常中途放弃，改做下一题。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '59.大家公认我是一名勤劳踏实的、愿为大家服务的人。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
{
  title: '60.我喜欢协助老师做班级管理类的工作。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
]
Page({
  data: {
    percent: 0,//初始化进度条
    total: 0,//初始化总题目数
    isSelect: false,//选择按钮
    isComplete: false,
    subject: null,//题目
    current: 1,//当前题目编号
    userSelect: '',//用户选择
    userSubject: null,//用户题集数组,包含题目和用户选择
  },

  //进入界面就执行的方法，直接显示第一题
  onLoad() {
    let subject = titles[0]
    console.log('subject', subject)
    this.setData({
      subject,
      total: titles.length
    })
  },

  //题目选择事件
  radioChange(e) {
    console.log('选择', e.detail.value)
    this.setData({
      userSelect: e.detail.value
    })
  },

  //提交并进入下一题，按钮点击事件
  submit() {
    //判断是否空选，并且存储用户选择数据
    let userSelect = this.data.userSelect
    if (!userSelect) {
      wx.showToast({
        icon: 'none',
        title: '不能空选，请选择',
      })
      return
    } else {
      let userSubject = this.data.subject
      userSubject.userSelect = userSelect
      console.log('用户选择', userSubject)
    }

    //进度条更新
    let num = this.data.current + 1
    this.setData({
      percent: ((100 / titles.length) * (num - 1)).toFixed(0)
    })

    //题目更新
    let subject = titles[num - 1]
    if (num > titles.length) {
      wx.showToast({
        title: '完成',
      })
      let isComplete = this.data.isComplete
      isComplete = true
      this.setData({
        isComplete
      })
      console.log(isComplete)
      return
    }

    //下一次循环的一些值重设
    this.setData({
      subject: subject,
      current: num,
      isSelect: false,
      userSelect: '',
    })
  },

  gotoPage: function () {
    wx.navigateTo({
      url: '../../result/character/character',//要跳转到的页面路径
    })
  },
})