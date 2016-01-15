/**
 * @fileoverview Rule to check if the property shorthand can be used
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var lodashUtil = require('../util/lodashUtil');
var fixerUtil = require('../util/fixerUtil');

module.exports = function (context) {

    var callExpressionVisitors = {
        always: function (node) {
            if (lodashUtil.methodSupportsShorthand(node) && lodashUtil.couldUsePropShorthand(node)) {
                context.report({
                    node: node.arguments[1],
                    message: 'Prefer a "property" string to a function that returns a property',
                    fix: fixerUtil.convertToPropShorthand(node)
                });
            }
        },
        never: function (node) {
            if (lodashUtil.usesPropShorthand(node)) {
                context.report(node.callee.property, 'Do not use property shorthand syntax');
            }
        }
    };

    return {
        CallExpression: callExpressionVisitors[context.options[0] || 'always']
    };
};

module.exports.schema = [
    {
        enum: ['always', 'never']
    }
];
