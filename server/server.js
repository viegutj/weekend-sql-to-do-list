// import express and set as a variable
const express = require('express');
// store express in a variable named app
const app = express();
// import body-parser and store as a variable
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const router = require('./routes/router')

//set up our server to use body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/todo', router);

// turn the key! start listening for requests
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});