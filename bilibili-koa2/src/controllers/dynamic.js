const { httpRequest } = require('./../utils/httpRequest')
const rankMenuCongfig = require('./../../public/js/rankMenuCongfig')
const { dynamicUrl } = require('./../../public/js/urlConfig')


const dynamicList = {}

rankMenuCongfig.forEach((item) => {
  dynamicList[item.rid] = httpRequest('get', `${dynamicUrl}${item.rid}`)
})

async function getDynamic(ctx, next) {
  dynamicList[ctx.params.rid].then((res) => {
    ctx.body = res.body
  })
}

module.exports = {
    getDynamic
}
