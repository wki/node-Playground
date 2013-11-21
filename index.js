#!/usr/bin/env node

var myapp = require('./lib/broadwayapp');

console.log('on');
myapp.on('ready', start_server);

function start_server() {
    myapp.log.info('starting server');
    
    var express = require('express');
    var app = express();
    
    app.get('/', serve_root_url);
    app.listen(3000, show_started_message);
}

function serve_root_url(req, res) {
    myapp.emit('ping');
    res.send(myapp.info);
}

function show_started_message() {
    myapp.log.info('listening.');
}
