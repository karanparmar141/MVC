const express = require("express")
const connect = require("./config/db")
const router = require("./routes/user.route")
const app = express()
const session = require("express-session")
const passport = require("passport")
const local = require("./helper/local")
const cors = require("cors")
app.use(session({secret : "key"}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
local(passport)

const cookie = require("cookie-parser")
app.use(express.urlencoded({ extended: true }))
app.use(cookie())
app.use(express.json())
app.set("view engine", "ejs")
app.set("viwes", __dirname + "/views")
app.use(express.static(__dirname + "/public"))
app.use(router)




app.listen(8090, () => {
    connect();
    console.log("server is started 8090")
})