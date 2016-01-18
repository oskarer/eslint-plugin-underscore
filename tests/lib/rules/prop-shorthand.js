'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prop-shorthand');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();

var message = {
    always:  'Prefer a "property" string to a function that returns a property',
    never: 'Do not use property shorthand syntax'
};

ruleTester.run('prop-shorthand', rule, {
    valid: [
        'var ids = _.map([], function (i) { return x.id; });',
        'var ids = _.map([], function (i) { return i.id + "?"; });',
        'var publicModules = _(files).map(readModule).compact().value();',
        'var ids = _.map([], function (i) { return i[k]; });',
        'var r = _.map([], function() { return React.PropTypes.object; })',
        'var ids = _(arr).map(function (i) { return i.a.b.c; });',
        'var ids = _(arr).map("x").map("y").map(function (i) { return i.a.b; });',
        'var ids = _.map([], function (i) { var a = b; return i.a; });',
        'var r = _.map([])',
        {
            code: 'var ids = _.map([], i => i.a.b.c);',
            ecmaFeatures: {arrowFunctions: true}
        }, {
            code: 'var r = _.map([], function(x) { return x.id})',
            options: ['never']
        }, {
            code: 'var r = _.map([], x => x.id)',
            options: ['never'],
            ecmaFeatures: {arrowFunctions: true}
        }
    ],
    invalid: [{
        code: 'var ids = _.map([], function (i) { return i.a; });',
        errors: [{message: message.always, column: 21}],
        output: "var ids = _.map([], 'a');"
    }, {
        code: 'var ids = _.map([], function (i) { return i["z"]; });',
        errors: [{message: message.always, column: 21}],
        output: "var ids = _.map([], 'z');"
    }, {
        code: 'var r = _.map([], x => x.id);',
        ecmaFeatures: {arrowFunctions: true},
        errors: [{message: message.always, column: 19}],
        output: "var r = _.map([], 'id');"
    }, {
        code: 'var ids = _.map(arr, "id");',
        options: ['never'],
        errors: [{message: message.never, column: 13}]
    }]
});
