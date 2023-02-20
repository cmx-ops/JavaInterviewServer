// /controllers/users.js

const usersDao = require(`../../db/daos/usersDao`)

// 虚拟数据
const db = [{
    name: '小明',
    age: '13',
    sex: '男'
}, {
    name: '小红',
    age: '15',
    sex: '女'
}]

class UsersCtrl {
    async getUserList(ctx) {
        ctx.set('Allow', 'GET,POST') // 设置响应头Headers
        let data = await usersDao.getUser()
        ctx.body = data
    }

    findUserById(ctx) {

    }

    createUser(ctx) {
        db.push(ctx.request.body)
        ctx.body = ctx.request.body
    }

    updateUserById(ctx) {
        db[ctx.params.id] = ctx.request.body
        ctx.body = ctx.request.body
    }

    deleteUserById(ctx) {
        db.splice(ctx.params.id, 1) // 假设id为数据索引
        ctx.status = 204 // No content
    }
}

module.exports = new UsersCtrl()
