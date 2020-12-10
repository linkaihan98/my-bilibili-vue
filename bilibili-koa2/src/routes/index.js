const router = require('koa-router')()
const { login, register } = require('./../controllers/auth')

const { listUsers, showUserDetail, updateUser, deleteUser } = require('./../controllers/user')

const { getBanner } = require('./../controllers/banner')
const { getRegionCount } = require('./../controllers/count')

const { getRotation, getRecommend, getExtension, getAd, getAdBanner } = require('./../controllers/report')

const { getDynamic } = require('./../controllers/dynamic')

const { getRank } = require('./../controllers/rank')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


// auth 相关的路由
router.post('/auth/login', async (ctx, next) => {
  login(ctx, next)
});
router.post('/auth/register', async (ctx, next) => {
  register(ctx, next)
});

// users 相关的路由
router.get('/users', async (ctx, next) => {
  listUsers(ctx, next)
});
router.get('/users/:id', async (ctx, next) => {
  showUserDetail(ctx, next)
});
router.put('/users/:id', async (ctx, next) => {
  updateUser(ctx, next)
});
router.delete('/users/:id', async (ctx, next) => {
  deleteUser(ctx, next)
});

//banner
router.get('/banner/:resid', async (ctx, next) => {
  getBanner(ctx, next)
})

//getRegionCount
router.get('/count', async (ctx, next) => {
  getRegionCount(ctx, next)
})

// report 相关的路由
router.get('/report/rotation', async (ctx, next) => {
  getRotation(ctx, next)
});
router.get('/report/recommend', async (ctx, next) => {
  getRecommend(ctx, next)
});
router.get('/report/extension', async (ctx, next) => {
  getExtension(ctx, next)
});
router.get('/report/ad', async (ctx, next) => {
  getAd(ctx, next)
});
router.get('/report/adbanner', async (ctx, next) => {
  getAdBanner(ctx, next)
});

// dynamic
router.get('/dynamic/:rid', async (ctx, next) => {
  getDynamic(ctx, next)
});

// rank
router.get('/rank/:rid', async (ctx, next) => {
  getRank(ctx, next)
});

module.exports = router
