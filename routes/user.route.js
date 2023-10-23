const {Router} = require("express")
const {usercreate, login,  index, forms, icontabler, samplepage, uibuttons, uicard, uitypography, loginui, singup, data } = require("../controllers/user.logic")
const check = require("../middleware/user.middleware")
const passport = require("passport")
const { finduser, authorize } = require("../middleware/auth")
const app = Router()

app.get("/" , index )
app.get("/data" , finduser , data)
app.get("/form", forms)
app.get("/icon-tabler" , icontabler)
app.get("/sample-page" , samplepage)
app.get("/ui-buttons" , uibuttons)
app.get("/ui-card" , uicard)
app.get("/login" , loginui)
app.get("/ui-typography" , uitypography)
app.get("/singup" , singup)
app.post("/singup" ,check , usercreate)
app.post("/login" , passport.authenticate("local") ,login)

app.get("/user" , authorize ,  async(req,res)=>{
    res.send(req.user)
})

module.exports = app