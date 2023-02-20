const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const url = 'mongodb+srv://1064830687:caomingxing7520@cluster0.hfyyom0.mongodb.net/test'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
// 指向 testChat, 如果数据库没有 testChat ，会自动创建
mongoose.connect(url, options)

let db = mongoose.connection
db.on('connected', function () {
    console.log('Mongoose connected ' + url)
})

db.on('error', function (err) {
    console.log('Mongoose connection error: ' + err)
})
db.on('disconnected', function () {
    console.log('Mongoose connection disconnected')
})


