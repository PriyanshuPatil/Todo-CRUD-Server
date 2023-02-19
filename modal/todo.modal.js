const mongoose=require("mongoose") ;

const todoSchema=mongoose.Schema({
title:String ,
status:Boolean ,
user:String 
},
{ versionKey:"false"}
)

const todoModal=mongoose.model("todo",todoSchema);

module.exports={todoModal}