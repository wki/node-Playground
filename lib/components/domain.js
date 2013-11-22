'use strict';

module.exports = function $init($app) {
    console.log('setting up plugin domain, app:', $app);
    
    this.register('domain').as.value('my domain');
};
