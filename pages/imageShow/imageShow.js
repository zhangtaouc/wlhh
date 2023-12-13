// pages/imageShow/imageShow.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageList: [],
    imageDetail: "",
  },

  // 获取配置
  getImageList() {
    const that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url:
          "https://zhangtaouc-1314929551.cos.ap-nanjing.myqcloud.com/miniProgram/wlh/config/wlhImageList.json",
        method: "GET",
        success(config) {
          console.log("图片列表", config);
          if (config && config.data) {
            that.parseAppConfig(config.data);
            wx.setStorageSync("wlh_ImageList", JSON.stringify(config.data));
          }
        },
      });
    });
  },

  imageShow(image) {
    console.log(image);
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

  parseAppConfig(data) {
    this.setData({
      imageList: data?.imageList || [],
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const data = wx.getStorageSync("wlh_ImageList");
    console.warn("本地数据", data);
    if (data) {
      this.parseAppConfig(JSON.parse(data));
    }
    this.getImageList();
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
