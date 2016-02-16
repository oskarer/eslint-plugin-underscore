/**
 * @fileoverview Don't use the return value from _.each
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-each-assign');
var RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-each-assign', rule, {

    valid: [

        'var foo = _.map([], function(){ return true; });',
        '_.each([], function(){ return true; });',
        'function() { _.each([], function(){ return true; }); };'
    ],

    invalid: [
        {
            code: 'var foo = _.each([], function(){ return true; });',
            errors: [{
                message: "Don't use the return value from _.each"
            }]
        }, {
            code: 'function f() { return _.each([], function(){ return true; }); };',
            errors: [{
                message: "Don't use the return value from _.each"
            }]
        }, {
            code: '{foo: _.each([], function(){ return true; })};',
            errors: [{
                message: "Don't use the return value from _.each"
            }]
        }, {
            code: 'someFunc(_.each([], function(){ return true; }));',
            errors: [{
                message: "Don't use the return value from _.each"
            }]
        }
    ]
});
