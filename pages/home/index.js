import { polyline } from '../../utils/map'
// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    isShowOverFlow: false,
    isShowMeet: false,
    overFlowInfos: { title: '', info: [] },
    isShowFirstVisit: true,
    username: '',
    usernameInfo: '',
    isLoadSuccess: false
  },
  goMap() {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  changeName(event) {
    console.log(event.detail)
    if (event.detail === 'cxl') {
      this.setData({usernameInfo: '正确', isShowFirstVisit: false})
      setTimeout(() => {
        this.setData({usernameInfo: '正确', isShowFirstVisit: false})
        this.setVisitRecord('isVisitted', 'true')
      }, 1000)
    } else {
      this.setData({usernameInfo: '不对哟'})
    }
  },
  closeOverFlow() {
    this.setData({ isShowOverFlow: false });
  },
  onClickOverFlow(e) {
    console.log(e)
    let number = e.currentTarget.dataset.index
    console.log( number)
    if (number === 2) {
      // 万年泉
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '第一个语音'
      overFlowInfo.info.push('那晚8点多', '我说我困了', '过一会你就打语音过来', '我瞬间不困了', '很激动')
      this.setData({overFlowInfos: overFlowInfo})
      console.log(overFlowInfo, this.data.overFlowInfos)
    }
    if (number === 3) {
      // 浮山
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '熬夜'
      overFlowInfo.info.push('那几晚我们聊的很晚', '经常到三四点', '那会你失眠、睡眠不好', '怕你睡不着，等你睡着了我才睡', '第二天虽困但很开心')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 4) {
      // 丽达
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '溜达'
      overFlowInfo.info.push('不知不觉的', '每天3点左右你都要陪我溜达会', '但是我只能聊15分钟', '每天都期待着那15分钟', '期待着溜达')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 5) {
      // 院里汤包
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '打字'
      overFlowInfo.info.push('不知不觉', '我们开启了另外一种聊天方式🤗', '你说话我打字')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 6) {
      // 梵高
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '10月的最后一天'
      overFlowInfo.info.push('今天天气有点冷', '给你写了个小作文', '第二天你生病了', '我很惭愧，在你生病的时候我还那样。。。', '很对不起你')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 7) {
      // 海大
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '11月'
      overFlowInfo.info.push('11月的开头对你不友好', '生病请假去打针', '期间我又犯毛病了', '惹得你给我写了小作文', '对不起')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 8) {
      // 丽达
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '王者荣耀'
      overFlowInfo.info.push('打了三局游戏', '你玩的瑶妹', '地表最强辅助！')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 9) {
      // 金狮
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '沙滩的歌声'
      overFlowInfo.info.push('喷泉、沙滩、歌声、你', '我们吃了饺子、鱼，味道不错', '饭后沙滩漫步',  '你身穿蓝色裙子，美美的', '8.10')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 10) {
      // 台东
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '小吃&炎热的海岸'
      overFlowInfo.info.push('周六的下午异常炎热', '台东的街道还是那么热闹', '在台东略微吃了点东西',  '来到海边','去看了海尔的冰山之角','看到了海信楼', '8.12')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 100) {
      // 未来
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '未完'
      overFlowInfo.info.push('待续', '每周一更哦')
      this.setData({overFlowInfos: overFlowInfo})
    }
    this.setData({ isShowMeet: number === 1 });
    this.setData({ isShowOverFlow: true });
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onLoad() {
    this.getVisitRecord('isVisitted')
  },
  onLaunch() {
  },
  setVisitRecord(key, value) {
    wx.setStorageSync(key, value)
  },
  getVisitRecord(key) {
    const data = wx.getStorageSync(key)
    console.log('缓存', data)
    if (data && String(data) === 'true') {
      this.setData({isShowFirstVisit: false})
    }
    this.setData({isLoadSuccess: true})
  }

})
