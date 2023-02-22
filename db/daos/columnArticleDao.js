const mongoose = require(`mongoose`)
const columnArticleModel = require(`../models/columnArticle`)

const getArticleNames = async () => {

    return columnArticleModel.find({}, {_id: 0});

}

module.exports = {
    getArticleNames
}
