const express=require("express") ;
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const userRouter=express.Router() ;
const {userModal}=require("../modal/user.modal")

userRouter.post("/register",(req,res)=>{
 const {email,password,name}=req.body;
 try{
    bcrypt.hash(password, 5, (err, hash)=> {
   if(err){
res.send(err.message)
   }else{
 const new_user=new userModal({email,name,password:hash}) ;
 new_user.save();
 res.send({"msg":"user Succesfuly Register"})
   }
});
 }catch(err){
    res.send(err.message)
 }

})


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user_data=await userModal.find({email});
        if(user_data.length>0){
  bcrypt.compare(password,user_data[0].password,(err, result)=>{
           if(result){
           let token= jwt.sign({userID:user_data[0]._id},"masai");
           res.send({"msg":"user Succesfuly login","token":token})
      }else{
    res.send({"err":"Wrong Credential"})
      }  
        });
  }else{
res.send({msg:err.message})
 }
        
    }catch(err){
       res.send(err.message)
    }
   
   })


userRouter.get("/",async(req,res)=>{
    try{
    const data=await userModal.find() ;
    res.send(data)
    }catch(err){
       res.send(err.message)
    }
   })
module.exports={userRouter}