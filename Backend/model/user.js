let admin = require("firebase-admin");
let fs = require('fs');
let users = {}
users.loginUser = (data) => {
    return new Promise((resolve, reject) => {

    })
}
users.getAllUsers = () => {
    return new Promise((resolve, reject) => {
        admin.auth().listUsers().then((result) => {
            let userList = [];
            result.users.forEach(user => {
                userList.push({ name: user.displayName, uid: user.uid, email: user.email });
            })
            resolve(userList)
        }).catch((err) => {
            reject(err)
        })
    })
}

users.userRegister = (data) => {
    return new Promise((resolve, reject) => {

        admin.auth().createUser(data).then((result) => {
            admin.auth().setCustomUserClaims(result.uid, { type: data.type }).then((result) => {
                resolve({ code: 6001, message: "created User" });
            }).catch((err) => {
                reject(err);
            })
        }).catch((err) => {
            reject(err)
        })
    })
}

users.uploadImage = (req, res) => {
    return new Promise((resolve, reject) => {
        const file = req.file
        resolve({ message: 'Upload Image Success' })

    })
}
users.getProfileImage = (uid) => {
    return new Promise((resolve, reject) => {
        fs.readdir("./uploads", (err, data) => {
            data.forEach(image => {
                let imageUrl = image.split("_")[0];
                let imageName = image.split("_")[1]
                if (uid === imageUrl) {
                    console.log(`./uploads/${uid}_${imageName}`)
                    resolve(`./uploads/${uid}_${imageName}`)
                }
            })
        })
    })
}

module.exports = users;