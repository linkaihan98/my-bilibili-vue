const { httpRequest } = require('./../utils/httpRequest')
const rankMenuCongfig = require('./../../public/js/rankMenuCongfig')
const { rankUrl } = require('./../../public/js/urlConfig')

const rankList = {}

rankMenuCongfig.forEach((item) => {
  rankList[item.rid] = httpRequest('get', `${rankUrl}${item.rid}`)
})

async function getRank(ctx, next) {
  rankList[ctx.params.rid].then((res) => {
    ctx.body = res.body
  })
}

module.exports = {
    getRank
}
