const { title } = require("proficiency")

// 题库
const titles = [{
  title: '1.我善于解决看起来困难的逻辑问题。',
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
  title: '2.我经常进行电子文档的书写和排版工作。',
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
  title: '3.我担任过学生干部。',
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
  title: '4.我设计过班服、黑板报等艺术作品。',
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
  title: '5.我看到许多句子都会有种画面感。',
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
  title: '6.在解决实际问题时，我经常能找到对应的物理模型。',
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
  title: '7.我善于发现一些别人无法发现问题。',
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
  title: '8.我善于调节团队气氛。',
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
  title: '9.我经常参加各种竞赛。',
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
  title: '10.我经常将时间花在查找网页、app等服务的bug上。',
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
  title: '11.我善于结识新朋友。',
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
  title: '12.我善于做重复的事情。',
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
  title: '13.在做事情前，我会想想有什么便捷方法吗。',
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
  title: '14.我的肢体表达能力很强。',
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
  title: '15.对于文章，我善于咬文嚼字，理解每个词的意义。',
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
  title: '16.我善于乐舞。',
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
  title: '17.我善于将事务进行关联并发现各自好的方面。',
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
  title: '18.当不了解计算机时，对计算机很好奇。',
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
  title: '19.无论遇到什么困难，我不会抱怨，会安然接受现状。',
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
  title: '20.去ktv等地方时，我总会想表现自己。',
  options: [{
    code: 'yes',
    option: '是'
  },
  {
    code: 'no',
    option: '否'
  }]
},
// {
//   title: '21.我很难持续集中注意力在2小时以上。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '22.我喜欢亲自动手制作一些小玩意儿，从中得到乐趣。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '23.我的动手能力很差。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '24.和不熟悉的人交谈对我来说毫不困难。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '25.和别人谈判时，我总是很容易放弃自己的观点。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '26.我很容易结识同性别的朋友。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '27.我做人做事，既不悲观，也不偏激，基本属于不偏不倚的温和型',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '28.当我开始做一件事情后，即使碰到再多的困难，我也要执著地干下去。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '29.我是一个沉静而不易动感情的人。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '30.做事情时，我喜欢避免干扰。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '31.我的理想是当一名科学家。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '32.与言情小说相比，我更喜欢推理小说。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '33.有些人太霸道，有时明明知道他们是对的，也要和他们对着干。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '34.我爱幻想。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '35.我总是主动地向别人提出自己的建议。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '36.我喜欢使用钳子、改锥、螺丝刀、万用表一类的工具。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '37.我乐于助人。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '38.我比赛或玩游戏，爱与别人打赌。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '39.我乐于按父母和老师的安排去做事。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '40.如果将来参加工作，我希望能经常换不同的工作来做。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '41.与朋友约好了见面，我总留有充裕的时间以免迟到。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '42.我喜欢阅读自然科学方面的书籍和杂志。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '43.如果掌握一门精湛的手艺并能以此赚到足够多的钱，我会感到满足。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '44.我对汽车司机、汽车修理工职业比较感兴趣。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '45.听别人谈“家中被盗”一类的事，很难引起我的同情。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '46.如果待遇相同，我宁愿当商品推销员，而不愿当图书管理员。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '47.我讨厌跟各类机械打交道。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '48.我小时候经常把玩具拆开，把里面看个究竟。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '49.当接受新任务后，我喜欢以自己的独特方法去完成它。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '50.我有文艺方面的天赋。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '51.我喜欢把一切安排得整整齐齐、井井有条。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '52.我喜欢做一名教师。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '53.和一群人在一起的时候，我总想不出恰当的话来说。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '54.看情感影片时，我常禁不住眼圈红润。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '55.我讨厌学数学。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '56.假如将我单独一个人留着实验室做实验，我会感到非常无聊。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '57.对于急躁、爱发脾气的人，我仍能以礼相待。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '58.遇到难解答的题目时，我常常中途放弃，改做下一题。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '59.大家公认我是一名勤劳踏实的、愿为大家服务的人。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
// {
//   title: '60.我喜欢协助老师做班级管理类的工作。',
//   options: [{
//     code: 'yes',
//     option: '是'
//   },
//   {
//     code: 'no',
//     option: '否'
//   }]
// },
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
      userSubject.userSelect=userSelect
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
      url: '../../result/ability/ability',//要跳转到的页面路径
    })
  },
})