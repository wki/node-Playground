console.log('init broadway');

var broadway = require('broadway');
// var prettyjson = require('prettyjson');

var app = new broadway.App({ 
    delimiter: '.', // event name splitter
});

app.use(require('minioc-broadway'), { rootdir: __dirname });
app.use('./config');
app.use('./components');
app.use('./subdomains');
app.use('./routes');

app.init(function (err) {
    // console.log(prettyjson.render(app));
    app.log.info('init');
    if (err) {
        console.log(err);
    } else {
        setTimeout(function() { app.emit('ready'); }, 0);
    }
});

console.log('xxx:', app.minioc.get('xxx'));

// define shortcuts for accessing minioc services
['service', 'server'].forEach( function(s) {
    app.__defineGetter__(s,  function() { return app.minioc.get(s); });
} );

app.on('ping', function() { app.log.info('ping received'); });

module.exports = exports = app;
