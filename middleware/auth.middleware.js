var jwt = require('jsonwebtoken');

const Authenticator=(req,res,next)=>{
const usertoken=req.headers.authorization ;
 if(usertoken){
jwt.verify(usertoken, "masai",(err, decoded)=> {
   if(decoded){
   req.body.user=decoded.userID;
next() ;
  }else{
    res.send({"msg":"Please Login"})}
})
}
else{
      res.send({"msg":"Please Login"})
}

  
}

module.exports={Authenticator}