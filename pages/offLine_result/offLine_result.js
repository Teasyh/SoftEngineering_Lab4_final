Page({

  data: {
      a:0,
      b:0,
      c:0,
      d:0,
      e:0,
      f:0,
      result:""
  },
  zaiLaiYiCi:function(){
<<<<<<< HEAD
    wx.navigateTo({
=======
    wx.redirectTo({
>>>>>>> b543bbe (最终版本)
      url: '/pages/offLine_start/offLine_start',
    })
  },
  fanhui:function(){
<<<<<<< HEAD
    wx.navigateTo({
=======
    wx.redirectTo({
>>>>>>> b543bbe (最终版本)
      url: '/pages/choose/choose',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        a:options.dice1,
        b:options.dice2,
        c:options.dice3,
        d:options.dice4,
        e:options.dice5,
        f:options.dice6,
        result:options.result
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