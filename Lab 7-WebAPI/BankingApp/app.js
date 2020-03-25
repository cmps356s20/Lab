const express = require('express')

//next step is to create an app

const app = express();
const port = 5000;

//two thing [link]
app.get('/api/accounts' , (req, res)=>{
    res.send("Welcome to my first website you called the get method")
})

app.post('/api/accounts' , (req, res)=>{
    res.send("You will create a new account [POST METHOD]")
})

app.put('/api/accounts' , (req, res)=>{
    res.send("you are going to modify existing account [PUT METHOD]")
})

app.delete('/api/accounts' , (req, res)=>{
    res.send("you will delete an account [DELETE METHOD]")
})

app.listen(port, ()=>{
    console.log(`The server has started http://localhost:${port}`)
})

//http://localhost:5000/api

// get [retrieve] post[create] put/patch [modify] delete[delete]