/**
 * @fileoverview Standardize on either Underscore's union or jQuery's merge function
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/jquery-merge');
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var messages = {
    always: "Prefer jQuery's merge over Underscore's union",
    never: "Prefer Underscore's union over jQuery's merge"
};

ruleTester.run('jquery-merge', rule, {

    valid: [
        '_.union([], []);'
    ],

    invalid: [
        {
            code: '$.merge([1, 2, 3], [3, 4]);',
            errors: [{message: messages.never}]
        }, {
            code: '_.union([4], [3, 5, 5]);',
            options: ['always'],
            errors: [{message: messages.always}]
        }, {
            code: '_([3]).union([4], [3, 5, 5]);',
            options: ['always'],
            errors: [{message: messages.always}]
        }
    ]
});
