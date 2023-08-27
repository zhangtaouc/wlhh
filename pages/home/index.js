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
    if (event.detail === 'wlh') {
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
      overFlowInfo.title = '万年泉'
      overFlowInfo.info.push('第二次和你一块吃饭', '那个东西好像火锅，但又不像')
      this.setData({overFlowInfos: overFlowInfo})
      console.log(overFlowInfo, this.data.overFlowInfos)
    }
    if (number === 3) {
      // 浮山
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '浮山'
      overFlowInfo.info.push('吃完饭我们去了浮山', '那天你穿的美美的', '从那以后便喜欢上你')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 4) {
      // 丽达
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '丽达'
      overFlowInfo.info.push('这天是6月8号', '第三次见你，去吃了你喜欢的排骨', '从这天开始我们双方陷入思想挣扎', '但我从这一天开始决定“死缠烂打”')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 5) {
      // 院里汤包
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '院里汤包'
      overFlowInfo.info.push('这一天我们去吃了我见过“最可爱的包子”', '由于多加了一笼包子，引发了第二天你吃太饱🤗', '你身穿黑色裙子，真好看')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 6) {
      // 梵高
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '我画下了梦'
      overFlowInfo.info.push('我们去万达看了梵高的画', '梵高的画很漂亮', '也看见了最漂亮的你', '至此，我无法自拔')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 7) {
      // 海大
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '同学远去'
      overFlowInfo.info.push('阔别了三年的烧烤摊', '烧烤和烤鱼虽然味道不好', '但和你一块意义非凡', '还好有你')
      this.setData({overFlowInfos: overFlowInfo})
    }
    if (number === 8) {
      // 丽达
      let overFlowInfo = { title: '', info: [] }
      overFlowInfo.title = '最后一个夏天'
      overFlowInfo.info.push('23年最后一个夏天', '你回家两天', '两天没见你，甚是想念', '去丽达吃了炒鸡', '不巧的是车半路坏了0_o')
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
      overFlowInfo.title = '未来可期'
      overFlowInfo.info.push('期待和你一起走过更多个夏天', '以后每个夏天都有你')
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
