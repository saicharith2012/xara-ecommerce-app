// express app
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRouter = require("./routes/user")

// config dotenv
dotenv.config()

// connecting to mongodb
const dbURI = process.env.MONGO_URL
mongoose.set("strictQuery", false)
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("DBConnection Successful.")
  })
  .catch((err) => {
    console.log(err)
  })


  app.use(express.json()) //for reading the request as json.

// routes
app.use("/api/users", userRouter)

// Listening to the requests
app.listen(process.env.PORT, () => {
  console.log("Backend Server is running...")
})
