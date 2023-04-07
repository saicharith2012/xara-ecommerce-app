const router = require('express').Router()
const User = require('../models/User')


// REGISTER
router.post('/register', async (req,res)=>{
    const newUser = new User({
        username: req.body.username, //unique
        email: req.body.email, //unique -- throws err if repeated
        password: req.body.password,
    })

    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router