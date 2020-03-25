const express = require('express')
const morgan = require('morgan')
const accountRepo = require('./repositories/account-repository')

//next step is to create an app

const app = express();
const port = 5000;

app.use(morgan('dev'));

app.get('/api/accounts/:acctType', async (req, res)=>{
    const accounts = await accountRepo.getAccounts(req.params.acctType)
    res.json(accounts)
})



app.listen(port, ()=>{
    console.log(`The server has started http://localhost:${port}`)
})

//http://localhost:5000/api

// get [retrieve] post[create] put/patch [modify] delete[delete]
