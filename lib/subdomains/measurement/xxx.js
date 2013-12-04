function $init($domain) {
    "use strict";

    console.log('$init measurement/xxx running');
    
    // WRONG: would register at "app" container
    this.register('xxx').as.value('xxx');
}

module.exports = $init;
