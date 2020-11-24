const router = require('koa-router')()
const {
  login,
  register
} = require('./../controllers/auth')
const {
  listUsers,
  showUserDetail,
  updateUser,
  deleteUser
} = require('./../controllers/user')
const { getBanner } = require('./../controllers/banner')
const { getFrontpage } = require('./../controllers/frontpage')

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
router.get('/banner', async (ctx, next) => {
  getBanner(ctx, next)
})

//frontpage
router.get('/frontpage/:resid', async (ctx, next) => {
  getFrontpage(ctx, next)
})

module.exports = router