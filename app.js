// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    meetMap: [],
    meetMaps: {},
    meetMapConfig: {
      content: 'wlhh',
      borderColor: '#fff',
      borderRadius: 10,
      bgColor: '#888',
      padding: 5,
      fontSize: 11,
      color: '#000',
      display: 'ALWAYS',
      scale: 1, // 缩放比例
      showLocation: false, // 显示带有方向的当前定位点
      enableSatellite: false, // 卫星图
      enableTraffic: false, // 事实路况
      enableBuilding: false // 建筑物
    }
  }
})
