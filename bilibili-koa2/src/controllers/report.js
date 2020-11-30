const rotationUrl = 'http://api.bilibili.com/x/web-show/res/locs?ids=3197'
const recommendUrl = 'http://api.bilibili.com/x/web-interface/index/top'
const extensionUrl = 'http://api.bilibili.com/x/web-show/res/locs?ids=34'
const adUrl = 'http://api.bilibili.com/x/web-show/res/locs?ids=29'


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

const rotation = httpRequest('get', rotationUrl)
const recommend = httpRequest('get', recommendUrl)
const extension = httpRequest('get', extensionUrl)
const ad = httpRequest('get', adUrl)

async function getRotation(ctx, next) {
    rotation.then((res) => {
        ctx.body = res.body
    })
}

async function getRecommend(ctx, next) {
    recommend.then((res) => {
        ctx.body = res.body
    })
}

async function getExtension(ctx, next) {
    extension.then((res) => {
        ctx.body = res.body
    })
}

async function getAd(ctx, next) {
    ad.then((res) => {
        ctx.body = res.body
    })
}

module.exports = {
    getRotation,
    getRecommend,
    getExtension,
    getAd
}
