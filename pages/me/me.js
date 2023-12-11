// pages/me/me.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShowOver: false,
    headerBg: "",
    imageList: [],
    map: {},
    picture: {},
    imageDetail: "",
    isShowHour: true,
    contentTitle: "",
    meetTime: 1700998800000,
    showTime: {},
    someThing: {},
    isShowWord: false,
    meetInfo: [],
  },

  controlwOver() {
    this.setData({ isShowOver: !this.data.isShowOver });
  },
  changeShowTime() {
    this.setData({
      isShowHour: !this.data.isShowHour,
    });
    if (!this.data.isShowHour) {
      this.setTime();
    }
  },
  showWord() {
    this.setData({
      isShowWord: !this.data.isShowWord,
    });
  },
  imageShow(image) {
    if (this.data.imageDetail) {
      this.setData({
        imageDetail: "",
      });
      return;
    }
    this.setData({
      imageDetail: image.currentTarget.dataset.image,
    });
  },

  goMap() {
    wx.navigateTo({
      url: "../map/map",
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const localData = wx.getStorageSync("wlh_metConfig");
    console.log("本地", localData);
    if (localData) {
      this.parseData(JSON.parse(localData));
    }
    this.initApp();
  },

  initApp() {
    this.getMeConfig();
  },

  getMeConfig() {
    const that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url:
          "https://zhangtaouc-1314929551.cos.ap-nanjing.myqcloud.com/miniProgram/wlh/config/wlhMeConfig.json",
        method: "GET",
        success(config) {
          console.log("获取个人信息", config);
          const data = config?.data;
          if (data) {
            that.parseData(data);
            wx.setStorageSync("wlh_metConfig", JSON.stringify(data));
            that.setTime();
          }
        },
      });
    });
  },

  // 解析数据
  parseData(data) {
    this.setData({
      headerBg: data.headerBg,
      imageList: data.imageList,
      map: data.map,
      picture: data.picture,
      contentTitle: data.contentTitle,
      meetTime: data.meetTime,
      someThing: data.someThing,
      meetInfo: data.meetInfo,
    });
  },

  setTime() {
    let that = this;
    const timer = setInterval(() => {
      const meetTime = that.data.meetTime;
      const currentTime = Date.parse(new Date());
      let time = that.intervalTime(meetTime, currentTime);
      console.log(time, "张涛");
      this.setData({
        showTime: time,
      });
      if (that.data.isShowHour) {
        clearInterval(timer);
      }
    }, 1000);
  },
  //计算两个时间之间的时间差 多少天时分秒
  intervalTime(startTime, endTime) {
    // 这里取绝对值 保证结果为正
    let _timeInterval = Math.abs(endTime - startTime);

    let hours = Math.floor(parseInt(_timeInterval) / 1000 / 3600);
    let minutes = Math.floor(parseInt(_timeInterval) / 1000 / 60);
    let seconds = Math.floor(parseInt(_timeInterval) / 1000);
    //取模处理 60进制
    minutes = minutes % 60;
    seconds = seconds % 60;
    // 判断是否为空
    let str = "";
    hours = hours ? hours + "小时" : "";
    minutes = minutes ? minutes + "分" : "";
    seconds = seconds ? seconds + "秒" : "";
    str = hours + minutes + seconds;
    return {
      min: str,
      hour: Math.floor(parseInt(_timeInterval) / 1000 / 3600 / 24),
    };
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
