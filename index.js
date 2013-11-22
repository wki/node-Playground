#!/usr/bin/env node

var app = require('./lib/broadwayapp');

app.on('ready',
    function () { app.log.info('starting up'); app.server.start() }
);
