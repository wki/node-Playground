'use strict';

module.exports = function $init($app) {
    console.log('setting up config');

    $app.config
        .argv() // --log:console:level=xxx
        .env()  // NODE_LOG_CONSOLE_LEVEL=xxx ??? does not work
        .file('config.json');
}
