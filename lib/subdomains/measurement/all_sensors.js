function $init($domain) {
    "use strict";
    
    console.log('$init measurement/all_sensors running');
    
    // WRONG: would register at "app" container
    this.register('measurement_all_sensors').as.value('all_sensors');
}

module.exports = $init;
