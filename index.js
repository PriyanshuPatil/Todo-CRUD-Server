//import modules
const {todoRouter}=require("./routes/todo.routes") ;
const {userRouter}=require("./routes/user.routes") ;
const { connection } = require("./db");
const express=require("express") ;
const cors=require("cors")
const { Authenticator } = require("./middleware/auth.middleware");
require("dotenv").config()
const app=express() ;
app.use(cors())
//middleWare
app.use(express.json());
app.use("/user",userRouter);
app.use(Authenticator)
app.use("/todo",todoRouter);

//port info
app.listen(process.env.port,async()=>{
    try{
        await connection ;
        console.log("connected to Db")
    }catch(err){
        console.log({"msg":`${err.message}`})
    }
    console.log(`server running at ${process.env.port}`)
})