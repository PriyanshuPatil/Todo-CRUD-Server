const express=require("express") ;
const todoRouter=express.Router() ;
const {todoModal}=require("../modal/todo.modal");

todoRouter.get("/",async(req,res)=>{
    try{
    const data=await todoModal.find({user:req.body.user});
    res.send(data)
    }catch(err){
res.send(err.message)
    }
})

todoRouter.post("/addtodo",async(req,res)=>{
    try{
    const data=new todoModal(req.body) ;
    data.save()
    res.send({"msg":"todo succesfully added"})
    }catch(err){
res.send(err.message)
    }
})

todoRouter.delete("/:id",async(req,res)=>{
    const params=req.params.id;
    try{
    const data=await todoModal.findByIdAndDelete({"_id":params}) ;
    data.save()
    res.send({"msg":"todo succesfully deleted"})
    }catch(err){
res.send(err.message)
    }
})
todoRouter.patch("/addtodo:id",async(req,res)=>{
    const params=req.params.id;
    try{
    const data=await todoModal.findByIdAndUpdate({_id:params},req.body) ;
    data.save()
    res.send({"msg":"todo succesfully updated"})
    }catch(err){
res.send(err.message)
    }
})


module.exports={todoRouter}