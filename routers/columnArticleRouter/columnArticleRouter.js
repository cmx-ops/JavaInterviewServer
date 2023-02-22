// /routes/users.js

const Router = require('koa-router')
const columnArticle = new Router({ //配置路由前缀为users的路由
    prefix: '/column'
})
const {getArticleNames} = require('../../controllers/columnArticleController/columnArticleController.js')

columnArticle.get('/articleNames', getArticleNames)

module.exports = columnArticle
