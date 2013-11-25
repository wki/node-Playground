'use strict';

module.exports = function $init($app) {
    
    function Service() {
    }
    
    // add methods this app service should offer
    Service.prototype.provide_measurement_result =
        function(sensor_id, measurement_result) {
            var measurement = $app.get('measurement');
            
        };
    
    this.register('service').as.singleton.factory(
        function() { return new Service; }
    );
};
