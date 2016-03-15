/**
 * @fileoverview Prefer using _.contains to checking for a negative index.
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prefer-contains');
var RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

var errors = [{message: 'Prefer _.contains to checking for a negative _.indexOf'}];
ruleTester.run('prefer-contains', rule, {

    valid: [
        '_.indexOf(items, value) > 0',
        '0 < _.indexOf(items, value)',
        '_.indexOf(items, value) < zero',
        '_.indexOf(items, value) < "0"',
        '_.contains(items, value)',
        '_.find(items, value)',
        'items.indexOf(value) !== -1',
        '_.size(items) !== -1;',
        '-1 > _.indexOf(items, value);'
    ],

    invalid: [
        {
            code: '-1 != _.indexOf(items, value);',
            errors: errors
        }, {
            code: '_.indexOf(items, value) !== -1;',
            errors: errors
        }, {
            code: '-1 < _.indexOf(items, value);',
            errors: errors
        }, {
            code: '_.indexOf(items, value) > -1;',
            errors: errors
        }, {
            code: '_.indexOf(items, value) >= 0;',
            errors: errors
        }, {
            code: '_.indexOf(items, value) === -1;',
            errors: errors
        }, {
            code: '_.indexOf(items, value) < 0;',
            errors: errors
        }, {
            code: '_.indexOf(items, value) < -0;',
            errors: errors
        }
    ]
});
