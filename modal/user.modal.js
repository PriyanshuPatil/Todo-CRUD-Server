const mongoose=require("mongoose") ;

const userSchema=mongoose.Schema({
email:String ,
password:String ,
name:String 
},
{ versionKey:"false"}
)

const userModal=mongoose.model("user",userSchema);

module.exports={userModal}