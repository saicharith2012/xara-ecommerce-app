const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv")

dotenv.config()


// REGISTER
router.post('/register', async (req,res)=>{
    const newUser = new User({
        username: req.body.username, //unique
        email: req.body.email, //unique -- throws err if repeated
        password: CryptoJS.AES.encrypt( req.body.password, process.env.PASS_SEC ).toString()
    })

    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

// LOGIN
router.post('/login', async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(401).json('Wrong Credentials!')

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        originalPassword !== req.body.password && res.status(401).json("Wrong Credentials!")

        const {password, ...others} = user._doc

        res.status(200).json(others)

        
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router