const express = require('express')
const app = express()
const port = 3001

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/signup',(req,res)=>{
    const{username,email,password,DOB}=req.body
try{
    if(!username){
       return res.status(400).send("Username cannot be empty")
    }
    if(!email){
        return res.status(400).send("Email cannot be empty")
    }
    if(length(password)<8 && length(password)>16){
       return  res.status(400).send("Password length should be greater than 8 or less than or equal to 16")
    }
    if(!DOB){
        return res.status(400).send("Date of birth cannot be empty")
    }
}
catch(e){
 console.log(e);
}

})


app.listen(port,(req,res)=>{
   console.log(`The server runs properly ${port}`)
})