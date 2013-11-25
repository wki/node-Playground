'use strict';

module.exports = function $init($app, $domain) {
    // console.log('setting up plugin service, app:', typeof $app, ', domain:', $domain);
    
    var service = {};
    
    // add methods this app service should offer
    Service.prototype.a_method = function() {};
    
    this.register('service').as.value(service);
};
