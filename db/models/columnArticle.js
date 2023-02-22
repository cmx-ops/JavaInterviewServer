const mongoose = require('mongoose')

//专题文章标题表
// const columnArticleSchema = new mongoose.Schema({
//     id: Number,
//     articleName: String,
//     articleNameList: Array
// })
const columnArticleSchema = new mongoose.Schema({
    1: {
        articleName: String,
        articleNameList: Array
    }
})
const columnArticle = mongoose.model('columnArticles', columnArticleSchema, 'column_article1') //根据骨架创建模版
module.exports = columnArticle
