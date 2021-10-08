// pages/multi_prestart/multi_prestart.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 传入参与人数以及设置数组保存结果
    number:0,
    Sresult:[],
  },
  goToMulti:function(){
    var SArray = JSON.stringify(this.data.Sresult);
<<<<<<< HEAD
    wx.navigateTo({
=======
    wx.redirectTo({
>>>>>>> b543bbe (最终版本)
      url: '/pages/multi_start/multi_start?number='+this.data.number+'&Sresult='+SArray
    })

  },
  getnumber:function(e){
    var val=e.detail.value;
    this.setData({
      number:val*10
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