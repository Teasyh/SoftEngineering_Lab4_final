// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Sresult:new Array()
  },

<<<<<<< HEAD
=======
  fanhui:function(){
    wx.redirectTo({
      url: '/pages/choose/choose',
    })
  },
>>>>>>> b543bbe (最终版本)
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var S = JSON.parse(options.Sresult);
    this.setData({
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