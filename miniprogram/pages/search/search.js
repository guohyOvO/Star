const app = getApp()
// 职业
const occupations = [
  {
    occupation: '计算机类',
    contains: [{
      name: '前端工程师',
      describe: '处理视觉和交互问题'
    },
    {
      name: '后端工程师',
      describe: '负责业务逻辑的编写'
    },
    {
      name: '软件测试师',
      describe: '测试项目的相关bug'
    },
    {
      name: '产品经理',
      describe: '产品的规划和管理人员'
    },
    {
      name: '网络安全工程师',
      describe: '对网络系统进行安全评估和安全加固'
    }],
  },

  {
    occupation: '数学类',
    contains: [{
      name: '数据分析师',
      describe: '对数据进行搜集、整理、分析，研究、评估'
    },
    {
      name: '统计师',
      describe: '负责企事业单位的数据处理'
    },
    {
      name: '财务分析师',
      describe: '分析公司的财务状况'
    },
    {
      name: '精算师',
      describe: '运用精算方法和技术解决经济问题'
    },
    {
      name: '会计',
      describe: '从事经济核算和监督工作'
    }],
  },

  {
    occupation: '工商管理类',
    contains: [{
      name: '经理助理',
      describe: ' 协助处理企业各种管理决策工作'
    },
    {
      name: '行政助理',
      describe: '负责员工档案管理'
    },
    {
      name: '销售经理',
      describe: '区域销售计划的制定与执行'
    },
    {
      name: '办公室文员',
      describe: '办公司资料的整理工作'
    },
    {
      name: '秘书',
      describe: '安排并督促日常工作'
    }],
  },

  {
    occupation: '外国语类',
    contains: [{
      name: '外贸业务员',
      describe: ' 从事对外贸易业务'
    },
    {
      name: '跟单员',
      describe: '跟踪产品，跟踪服务运作流向'
    },
    {
      name: '单证员',
      describe: '处理货物的交付、运输、保险、商检、结汇等工作'
    },
    {
      name: '报关员',
      describe: '向海关办理进出口货物报关纳税等通关手续'
    },
    {
      name: '翻译',
      describe: '从事外语翻译教学及与翻译有关的科研'
    }],
  },

  {
    occupation: '法学类',
    contains: [{
      name: '律师',
      describe: ' 法律审核、处理经济纠纷和诉讼'
    },
    {
      name: '检察员',
      describe: '监督其它机构动作的合法性'
    },
    {
      name: '公务员',
      describe: '统筹管理国家公共资源,维护国家法律规定贯彻执行'
    },
    {
      name: '法务',
      describe: '为企业保驾护航'
    },
    {
      name: '法警',
      describe: '行使职权，预防、制止和惩治妨碍审判活动'
    }],
  },

  {
    occupation: '金融类',
    contains: [{
      name: '金融分析师',
      describe: ' 对企业、项目或投资进行分析'
    },
    {
      name: '基金经理',
      describe: '负责所辖规模内的资产分配'
    },
    {
      name: '证券经纪人',
      describe: '为投资者提供证券交易服务'
    },
    {
      name: '证券分析员',
      describe: '提供证券研究报告、证券投资分析与建议'
    },
    {
      name: '客户经理',
      describe: '争揽业务、与客户进行沟通'
    }],
  },

  {
    occupation: '机械类',
    contains: [{
      name: '机械设计工程师',
      describe: ' 进行机械设备操作和维护保养规程的编写工作'
    },
    {
      name: '设备工程师',
      describe: '拟定、修订分公司电气设备管理规定'
    },
    {
      name: '机械工艺工程师',
      describe: '负责全公司工艺技术工作和工艺管理工作'
    },
    {
      name: '机械加工工艺员',
      describe: '组织部分零件加工方案设计'
    },
    {
      name: '结构工程师',
      describe: '负责各类建筑的骨干设计'
    }],
  },

  {
    occupation: '化学类',
    contains: [{
      name: '药剂师',
      describe: ' 负责提供药物知识及药事服务'
    },
    {
      name: '化学工程师',
      describe: '实施各项技术开发工作'
    },
    {
      name: '农业化学家',
      describe: '研究农业作物的各个方面的情况'
    },
    {
      name: '食品科学家',
      describe: '对食品加工厂进行详细检查'
    },
    {
      name: '金属冶炼师',
      describe: '提供专业技术判断并进行相关冶炼工作'
    }],
  },

]



Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    listCur: [],
    load: true,

    //isShow:false,

    val: '',//搜索框内容
    isSearch: true,
    isClear: false,

  },
  onLoad() {
    let list = occupations
    let listCur = list[0]
    for (let i = 0; i < occupations.length; i++) {
      list;
      list[i].name = String.fromCharCode(65 + i);
      list[i].id = i;
    }
    this.setData({
      list: list,
      listCur: listCur
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
    console.log(e.currentTarget)
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  getInput:function(e) {
    this.setData({
      val: e.detail.value
    })
    if(this.data.input.length>0){
      this.setData({
        isSearch:false,
        isClear:true,
      })
    }
    console.log(input)
  }
})