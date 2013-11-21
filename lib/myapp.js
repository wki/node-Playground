var architect = require('architect');

var tree = architect.resolveConfig(
    [
        { 
            packagePath: "architect-logger",
            transports: { console: { colorize: true, level: 'verbose' } },
        },
        { 
            packagePath: "architect-eventbus",
        },
        { 
            packagePath: "./myapp/info.js",
            consumes: ['eventbus', 'logger'],
            //provides: ['info', 'cool'],
            name: 'foo',
        },
    ],
    __dirname
);

var app = architect.createApp(tree);
app.on('service', add_service);

// just for testing:
// app.on('ready',   function() { console.log("App: %j", app) });
// app.on('plugin',  function(plugin) { console.log("Plugin: %j", plugin) });
// app.on('service', function(service) { console.log("Service: %j", service) });
// app.on('error',   function(error) { console.log("Error: " + error) });

function add_service(name, service) {
    console.log('Adding service:' + name);
    app[name] = service;
}

module.exports = exports = app;
