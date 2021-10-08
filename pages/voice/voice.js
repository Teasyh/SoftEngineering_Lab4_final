const backgroundAudioManager = wx.getBackgroundAudioManager() //获取背景音频实例
backgroundAudioManager.title = '背景音乐'
backgroundAudioManager.singer = '中秋博饼'
backgroundAudioManager.coverImgUrl = '' //封面图 URL
// 设置了 src 之后会自动播放（src为云开发中云存储空间文件的链接）
backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=1310733611.mp3'
var that = backgroundAudioManager
// 背景音乐循环的方法
// 1、onEnded监听播放自然结束
backgroundAudioManager.onEnded(function() {
  // 2、必须重新设置src才能循环之后会自动播放
  backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=1310733611.mp3'
})
Page({
  data: { switchStatus: true },
  switchChange: function(e) {
    let switchStatus = e.detail.value//获取switch开关状态
      this.setData({
      switchStatus: switchStatus
    })
    if (switchStatus) {
      backgroundAudioManager.play()//播放
    } else {
      backgroundAudioManager.pause()//暂停
    }
  },
  fanhui:function(){
<<<<<<< HEAD
    wx.navigateTo({
=======
    wx.redirectTo({
>>>>>>> b543bbe (最终版本)
      url: '/pages/choose/choose',
    })
  }
})
