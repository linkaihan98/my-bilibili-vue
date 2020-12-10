// 首页、各分区banner
const bannerUrl = 'http://api.bilibili.com/x/web-show/res/'
// const bannerUrl = 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=142'
// const frontpageUrl = 'https://api.bilibili.com/x/web-show/res/frontpage'

// 分区实时更新数量
const regionCountUrl = 'https://api.bilibili.com/x/web-interface/online'

// report四部分内容：轮播图，推荐视频，推广，广告
const rotationUrl = 'http://api.bilibili.com/x/web-show/res/locs?ids=3197'
const recommendUrl = 'http://api.bilibili.com/x/web-interface/index/top'
const extensionUrl = 'http://api.bilibili.com/x/web-show/res/locs?ids=34'
const adUrl = 'http://api.bilibili.com/x/web-show/res/locs?ids=29'

// 首页各分区热门
// params{number} 'rid=xxx'
const dynamicUrl = 'https://api.bilibili.com/x/web-interface/dynamic/region?ps=12&rid='

// 分区排行榜 热门一百条
// params{number} 'rid=xxx'
const rankUrl = 'https://api.bilibili.com/x/web-interface/ranking/v2?rid='

module.exports = {
  bannerUrl,
  regionCountUrl,
  rotationUrl,
  recommendUrl,
  extensionUrl,
  adUrl,
  dynamicUrl,
  rankUrl
}