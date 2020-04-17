
Express.js is a modular web framework for Node.js
It is used for easier creation of web applications and services
Express.js simplifies development and makes it easier to write secure, modular and fast applications. You can do all that in plain old Node.js, but some bugs can (and will) surface, including security concerns (eg. not escaping a string properly)
Redis is an in-memory database system known for its fast performance. No, but you can use it with Express.js using a redis client

The World's Largest Software Registry (Library)
npm is the world's largest Software Registry.

The registry contains over 800,000 code packages.

Open-source developers use npm to share software.

Many organizations also use npm to manage private development.

Using npm is Free
npm is free to use.

You can download all npm public software packages without any registration or logon.


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
