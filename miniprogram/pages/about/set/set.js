Component({
    options: {
      addGlobalClass: true,
    },
    data: {
      nickName:'',    //获取的微信用户名
      avatarUrl:'../../../images/tabbar/about.png',   //获取微信用户头像
      noLogin:true,   //用户是否登录（true为未登录）
    },
    ready(){
      //在页面加载时获取本地缓存中的user用户信息，如果有的话就是之前登录过，直接将缓存拿过来，无须再登录
      let getNickName=wx.getStorageSync('nickName')    //获取缓存用户名
      if(getNickName==''){        //如果缓存用户名为空字符串，代表还未登录，就将noLogin设置为true
        wx.setStorageSync('noLogin',true)
      }
      let getAvatarUrl='';      //获取缓存用户头像
      if(wx.getStorageSync('avatarUrl')!=''){     //如果用户头像有值，代表登录过，将值取出来
        getAvatarUrl=wx.getStorageSync('avatarUrl')
      }else{
        getAvatarUrl='../../../images/tabbar/about.png';     //否则使用原始图像，为colorui-master下自带的图像
      }
      let newnoLogin=true;
      //代表当前状态为未登录
      if(wx.getStorageSync('noLogin')==true){
        newnoLogin=true;
      }else{   //代表当前状态为登录
        newnoLogin=false;
      }
      //将获取到的用户信息回显到页面
      this.setData({
        nickName:getNickName,
        avatarUrl:getAvatarUrl,
        noLogin:newnoLogin,
      })
    },
    methods: {
      //登录
      login(e){
        wx.getUserProfile({
          desc: '必须授权才可以继续登录',
          //使用箭头函数就不需要将this改成that了
          success:res => {
            //setData做数据的动态绑定
            let user=res.userInfo;
            //拼接用户头像的链接
            let avatarUrlSub = user.avatarUrl.substring(0, 8)+res.userInfo.avatarUrl.substring(13, res.userInfo.avatarUrl.length - 3)+'0';
            // console.log("用户头像",avatarUrlSub) 
            user.avatarUrl=avatarUrlSub;
            //将用户信息缓存到本地，再在onLoad方法中将其加载出来
            wx.setStorageSync('nickName', user.nickName)
            wx.setStorageSync('avatarUrl', user.avatarUrl)
            wx.setStorageSync('noLogin', false)
            this.setData({   
              nickName:user.nickName,
              avatarUrl:user.avatarUrl,
              noLogin:false,
            })
          },
          fail:res => {
            console.log("授权失败",res)
          }
        })
      },
      //登出
      logout(e){
        this.setData({   
          nickName:'',
          avatarUrl:'../../../images/tabbar/about.png',
          noLogin:true,
        })
        //将用户信息置空（清空缓存）
        wx.setStorageSync('nickName', '')
        wx.setStorageSync('avatarUrl', '')
        wx.setStorageSync('noLogin', true)
      }
    }
  })
  