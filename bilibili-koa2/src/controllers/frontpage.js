const frontpageUrl = 'https://api.bilibili.com/x/web-show/res/frontpage'
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

const configArr = [{
    name: 'douga',
    resid: '1576'
  }, {
    name: 'music',
    resid: '1580'
  }, {
    name: 'anime',
    resid: '1612'
  }, {
    name: 'guochuang',
    resid: '1920'
  }, {
    name: 'dance',
    resid: '1584'
  }, {
    name: 'game',
    resid: '1588'
  }, {
    name: 'technology',
    resid: '1592'
  }, {
    name: 'digital',
    resid: '3129'
  }, {
    name: 'life',
    resid: '1600'
  }, {
    name: 'kichiku',
    resid: '1608'
  }, {
    name: 'fashion',
    resid: '1604'
  }, {
    name: 'information',
    resid: '142'
  }, {
    name: 'ent',
    resid: '1596'
  }, {
    name: 'cinephilen',
    resid: '2210'
  }, {
    name: 'food',
    resid: '4249'
  }, {
    name: 'documentary',
    resid: '1634'
  }, {
    name: 'movie',
    resid: '1634'
  }, {
    name: 'tv',
    resid: '1634'
  }
];
const dougaFrontpage = {}

configArr.forEach((item) => {
  dougaFrontpage[item.name] = httpRequest('get', `https://api.bilibili.com/x/web-show/res/frontpage?resid=${item.resid}`)
})

async function getFrontpage(ctx, next) {
  dougaFrontpage[`${ctx.params.resid}`].then((res) => {
    ctx.body = res.body
  })
}

module.exports = {
  getFrontpage
}
