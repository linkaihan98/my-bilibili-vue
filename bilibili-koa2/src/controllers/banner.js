const { httpRequest } = require('./../utils/httpRequest')
const bannerConfig = require('./../../public/js/bannerConfig')
const { bannerUrl } = require('./../../public/js/urlConfig')


const bannerList = {}

bannerConfig.forEach((item) => {
  bannerList[item.name] = httpRequest('get', `${bannerUrl}${item.params}`)
})

async function getBanner(ctx, next) {
  bannerList[ctx.params.resid].then((res) => {
    ctx.body = res.body
  })
}

module.exports = {
    getBanner
}
