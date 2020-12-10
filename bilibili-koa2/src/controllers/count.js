const { httpRequest } = require('./../utils/httpRequest')
const { regionCountUrl } = require('./../../public/js/urlConfig')


const regionCount = httpRequest('get', regionCountUrl)

async function getRegionCount(ctx, next) {
    regionCount.then((res) => {
        ctx.body = res.body  
    })
    
}

module.exports = {
    getRegionCount
}