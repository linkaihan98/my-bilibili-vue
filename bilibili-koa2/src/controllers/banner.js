const baseUrl = 'http://api.bilibili.com/x/web-show/res/'
// const bannerUrl = 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=142'
// const frontpageUrl = 'https://api.bilibili.com/x/web-show/res/frontpage'

const configArr = [
  {
    cname: '首页',
    name: 'main',
    params: 'loc?pf=0&id=142'
  }, {
    cname: '动画',
    name: 'douga',
    params: 'frontpage?resid=1576'
  }, {
    cname: '音乐',
    name: 'music',
    params: 'frontpage?resid=1580'
  }, {
    cname: '番剧',
    name: 'anime',
    params: 'frontpage?resid=1612'
  }, {
    cname: '国创',
    name: 'guochuang',
    params: 'frontpage?resid=1920'
  }, {
    cname: '舞蹈',
    name: 'dance',
    params: 'frontpage?resid=1584'
  }, {
    cname: '游戏',
    name: 'game',
    params: 'frontpage?resid=1588'
  }, {
    cname: '知识',
    name: 'technology',
    params: 'frontpage?resid=1592'
  }, {
    cname: '数码',
    name: 'digital',
    params: 'frontpage?resid=3129'
  }, {
    cname: '生活',
    name: 'life',
    params: 'frontpage?resid=1600'
  }, {
    cname: '鬼畜',
    name: 'kichiku',
    params: 'frontpage?resid=1608'
  }, {
    cname: '时尚',
    name: 'fashion',
    params: 'frontpage?resid=1604'
  }, {
    cname: '热门',
    name: 'popular',
    params: 'frontpage?resid=142'
  }, {
    cname: '资讯',
    name: 'information',
    params: 'frontpage?resid=142'
  }, {
    cname: '娱乐',
    name: 'ent',
    params: 'frontpage?resid=1596'
  }, {
    cname: '影视',
    name: 'cinephile',
    params: 'frontpage?resid=2210'
  }, {
    cname: '美食',
    name: 'food',
    params: 'frontpage?resid=4249'
  }, {
    cname: '放映厅',
    name: 'cinema',
    params: 'frontpage?resid=1634'
  }, {
    cname: '电影',
    name: 'movie',
    params: 'frontpage?resid=1634'
  }, {
    cname: '电视',
    name: 'tv',
    params: 'frontpage?resid=1634'
  }
];

const koa2Req = require('koa2-request')
const httpRequest = async (method, url) => {
  let options = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  const res = await koa2Req(options)
  return res
}

const bannerList = {}

configArr.forEach((item) => {
  bannerList[item.name] = httpRequest('get', `${baseUrl}${item.params}`)
})

async function getBanner(ctx, next) {
  bannerList[ctx.params.resid].then((res) => {
    ctx.body = res.body
  })
}

module.exports = {
    getBanner
}
