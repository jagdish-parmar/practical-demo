let express = require("express");
let bodyParser = require("body-parser");
let compression = require("compression");
let helmet = require("helmet");
let cors = require("cors")
let logger = require("morgan");
let admin = require("firebase-admin");
let settings = require("./utils/settings")
let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let middleware = require("./middleware/index");
let router = require("./router/index");
app.use(logger("dev"));
app.use(compression());
app.use(helmet());

app.use(cors({ origin: '*' }));
let PORT = process.env.PORT || 4000;

admin.initializeApp({
    credential: admin.credential.cert(settings),
    databaseURL: "",
    storageBucket: ""
});
middleware(app);
router(app);


app.listen(PORT, () => {
    console.log(`Server Listinig On ${PORT}`)
});
