// /controllers/users.js

const usersDao = require(`../../db/daos/usersDao`)

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
