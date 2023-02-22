const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
        _id: Number, // 数字indexId
        name: String, // 账号
        hobby: Array // 用户名
    }
)
const usersModel = mongoose.model('users', usersSchema, 'user') //根据骨架创建模版
module.exports = usersModel
