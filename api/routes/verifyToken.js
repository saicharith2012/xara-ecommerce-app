const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token // token created upon login
  if (authHeader) {//if authHeader is present
    const token = authHeader.split(" ")[1] //splitting the authHeader since we have used Bearer
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!")
      req.user = user //adding this section to the req body
      next()
    })
  } else {
    return res.status(401).json("You're not authenticated.")
  }
}

const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You're not allowed to do that!")
        } //params for the id parameter in the route 
    })
}


module.exports = {verifyToken, verifyTokenAndAuthorization}