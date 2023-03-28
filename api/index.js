// express app
const express = require('express')
const app = express()
const mongoose =  require('mongoose')
const dotenv = require('dotenv')

// config dotenv
dotenv.config()

// connecting to mongodb
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('DBConnection Successful.')
}).catch((err)=>{
    console.log(err)
})

// Listening to the requests
app.listen(process.env.PORT, ()=>{
    console.log('Backend Server is running...')
})
