// /controllers/users.js

const columnArticleDao = require(`../../db/daos/columnArticleDao`)

class ColumnArticleCtrl {
    async getArticleNames(ctx) {
        ctx.set('Allow', 'GET') // 设置响应头Headers
        let data = await columnArticleDao.getArticleNames()
        ctx.body = data
    }
}

module.exports = new ColumnArticleCtrl()
