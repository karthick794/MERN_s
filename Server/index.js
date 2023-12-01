const express=require('express')
const mongoose=require('mongoose')

const app=express()

mongoose.connect('mongodb://localhost:27017/office')

const EmployeeSchema =new mongoose.Schema(
    {name:String,
        age:Number,
        mobilenumber:Number
    })

const EmployeeModel=mongoose.model("employee",EmployeeSchema)

app.get("/getemployee",(req,res)=>{
    EmployeeModel.find({}).then(function(employee){
        res.json(employee)
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(3001,()=>{console.log('server is running')})