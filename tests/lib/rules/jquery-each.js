/**
 * @fileoverview Standardize on either Underscore's or jQuery's each function
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/jquery-each');
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var messages = {
    always: "Prefer jQuery's each over Underscore's",
    never: "Prefer Underscore's each over jQuery's"
};

ruleTester.run('jquery-each', rule, {

    valid: [
        '_.each([], function(value, key){ return value % 2; });'
    ],

    invalid: [
        {
            code: '$.each([], function(key, value){ return value % 2; });',
            errors: [{message: messages.never}]
        }, {
            code: '$.each([], function(key){ return key % 2; });',
            errors: [{message: messages.never}]
        }, {
            code: '_.each([], function(value){ return value % 2; });',
            options: ['always'],
            errors: [{message: messages.always}]
        }
    ]
});
