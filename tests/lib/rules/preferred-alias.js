'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/preferred-alias');
var RuleTester = require('eslint').RuleTester;
var toErrorObject = require('../testUtil/toErrorObject').fromMessage("Method 'forEach' is an alias, for consistency prefer using 'each'");

var ruleTester = new RuleTester();
// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

ruleTester.run('preferred-alias', rule, {
    valid: [
        '_.each();',
        '_(users).map().value().forEach(function (i) { i.f(); });',
        'var x = _.map(y, function (i) { return i; });'
    ],
    invalid: [
        '_.forEach(users, function (i) { i.f(); });',
        '_(users).forEach(function (i) { i.f(); });',
        '_(users).map(function (i) { return i; }).forEach(function (i) {});'
    ].map(toErrorObject)
});
