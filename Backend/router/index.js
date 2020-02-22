let user = require("../controller/user")
const multer = require("multer");
const fs = require("fs")



module.exports = function (app) {
    app.post('/auth/login', user.loginUser);

    app.get("/users", user.getAllUsers);
    app.post("/user/register", user.userRegister);



    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, 'uploads')
        },
        filename: (req, file, callback) => {
            fs.readdir("./uploads", (err, files) => {
                if (err) {
                    console.log(err)
                }
                else {
                    if (files.length > 0) {
                        files.forEach(imag => {
                            let uid = imag.split("_")[0];
                            let image = imag.split("_")[1];
                            if (req.query.uid === uid) {
                                fs.unlink(`./uploads/${req.query.uid}_${image}`, (err) => {
                                    if (err) {
                                        console.log(err)
                                    }
                                    else {
                                        callback(null, `${req.query.uid}_${file.originalname}`)
                                    }
                                })
                            }
                            else {
                                callback(null, `${req.query.uid}_${file.originalname}`)

                            }
                        })
                    }
                    else {
                        console.log(file.originalname)
                        callback(null, `${req.query.uid}_${file.originalname}`)
                    }

                }
            })
        }
    })
    var upload = multer({ storage: storage })
    app.post('/user/upload', upload.single('file'), user.uploadImage);
    app.get('/user/profile', user.getProfileImage)
}