function $init($app) {
    "use strict";

    var domain = {};
    domain.register_subdomain = function(name, subdomain) {
        // console.log('registering subdomain: ', name);
        
        Object.defineProperty(domain, name, {
            value: subdomain
        });
    };
    
    this.register('domain').as.value(domain);
}

module.exports = $init;

/*

Idea for using the domain:

 * the domain is just a construct existing in our brain

 * only the subdomains really exist

 * obtain a subdomain:
   var measurement = container->get_service('measurement');

 * for example measurement:
   var s = measurement.all_sensors.by_name('rio/bad/temperatur');

 * the app service konws which subdomains to talk to




*/