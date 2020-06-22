const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@cluster0-toie1.mongodb.net/test?retryWrites=true&w=majority',  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    },err=>{
    if(!err)
        console.log("DB Connected")
        else
        console.log(err)
})