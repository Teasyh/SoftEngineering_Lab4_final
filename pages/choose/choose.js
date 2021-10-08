Page({

  data: {

  },
  // 实现按键跳转功能
  danRenYouXi:function(){
    wx.redirectTo({
      url: '/pages/offLine_start/offLine_start',
    })
  },

  duoRenYouXi:function(){
    wx.redirectTo({
      url: '/pages/multi_prestart/multi_prestart',
    })
  },

  youXiGuiZe:function(){
    wx.redirectTo({
      url: '/pages/regular/regular',
    })
  },
  fanhui:function(){
    wx.redirectTo({
      url: '/pages/home/home',
    })
  },
  xiuxian:function(){
    wx.redirectTo({
      url: '/pages/xiuxian/xiuxian',
    })
  },
  yinyue:function(){
    wx.redirectTo({
      url: '/pages/voice/voice',
    })
  }
})
