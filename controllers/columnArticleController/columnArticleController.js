const columnArticleDao = require(`../../db/daos/columnArticleDao`)

class ColumnArticleCtrl {
    //获取所有文章标题
    async getArticleNames(ctx) {
        ctx.set('Allow', 'GET') // 设置响应头Headers
        let data = await columnArticleDao.getArticleNames()
        const dataTmp = JSON.parse(JSON.stringify(data))
        let result = {};
        if (dataTmp.length > 1) {
            for (let i = 0; i < dataTmp.length; i++) {
                result = Object.assign(dataTmp[i],result)
            }
        }
        ctx.body = result
    }
}

module.exports = new ColumnArticleCtrl()
