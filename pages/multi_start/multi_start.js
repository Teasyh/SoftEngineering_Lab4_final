// pages/multi_start/multi_start.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    number:0,
    Sresult:new Array(),
    cmp1:0,
  },

  multiProceed:function(){
    var count = this.data.number;
    this.setData({
      number:Number(count)+Number(1)
    })
    var SArray = JSON.stringify(this.data.Sresult);
    wx.redirectTo({
      url: '/pages/multi_proceed/multi_proceed?number='+this.data.number+'&Sresult='+SArray
    })
  },  
  fanhui:function(){
<<<<<<< HEAD
    wx.navigateTo({
=======
    wx.redirectTo({
>>>>>>> b543bbe (最终版本)
      url: '/pages/multi_prestart/multi_prestart',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var S = JSON.parse(options.Sresult);
    this.setData({
      number:options.number,
      Sresult:S,
      // 计算是第几位玩家
      cmp1:Number(options.number)%Number(10)+Number(1),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})