module.exports = function $init($app, $server) {
    "use strict";

    console.log('setting up route "/"');
    
    $server.app.get('/', function(req, res) {
        $app.emit('ping');
        res.send('"/" URL called');
    });
};
