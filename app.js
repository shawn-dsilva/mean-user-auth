const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


const app = express();
const port = 3000;
const users = require('./routes/users');


//MongoDB
mongoose.connect(config.database);
//On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});
//If error
mongoose.connection.on('error', (err) => {
    console.log('Database error  ' + config.database);
});

//CORS
app.use(cors());
//Body Parser
app.use(bodyParser.json());

//Passport 
app.use(passport.initialize());
app.use(passport.session());

//JWT
require('./config/passport')(passport);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Users
app.use('/users', users);

//Start Server
app.listen(port, () => {
    console.log('Server Started on port ' + port);
});

//ROUTES

//Index Route
app.get('/', (req, res) => {
    res.send('Nothing to see here <br> for now... <br>');
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
