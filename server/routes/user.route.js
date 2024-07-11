const router = require("express").Router()
const { signupControler, signinController } = require("./controller/user.controller")

router.post("/signup", signupControler)
router.post("/signin", signinController)


module.exports = router