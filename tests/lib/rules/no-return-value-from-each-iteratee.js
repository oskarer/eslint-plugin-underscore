'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-return-value-from-each-iteratee');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var errors = [{message: 'Do not return a value from the iteratee of _.each'}];
ruleTester.run('no-return-value-from-each-iteratee', rule, {
    valid: ['_.each(items, function(item) { if(item.bogus) { return; } myFunc(item);})',
            '_.each(items, function(item) { function bogus(x) {return !x.unbogus;} if(bogus(item)) {return;} myfunc(item);})',
            '_.each(items, function(item) { myFunc(item); })',
            'function foo(x) { return x+1;}',
            '_(items).each(function(x) {console.log(x)});',
            '_.each(function(x) { return x+1;}, function(f) { console.log (f);});'
           ],
    invalid: [
        {
            code: '_.each(items, function(item) { if(item.selected) { found = item; return false; }});',
            errors: errors
        },
        {
            code: '_.each(items, function(item) { function bogosity(x) {return x != 42;} return bogosity(item)});',
            errors: errors
        },
        {
            code: '_(items).each(function(n) { return n+1 });',
            errors: errors
        }
    ]
});
