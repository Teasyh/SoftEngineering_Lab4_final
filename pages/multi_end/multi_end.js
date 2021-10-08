// pages/multi_end/multi_end.js
Page({
  /**
   * 页面的初始数据
   */
  
  data: {
      a:0,
      b:0,
      c:0,
      d:0,
      e:0,
      f:0,
      number:0,
      result:"",
      Sresult:new Array()
  },
  zaiLaiYiCi:function(){
    var SArray = JSON.stringify(this.data.Sresult)
    wx.redirectTo({
      url: '/pages/multi_start/multi_start?number='+this.data.number+'&Sresult='+SArray,
    })
  },
  jieshu:function(){
    var SArray = JSON.stringify(this.data.Sresult)
    wx.redirectTo({
      url: '/pages/ranking/ranking?number='+this.data.number+'&Sresult='+SArray,
    })
  },
  fanhui:function(){
    wx.redirectTo({
      url: '/pages/multi_prestart/multi_prestart',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var S = JSON.parse(options.Sresult);
    this.setData({
      a:options.dice1,
      b:options.dice2,
      c:options.dice3,
      d:options.dice4,
      e:options.dice5,
      f:options.dice6,
      result:options.result,
      number:options.number,
      cmp1:Number(options.number)%Number(10),
      cmp2:Math.floor(Number(options.number)/Number(10)),
      Sresult:S
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