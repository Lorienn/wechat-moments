const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')

// 配置路由
router.get('/', async ctx => {
	console.log(ctx)
})

// 启动路由
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
console.log('listening on port 3000')