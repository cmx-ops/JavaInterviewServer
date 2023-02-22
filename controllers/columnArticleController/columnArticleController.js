// /controllers/users.js

const columnArticleDao = require(`../../db/daos/columnArticleDao`)

class ColumnArticleCtrl {
    async getArticleNames(ctx) {
        ctx.set('Allow', 'GET') // 设置响应头Headers
        let data = await columnArticleDao.getArticleNames()
        var result = {}
        console.log(data.length)
        if (data.length > 1) {
            for (let i = 0; i < data.length; i++) {
                result = Object.assign(data[i],result)
            }
        }

        ctx.body = result
    }
}

module.exports = new ColumnArticleCtrl()
