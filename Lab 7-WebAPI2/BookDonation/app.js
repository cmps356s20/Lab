const express = require('express')
const router = require('./routes')
const logger = require('morgan')
const path = require('path')

const app = express();

//this line of code
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'))
app.use(express.json())
app.use('/api', router)


const port = 5000;
app.listen(port, ()=>{
    console.log(`Server has started @ http://localhost:${port}`)
})

