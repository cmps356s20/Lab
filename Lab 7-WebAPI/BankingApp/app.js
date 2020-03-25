const express = require('express')
const morgan = require('morgan')
const accountRepo = require('./repositories/account-repository')

//next step is to create an app
const app = express();
const port = 5000;

//add the middlewares
app.use(morgan('dev'));
app.use(express.json()) //user will send me an object
//body will parse the data and it put it back to  req.body()


app.get('/api/accounts/accountType/:acctType', async (req, res)=>{
    const accounts = await accountRepo.getAccounts(req.params.acctType)
    res.json(accounts)
})

app.get('/api/accounts/:id', async (req, res)=>{
    const accounts = await accountRepo.getAccount(req.params.id)
    res.json(accounts)
})

app.delete('/api/accounts/:id', async (req, res)=>{
    const account = await accountRepo.deleteAccount(req.params.id)

    res.send("account deleted")
})

app.post('/api/accounts', async (req, res)=>{
    await accountRepo.addAccount(req.body)
    res.json("account created with account No " + req.body.accountNo)
})

app.put('/api/accounts/:id', async (req, res)=>{
    await accountRepo.updateAccount(req.body)
    res.json("account created with account No " + req.body.accountNo)
})

app.listen(port, ()=>{
    console.log(`The server has started http://localhost:${port}`)
})

//http://localhost:5000/api

// get [retrieve] post[create] put/patch [modify] delete[delete]
