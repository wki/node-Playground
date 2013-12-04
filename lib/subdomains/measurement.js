function $init($domain) {
    "use strict";

    console.log('$init measurement');
    
    var measurement = {};
    
    // repository "all_sensors" // TODO: Class? Constructor args?
    
    // aggregate "sensor"
    
    // factory "sensor_creator"
    
    // event "MeasurementProvided", { sensor_id, measurement }
    
    $domain.register_subdomain('measurement', measurement);
}

module.exports = $init;
