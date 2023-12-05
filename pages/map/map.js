const app = getApp();
Page({
  data: {
    latitude: 36.0997,
    longitude: 120.46936,
    polyline: [],
    markers: [],
  },
  onLoad() {
    this.setData({
      polyline: app.globalData.meetMap,
    });
    console.log("张涛", app.globalData.polyline);
    const markers = [];
    const line = this.data.polyline[0].points;
    for (let i = 0; i < line.length; i++) {
      const item = {
        // iconPath: "../../images/home/head-bg.jpg",
        longitude: line[i].longitude,
        latitude: line[i].latitude,
        id: 0,
        width: 20,
        height: 20,
      };
      markers.push(item);
    }
    this.setData({ markers });
  },
});
