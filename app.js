const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const users = require('./routes/users');

//CORS
app.use(cors());
//Body Parser
app.use(bodyParser.json());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Users
app.use('/users', users);

//Start Server
app.listen(port, () => {
    console.log('Server Started on port '+port);
});

//ROUTES
//Index Route
app.get('/', (req,res)=> {
    res.send('Invalid Endpoint');
})
