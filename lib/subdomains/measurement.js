function $init($domain) {
    "use strict";

    console.log('$init measurement');
    
    function Measurement() {}
    
    // repository "all_sensors"
    Object.defineProperty(
        Measurement.prototype,
        'all_sensors',
        {
            get: function() { return $measurement_all_sensors; },
            set: undefined,
        }
    );
    
    // aggregate "sensor"
    
    // factory "sensor_creator"
    
    // event "MeasurementProvided", { sensor_id, measurement }
    
    $domain.register_subdomain('measurement', measurement);
}

module.exports = $init;
