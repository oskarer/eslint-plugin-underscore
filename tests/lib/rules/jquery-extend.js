/**
 * @fileoverview Standardize on either Underscore's or jQuery's extend function
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/jquery-extend');
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var messages = {
    always: "Prefer jQuery's extend over Underscore's",
    never: "Prefer Underscore's extend over jQuery's"
};

ruleTester.run('jquery-extend', rule, {

    valid: [
        '_.extend({}, {});',
        '$.extend({});'
    ],

    invalid: [
        {
            code: '$.extend({}, {});',
            errors: [{message: messages.never}]
        }, {
            code: '$.extend(true, {}, {});',
            errors: [{message: messages.never}]
        }, {
            code: '_.extend({}, {});',
            options: ['always'],
            errors: [{message: messages.always}]
        }
    ]
});
