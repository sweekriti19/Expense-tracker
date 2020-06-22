require('./modules/db')
const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const Transaction=require('./router/Transaction')
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.use('/trans',Transaction)
const PORT=process.env.PORT||4000
app.listen(PORT,()=>{
    console.log('Server started in 4000')

})


