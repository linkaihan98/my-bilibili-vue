// koa2-request 请求第三方资源

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

module.exports = {
  httpRequest
}