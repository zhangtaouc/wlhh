const app = getApp();
Page({
  data: {
    latitude: 36.0997,
    longitude: 120.46936,
    polyline: [],
    markers: [],
    meetMapConfig: {},
    activeTab: "2024",
    tabList: ["2023", "2024"],
  },
  setMap() {
    const markers = [];
    const line = this.data.polyline[0].points;
    const meetMapConfig = app.globalData.meetMapConfig;
    for (let i = 0; i < line.length; i++) {
      const item = {
        // iconPath: "../../images/home/head-bg.jpg",
        longitude: line[i].longitude,
        latitude: line[i].latitude,
        id: i,
        width: 20,
        height: 20,
        callout: {
          content: line[i].content || "wlhh",
          borderColor: meetMapConfig.borderColor,
          borderRadius: meetMapConfig.borderRadius,
          bgColor: meetMapConfig.bgColor,
          padding: meetMapConfig.padding,
          fontSize: meetMapConfig.fontSize,
          color: meetMapConfig.color,
          display: meetMapConfig.display,
        },
      };
      markers.push(item);
    }
    this.setData({ markers, meetMapConfig });
  },
  changeyear(e) {
    this.setData({
      activeTab: e.detail.title,
      polyline: app.globalData.meetMaps[e.detail.title],
    });
    this.setMap();
  },
  onLoad() {
    this.setData({
      polyline: app.globalData.meetMaps["2024"],
    });
    console.log("张涛", app.globalData.polyline, app.globalData.meetMaps);
    this.setMap();
  },
});
