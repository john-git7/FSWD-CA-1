const express = require('express')
const app = express()
const port = 3001

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/signup',(req,res)=>{
    const {username,email,password,DOB}=req.body

    if(!username){
       return res.status(400).send("Username cannot be empty")
    }
    if(!email){
        return res.status(400).send("Email cannot be empty")
    }
    if(password.length<8 && password.length>16){
       return  res.status(400).send("Password length should be greater than 8 or less than or equal to 16")
    }
    if(!DOB){
        return res.status(400).send("Date of birth cannot be empty")
    }
    return res.status(200).send("Success")



})


app.listen(port,(req,res)=>{
   console.log(`The server runs properly ${port}`)
})