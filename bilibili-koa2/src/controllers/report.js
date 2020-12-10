const { httpRequest } = require('./../utils/httpRequest')
const { rotationUrl, recommendUrl, extensionUrl, adUrl } = require('./../../public/js/urlConfig')


const adBannerUrl = 'http://api.bilibili.com/x/web-show/res/locs?ids=40'


const rotation = httpRequest('get', rotationUrl)
const recommend = httpRequest('get', recommendUrl)
const extension = httpRequest('get', extensionUrl)
const ad = httpRequest('get', adUrl)
const adBanner = httpRequest('get', adBannerUrl)

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

async function getAdBanner(ctx, next) {
    adBanner.then((res) => {
        ctx.body = res.body
    })
}

module.exports = {
    getRotation,
    getRecommend,
    getExtension,
    getAd,
    getAdBanner
}
