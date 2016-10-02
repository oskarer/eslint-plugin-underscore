/**
 * @fileoverview Prefer using functional notation _.func(...) over object notation _(...).func()
 * @author Oskar Eriksson <oskar.eriksson9@gmail.com>
 * @copyright 2016 Oskar Eriksson <oskar.eriksson9@gmail.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prefer-functional-notation'),
    RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var message = 'Prefer functional notation over object notation.';

ruleTester.run('prefer-functional-notation', rule, {

    valid: [
        "_.func(items, 'arg');",
        '_.func(items);'
    ],

    invalid: [
        {
            code: "_(items).func('arg');",
            errors: [{message: message}],
            output: "_.func(items, 'arg');"
        },
        {
            code: '_(items).func();',
            errors: [{message: message}],
            output: '_.func(items);'
        }
    ]
});
