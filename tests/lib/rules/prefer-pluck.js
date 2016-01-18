/**
 * @fileoverview Prefer using _.pluck to _.map when extracting a list of property values.
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prefer-pluck'),
    RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var message = 'Prefer _.pluck to map when collecting a single property';

ruleTester.run('prefer-pluck', rule, {

    valid: [
        "var ids = _.pluck(items, 'id');",
        'var ids = _.map(items, {id: 1});',
        'var ids = _.map(items, function(item){ return item.id; });',
        'var ids = _.map([], function (i) { return i.a; });'
    ],

    invalid: [
        {
            code: "var ids = _.map(items, 'id');",
            errors: [{mesage: message, column: 13}],
            output: "var ids = _.pluck(items, 'id');"
        }, {
            code: "var ids = _(items).map('id');",
            errors: [{mesage: message, column: 20}],
            output: "var ids = _(items).pluck('id');"
        }, {
            code: "var ids = _.chain(items).map('id');",
            errors: [{mesage: message, column: 26}],
            output: "var ids = _.chain(items).pluck('id');"
        }
    ]
});
