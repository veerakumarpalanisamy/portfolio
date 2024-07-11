const router = require("express").Router()
const { signupControler, signinController } = require("./controller/user.controller")

// router.get("/",test)
router.post("/signup", signupControler)
router.post("/signin", signinController)


module.exports = router