const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const koa2Req = require('koa2-request')
const { verifyToken } = require('./tool')

// 配置路由
router.get('/', async ctx => {
	verifyToken(ctx)
})
router.get('/login', async ctx => {
/* 为了 access_token 的安全性，后端 API 不能直接在小程序内通过 wx.request 调用
  通过 wx.login 接口获得临时登录凭证 code 后传到开发者服务器调用此接口获取用户openid和session_key
	【注意】接口URL中的appid和secreat需要替换为小程序的appid和secret */
	const { code } = ctx.query
	const res = await koa2Req(`https://api.weixin.qq.com/sns/jscode2session?appid=appid&secret=secret&js_code=${code}&grant_type=authorization_code`)
	ctx.body = res.body
})

// 启动路由
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
console.log('listening on port 3000')