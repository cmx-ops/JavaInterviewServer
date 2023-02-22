const mongoose = require(`mongoose`)
const usersModel = require(`../models/usersModel`)

const getUser = async () => {
    return usersModel.find();
}

module.exports ={
    getUser
}
