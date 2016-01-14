/**
 * @fileoverview Rule to check if the property shorthand can be used
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------


module.exports = function (context) {
    var _ = require('lodash');
    var USES_ITERATEE = require('../util/aliases').USES_ITERATEE;
    var lodashUtil = require('../util/lodashUtil');
    var astUtil = require('../util/astUtil');

    function canUseShorthand(func) {
        return astUtil.isMemberExpOf(astUtil.getValueReturnedInFirstLine(func), astUtil.getFirstParamName(func), false);
    }

    function methodSupportsShorthand(node) {
        return _.includes(USES_ITERATEE, astUtil.getMethodName(node));
    }

    function getIterateesAccessedPropertyName(iteratee) {
        var firstLine = astUtil.getValueReturnedInFirstLine(iteratee)
        var property = firstLine.property;
        return property.type === 'Identifier' ? property.name : property.value;
    }

    function quoteString(string) {
        var quote = "'";
        return [quote, string, quote].join('');
    }

    var callExpressionVisitors = {
        always: function (node) {
            if (methodSupportsShorthand(node) && canUseShorthand(lodashUtil.getLodashIteratee(node))) {
                context.report({
                    node: node.callee.property,
                    message: 'Prefer property shorthand syntax',
                    fix: function(fixer) {
                        var iteratee = lodashUtil.getLodashIteratee(node);
                        var propertyName = getIterateesAccessedPropertyName(iteratee)
                        return fixer.replaceText(iteratee, quoteString(propertyName));
                    }
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
