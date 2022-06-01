'use strict';
const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();

app.get("/", (req, res) => {
    res.status(200).send('welcome to heroku server');
});

app.use(logger);

app.get("/person",validator(),(req,res)=> {     
    console.log(req.query);
    res.json(    
        req.query)
 });

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    });
}
module.exports = {
    app: app,
    start: start
}