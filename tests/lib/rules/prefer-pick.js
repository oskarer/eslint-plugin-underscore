/**
 * @fileoverview When creating an object that is a subset of another object, use _.pick
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prefer-pick');
var RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

var errors = [{message: 'Prefer _.pick over defining an object that is a subset of another object'}];

ruleTester.run('prefer-pick', rule, {

    valid: [
        'var bar = {a: foo.a, b: baz.b};',
        'var bar = {a: foo.a, b: foo[b]};',
        'var bar = {a: foo.a, b: foo.c};',
        'var bar = {a: foo.a, b: 1};',
        {
            code: 'var bar = {a: foo.a};',
            options: [{objectsLargerThan: 1}]
        }
    ],

    invalid: [
        {
            code: 'var bar = {a: foo.a, b: foo.b, c: foo.c};',
            errors: errors
        }, {
            code: 'var bar = {a: foo.a, b: foo.b, c: foo.c};',
            options: [{objectsLargerThan: 1}],
            errors: errors
        }
    ]
});
