// const Koa = require('koa')
const Koa = require('./my-koa')
const app = new Koa()

app.use((ctx, next) => {
    ctx.body = 'hello mini-koa'
    next()
})

app.use(ctx => {
    ctx.body = 'hahahahahahaha'
})

app.listen(8080, () => console.log('server is running at 8080'))
