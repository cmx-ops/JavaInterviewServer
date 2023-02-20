const Koa = require('koa');
const app = new Koa();

// 获取post提交的数据，解析请求体
const bodyparser = require('koa-bodyparser') // 引入koa-bodyparser
app.use(bodyparser())

//路由
const usersRouter=require('./routers/userRouter/userRouter.js')
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

//mongodb
const mongoose = require('./db/db')

app.use(async ctx => {
    ctx.body = 'JavaInterviewServer Running!';
});


app.listen(3000, () => {
    console.log('3000项目启动')
});
