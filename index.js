const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello cmx hahahhahahahha';
});


app.listen(3008, () => {
    console.log('3008项目启动')
});
