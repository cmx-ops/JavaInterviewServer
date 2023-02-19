// /routes/users.js

const Router = require('koa-router')
const usersRouter = new Router({ //配置路由前缀为users的路由
    prefix: '/users'
})
const {getUserList,findUserById,createUser,updateUserById,deleteUserById}=require('../../controllers/userController/userController.js')

usersRouter.get('/', getUserList)
usersRouter.get('/:id', findUserById)
usersRouter.post('/', createUser)
usersRouter.put('/:id', updateUserById)
usersRouter.delete('/:id', deleteUserById)

module.exports=usersRouter
