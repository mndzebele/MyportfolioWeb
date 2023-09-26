const express=require('express')
const cors =require('cors')
const dotenv =require('dotenv')
const path= require('path')
//dotenv
dotenv.config()
//rest object
const app=express()
//sattic 
app.use(express.static(path.join(__dirname,'./front-end/build')))
//mddleware
app.use(cors())
app.use(express.json())
//routes
app.use('api/v1/portfolio',require('./routes/route'));
app.get('*',function(req,res){
res.sendFile(path.join(__dirname,'./front-end/build/index.html'));
})
//port
const PORT=process.env.PORT||8080
//listen
app.listen(PORT,()=>{
    console.log('server running on PORT ${PORT}');
})