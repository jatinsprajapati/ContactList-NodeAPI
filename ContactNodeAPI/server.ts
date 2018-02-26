var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000
    mongoose = require('mongoose'),
    Contact = require('./api/models/contactListModel'),
    config = require('./Config'),
    bodyParser = require('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.databaseURL); 

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    var routes = require('./api/routes/contactListRoutes'); 
    routes(app); //register the route
   
    app.use(function (req, res) {
        res.status(404).send({ url: req.originalUrl + ' not found' })
    });

    app.listen(port);

    console.log('Contact list RESTful API server started on: ' + port);





