const express = require('express')
const app = express()

// mongoose
const mongoose =  require('mongoose')
mongoose.connect('mongodb+srv://charith:ztdlQN3fq9TXJKzZ@cluster0.nqmjwur.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('DBConnection Successful.')
}).catch((err)=>{
    console.log(err)
})

app.listen(3000, ()=>{
    console.log('Backend Server is running...')
})
