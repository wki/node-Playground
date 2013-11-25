#!/usr/bin/env node

var app = require('./lib/broadwayapp');

app.on('ready',
    function () { 
        app.log.info('starting up'); 
        app.server.start();
        
        console.log('all_sensors: ', app.measurement.all_sensors);
    }
);
