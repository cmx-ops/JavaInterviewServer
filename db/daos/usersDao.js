const mongoose = require(`mongoose`)
const usersModel = require(`../models/usersModel`)

const getUser = async () => {
    let data = await usersModel.find()
    return data
}

module.exports ={
    getUser
}
