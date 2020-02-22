let user = require("../model/user");
let fs = require("fs")
let loginUser = (req, res) => {
    user.loginUser(req.body).then((result))
}

let getAllUsers = (req, res) => {
    user.getAllUsers().then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
}
let userRegister = (req, res) => {
    user.userRegister(req.body).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err)
    })
}
let uploadImage = (req, res) => {

    user.uploadImage(req, res).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err)
    })
}
let getProfileImage = (req, res) => {
    // res.sendfile("./uploads/Fun_4.PNG")
    user.getProfileImage(req.query.uid).then(result => {
        res.sendfile(result);
    }).catch((err) => {
        res.json(err)
    })
}
module.exports = {
    loginUser: loginUser,
    getAllUsers: getAllUsers,
    userRegister: userRegister,
    uploadImage: uploadImage,
    getProfileImage: getProfileImage
}
