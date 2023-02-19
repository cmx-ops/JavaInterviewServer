// /controllers/users.js

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

class UsersCtrl{
    getUserList(ctx){
        ctx.set('Allow', 'GET,POST') // 设置响应头Headers
        ctx.body = db
    }
    findUserById(ctx){
        if (ctx.params.id >= db.length) {
            ctx.throw(412, '先决条件错误，id大于数组长度')
        }
        ctx.body = db[ctx.params.id] // 假设id为数据索引
    }
    createUser(ctx){
        db.push(ctx.request.body)
        ctx.body = ctx.request.body
    }
    updateUserById(ctx){
        db[ctx.params.id] = ctx.request.body
        ctx.body = ctx.request.body
    }
    deleteUserById(ctx){
        db.splice(ctx.params.id, 1) // 假设id为数据索引
        ctx.status = 204 // No content
    }
}

module.exports=new UsersCtrl()
