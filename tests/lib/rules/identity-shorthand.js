'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/identity-shorthand');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();

var message = {
    always: 'Prefer omitting the iteratee over a function that returns its argument',
    never: 'Do not use the identity shorthand syntax'
};

ruleTester.run('identity-shorthand', rule, {
    valid: [
        'var ids = _.map([], function (i) { return x.id; });',
        'var ids = _.map([]);',
        {
            code: 'var r = _.map([], function(x) { return x; })',
            options: ['never']
        }, {
            code: 'var r = _.map([], x => x)',
            options: ['never'],
            ecmaFeatures: {arrowFunctions: true}
        },
        'var twos = _.map(a, function() { return 2; });'
    ],
    invalid: [{
        code: 'var ids = _.map([], function (i) { return i; });',
        errors: [{message: message.always, column: 21}],
        output: 'var ids = _.map([]);'
    }, {
        code: 'var r = _.map([], x => x);',
        ecmaFeatures: {arrowFunctions: true},
        errors: [{message: message.always, column: 19}],
        output: 'var r = _.map([]);'
    }, {
        code: 'var ids = _.chain([]).map(function (i) { return i; }).value();',
        errors: [{message: message.always, column: 27}],
        output: 'var ids = _.chain([]).map().value();'
    }, {
        code: 'var ids = _([]).map(function (i) { return i; });',
        errors: [{message: message.always, column: 21}],
        output: 'var ids = _([]).map();'
    }, {
        code: 'var ids = _.map(arr);',
        options: ['never'],
        errors: [{message: message.never, column: 13}]
    }]
});
