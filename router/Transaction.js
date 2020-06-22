const express=require('express')
const router=express.Router()
const {getTransaction,addTransaction,deleteTransaction}=require('../controller/Transactioncontroller')

router.route('/')
.get(getTransaction)
.post(addTransaction)


router.route('/:id').delete(deleteTransaction)


module.exports=router