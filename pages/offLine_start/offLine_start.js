
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  offlineProceed:function(){
     wx.redirectTo({
       url: '/pages/offLine_proceed/offLine_proceed',
     })
 },
 fanhui:function(){
  wx.redirectTo({
    url: '/pages/choose/choose',
  })
},
  
})