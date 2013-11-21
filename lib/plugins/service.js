'use strict';

module.exports = function $init($app, $domain) {
    console.log('setting up plugin service, domain:', $domain);
    
    this.register('service').as.value('my service');
};
