'use strict';

function $init($app, $measurement_all_sensors) {
    console.log('$init measurement running');
    
    function Measurement() {}
    
    // repository "all_sensors"
    Object.defineProperty(
        Measurement.prototype,
        'all_sensors',
        {
            get: function() { return $measurement_all_sensors },
            set: undefined,
        }
    );
    
    // aggregate "sensor"
    
    // factory "sensor_creator"
    
    // event "MeasurementProvided", { sensor_id, measurement }
    this.register('measurement').as.singleton.from.ctor(Measurement);
};

module.exports = $init;
