const regionCountUrl = 'https://api.bilibili.com/x/web-interface/online'

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

const regionCount = httpRequest('get', regionCountUrl)

async function getRegionCount(ctx, next) {
    regionCount.then((res) => {
        ctx.body = res.body  
    })
    
}

module.exports = {
    getRegionCount
}