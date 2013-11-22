'use strict';

var express = require('express');

module.exports = function $init($app) {
    console.log('setting up server');

    var app = express();
    var options = $app.config['server'] || {};
    
    this.register('server').as.singleton.factory(function() {
        console.log('factory server');
        return new Server();
    });
    
    function Server() {
        this.app = app;
    }
    
    Server.prototype.start = function(callback) {
        var port = options['port'] || 3000;
        
        $app.log.info('starting server on port ', port);
        app.listen(port);
        
        return callback && callback();
    };
};
