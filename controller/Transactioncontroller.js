const Transact=require('../modules/model')
exports.getTransaction=(req,res)=>{
   Transact.find((err,docs)=>{
    if(!err){
       res.send(docs)
    }
    else{
        console.log(err)
    }
})
}


exports.addTransaction=(req,res)=>{
   const {Text,amount}=req.body
   Transact.create(req.body,(err,doc)=>{
    if (!err){
        res.send(doc)
    }
    else{
        console.log(err)
    }
})
}



exports.deleteTransaction=(req,res)=>{
    Transact.findByIdAndRemove(req.params.id,(err,doc)=>{
        if (!err){
            res.send(doc)
        }
        else{
            console.log(err)
        }
    })
    }