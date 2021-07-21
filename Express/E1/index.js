//npm init -y, npm i express, -D nodemon, moment
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');


const app = express();
const PORT = process.env.PORT || 5000;


// // Middleware
// app.use(logger);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// Body Parser Middleware
app.use(express.json());


// Members API Routes
app.use('/api/members', require('./routes/api/members'));


// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));


// app.get('/', (req, res)=>{
//     // res.send('hello world!!');
//     // res.send('<h1>hello world!!</h1>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


app.listen(PORT, () => {
    console.log('server started');
});