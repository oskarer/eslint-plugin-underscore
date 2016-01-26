/**
 * @fileoverview Standardize on either Underscore's or jQuery's proxy function
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/jquery-proxy');
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var messages = {
    always: "Prefer jQuery's proxy over Underscore's bind",
    never: "Prefer Underscore's bind over jQuery's proxy"
};

ruleTester.run('jquery-proxy', rule, {

    valid: [
        '_.bind(myFunc, this);'
    ],

    invalid: [
        {
            code: '$.proxy(myFunc, this);',
            errors: [{message: messages.never}]
        }, {
            code: '$.proxy(myFunc, that);',
            errors: [{message: messages.never}]
        }, {
            code: '_.bind(myFunc, this);',
            options: ['always'],
            errors: [{message: messages.always}]
        }
    ]
});
