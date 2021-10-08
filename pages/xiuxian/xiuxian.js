Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  // 添加休闲音乐
  data: {
    poster1: 'https://z3.ax1x.com/2021/10/07/5pP5Yd.jpg',
    name1: '明月几时有',
    author1: '刘雅文',
    src1: 'http://music.163.com/song/media/outer/url?id=1397574409.mp3',

    poster2: 'https://z3.ax1x.com/2021/10/07/5pCJbD.png',
    name2: 'Hey KONG',
    author2: '刘聪',
    src2: 'http://music.163.com/song/media/outer/url?id=1383954630.mp3',

    poster3: 'https://t9.baidu.com/it/u=1854295148,2210366981&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=8736df19036483f7173a2f817caae034',
    name3: 'Love Story',
    author3: 'Taylor Swift',
    src3: 'http://music.163.com/song/media/outer/url?id=1457707546.mp3',

    poster4: 'http://p2.music.126.net/2pFqN1pyqF2DHdSt1hQ10Q==/109951163063456206.jpg',
    name4: '只只',
    author4: '孟凡明',
    src4: 'http://music.163.com/song/media/outer/url?id=519136840.mp3',

    poster5: 'https://p1.music.126.net/SmaGv_bQTYy5_uOmnAz4Mw==/3285340746015046.jpg?param=130y130',
    name5: 'Love Yourself',
    author5: 'Justin Bieber',
    src5: 'http://music.163.com/song/media/outer/url?id=36496695.mp3',

    poster6: 'http://p1.music.126.net/PcJq6i7zMcPgudejdn1yeg==/109951163256302356.jpg',
    name6: '富士山下',
    author6: '陈奕迅',
    src6: 'http://music.163.com/song/media/outer/url?id=65766.mp3',
  },
  fanhui:function(){
    wx.redirectTo({
      url: '/pages/choose/choose',
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})