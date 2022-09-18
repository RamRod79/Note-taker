//  Packages needed for this application
const express = require('express');
const app = express();
const path = require('path');
const fs = require ('fs');

// local host
const PORT = process.env.PORT || 3001;

//connection to routes route files/folders
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// express middleware function
app.use(express.urlencoded({
    extended: true
}));

// static files stored in public
app.use(express.static('public'));
app.use(express.json());

// using routes files within app
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listen to specified port
app.listen(PORT, () => {
// console.log("App now runnign on http://localhost:3001/");   
});

