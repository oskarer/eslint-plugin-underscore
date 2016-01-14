/**
 * @fileoverview Prefer _.findWhere to find when using matcher shorthand
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/prefer-findwhere"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var errors = [{ message: "Prefer _.findWhere to find when using matcher shorthand" }]
ruleTester.run("prefer-where", rule, {

    valid: [
        "var red = _.findWhere(items, {color: 'red'});",
        "var blue = _.findWhere(items, {color: 'blue'});",
    ],

    invalid: [
        {
            code: "var red = _.find(items, {color: 'red'});",
            errors: errors
        }, {
            code: "var blue = _.detect(items, {color: 'blue'});",
            errors: errors
        }, {
            code: "var blue = _(items).detect({color: 'blue'});",
            errors: errors
        }, {
            code: "var blue = _.chain(items).detect({color: 'blue'});",
            errors: errors
        }
    ]
});
