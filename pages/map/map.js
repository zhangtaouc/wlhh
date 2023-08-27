import { polyline } from '../../utils/map'
Page({
  data: {
    latitude: 36.0997,
    longitude: 120.46936,
    polyline: polyline,
    // markers:[{
		// 	iconPath: "../../images/home/head-bg.jpg",
		// 	longitude: polyline[0].points[0].longitude,
		// 	latitude: polyline[0].points[0].latitude,
		// 	id: 0,
		// 	width: 20,
		// 	height: 20
		// }],
    markers:[
  ]
  },
  onLoad() {
    const markers = []
    const line = polyline[0].points
    for(let i = 0; i < line.length; i++ ) {
      const item = {
        // iconPath: "../../images/home/head-bg.jpg",
        longitude: line[i].longitude,
        latitude: line[i].latitude,
        id: 0,
        width: 20,
        height: 20
      }
      markers.push(item)
    }
    this.setData({markers})
  }
})
