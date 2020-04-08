const express = require('express');
const routes = require('./routes');
const logger = require('morgan');
const path = require('path');

const app = express();

const port = 5000;

// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());

app.use('/api', routes);
app.listen(port, ()=>{
    console.log(`Server started @ http://localhost:${port}`);
});

const numbers = [1,2,3,4,5];
const mapped = numbers.map(number => `<td> ${number} </td>`).join("")


console.log('<table><tr>' + mapped +'</tr></table>');








