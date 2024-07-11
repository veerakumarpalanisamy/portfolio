const bcrypt = require("bcrypt")
const User = require("../../models/User.model")
const jwt = require("jsonwebtoken")


const test = (req,res) => {
    
    return res.send("user route")
    
}

const signupControler = async (req,res) => {
    
    try{
        const hassedPassword = bcrypt.hashSync(req.body.password, 8)
        const user = await User.create({
            username : req.body.username,
            email : req.body.email,
            password : hassedPassword
        })

        return res.json ({user : "user created", success : true, user})
       
    }
    catch(err) {
        return res.json({msg: err.message, success: false})
    }
};


const signinController = async (req,res) => {
    try{
       const { email, password } = req.body;
       const validUser = await User.findOne({email});
       if (!validUser)
       return res.json ({ msg: "user was not found", success: false})
       const validPassword = bcrypt.compareSync (password, validUser.password);
       if (!validPassword) {
        return res.json ({msg: "password was wrong"});
       }
       const token = jwt.sign({ id: validUser._id},process.env.JWT_TOKEN);
       return res 
       .cookie("access_token", token, {httponly: true})
       .json({mdg: "login successfully", success:true, validUser});
    }
    catch(err) {
        return res.json ({msg: err.message, success: false})
    }
}



module.exports = {
    test,signupControler,signinController
}