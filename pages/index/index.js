//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg: 'hello world!',
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' }, 
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' }, 
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' }, 
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ] 
  },
  clickMe: function () {
    this.setData({msg : 'this is my first wxapp!'})
  },
  map: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })
  },
  onLoad: function(){
  }
})
