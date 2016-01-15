/**
 * @fileoverview Prefer using _.pluck to _.map when extracting a list of property values.
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/prefer-pluck"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var wrongNameMessage = 'Prefer _.pluck to map when collecting a single property';
var wrongSyntaxMessage = 'Prefer a "property" string to a function that returns a property' ;

var errors = {
    property: [{ message: wrongNameMessage }],
    func: [{ message: wrongNameMessage }, { message: wrongSyntaxMessage }]
}

ruleTester.run("prefer-pluck", rule, {

    valid: [
        "var ids = _.pluck(items, 'id');",
        "var ids = _.map(items, {id: 1});"
    ],

    invalid: [
        {
            code: "var ids = _.map(items, function(item){ return item.id; });",
            errors: errors.func,
            output: "var ids = _.pluck(items, 'id');"
        }, {
            code: "var ids = _.map(items, 'id');",
            errors: errors.property,
            output: "var ids = _.pluck(items, 'id');"
        }, {
            code: "var ids = _(items).map('id');",
            errors: errors.property,
            output: "var ids = _(items).pluck('id');"
        }, {
            code: "var ids = _.chain(items).map('id');",
            errors: errors.property,
            output: "var ids = _.chain(items).pluck('id');"
        }, {
            code: 'var ids = _.map([], function (i) { return i.a; });',
            errors: errors.func,
            output: "var ids = _.pluck([], 'a');"
        }
    ]
});
