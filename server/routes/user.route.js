const router = require("express").Router()
const{test, signupControler, signinController} = require("./controllers/user.controller")

router.get("/",test)
router.post("/signup", signupControler)
router.post("/signin", signinController)


module.exports = router