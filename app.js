// 导入 express 模块
const express = require('express')
// 导入 cors 中间件
const cors = require('cors')
// 导入并注册用户路由模块
const userRouter = require('./router/user')


// 创建 express 的服务器实例
const app = express()

//项目初始化
app.get('/', (req, res) => {
    res.send('JavaInterviewServer Running!')
})


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})



// 将 cors 注册为全局中间件
app.use(cors())
app.use(express.urlencoded({ extended: false }))


app.use('/api', userRouter)

