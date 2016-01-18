/**
 * @fileoverview Prefer _.where to filter when using matcher shorthand
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prefer-where'),
    RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var errors = [{message: 'Prefer _.where to filter when using matcher shorthand'}];
ruleTester.run('prefer-where', rule, {

    valid: [
        "var red = _.where(items, {color: 'red'});",
        "var blue = _.where(items, {color: 'blue'});"
    ],

    invalid: [
        {
            code: "var red = _.filter(items, {color: 'red'});",
            errors: errors,
            output: "var red = _.where(items, {color: 'red'});"
        }, {
            code: "var blue = _.select(items, {color: 'blue'});",
            errors: errors,
            output: "var blue = _.where(items, {color: 'blue'});"
        }, {
            code: "var blue = _(items).select({color: 'blue'});",
            errors: errors,
            output: "var blue = _(items).where({color: 'blue'});"
        }, {
            code: "var blue = _.chain(items).select({color: 'blue'});",
            errors: errors,
            output: "var blue = _.chain(items).where({color: 'blue'});"
        }
    ]
});
