const bannerUrl = 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=142'
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

const banner = httpRequest('get', bannerUrl)

async function getBanner(ctx, next) {
    banner.then((res) => {
        ctx.body = res.body
    })
}

module.exports = {
    getBanner
}
