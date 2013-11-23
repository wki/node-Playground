'use strict';

function $init($app) {
    var domain = {};
    domain.register_subdomain = function(name, subdomain) {
        console.log('registering subdomain: ', name);
        
        Object.defineProperty(domain, name, {
            value: subdomain
        });
    };
    
    this.register('domain').as.value(domain);
};

module.exports = $init;
