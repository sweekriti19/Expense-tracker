const mongoose=require('mongoose')
const TransactionSchema=new mongoose.Schema({
    Text:{
        type:String,
        required:[true,'text is required']
    },
    amount:{
        type:Number,
        required:[true,'Please enter a positive or negative number']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Transact=mongoose.model('quotes',TransactionSchema)

module.exports=Transact