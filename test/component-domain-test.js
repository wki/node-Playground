var vows   = require('vows');
var expect = require('expect.js');

var domain = require('../lib/components/domain');

var minioc = require('minioc');
var container = minioc.create();

// ... do more...

vows.describe('Domain').addBatch({
    'after loading': {
        topic: function() { return domain },
        'we get a function object': function(topic) {
            expect(topic).to.be.a('function');
        }
    },
    'after registering': {
        topic: function() {
            // simulate a call to $init with this set to root container
            domain.apply(container, container);
            
            return container.get('domain');
        },
        'we get back a domain object': function(topic) {
            expect(topic).to.be.an('object');
        },
        'the domain object has a method "register_subdomain"': function(topic) {
            expect(topic.register_subdomain).to.be.a('function');
        },
        'a subdomain can get added': function(topic) {
            expect(topic.xxsub).to.be(undefined);
            topic.register_subdomain('xxsub', 'testme');
            expect(topic.xxsub).to.be('testme');
        },
        // 'the domain object has "measure" property': function(topic) {
        //     expect(topic).to.have.property('measure');
        // },
        // 'the domain object has "condense" property': function(topic) {
        //     expect(topic).to.have.property('condense');
        // },
    }
}).export(module);
