/**
 * @fileoverview Rule to check if the matches shorthand can be used
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function (context) {
    var lodashUtil = require('../util/lodashUtil');
    var astUtil = require('../util/astUtil');
    var USES_ITERATEE = require('../util/aliases').USES_ITERATEE;

    function isConjunction(exp) {
        return exp && exp.type === 'LogicalExpression' && exp.operator === '&&';
    }

    function isConjunctionOfEqEqEqToMemberOf(exp, paramName) {
        var allowComputed = context.options[2] && context.ecmaFeatures.objectLiteralComputedProperties;
        if (exp) {
            var checkStack = [exp];
            var curr;
            var allParamMemberEq = true;
            curr = checkStack.pop();
            while (curr) {
                if (isConjunction(curr)) {
                    checkStack.push(curr.left, curr.right);
                } else if (!astUtil.isEqEqEqToMemberOf(curr, paramName, allowComputed)) {
                    allParamMemberEq = false;
                }
                curr = checkStack.pop();
            }
            return allParamMemberEq;
        }
    }

    function shouldPreferMatches(func) {
        return isConjunctionOfEqEqEqToMemberOf(astUtil.getValueReturnedInFirstLine(func), astUtil.getFirstParamName(func));
    }

    function methodSupportsShorthand(node) {
        return USES_ITERATEE.indexOf(astUtil.getMethodName(node)) !== -1;
    }

    function usesMatchesShorthand(node) {
        var iteratee = lodashUtil.getLodashIteratee(node);
        return iteratee && iteratee.type === 'ObjectExpression';
    }

    var callExpressionVisitors = {
        always: function (node) {
            if (methodSupportsShorthand(node) && shouldPreferMatches(lodashUtil.getLodashIteratee(node))) {
                context.report(node.callee.property, 'Prefer matches syntax');
            }
        },
        never: function (node) {
            if (usesMatchesShorthand(node)) {
                context.report(node.callee.property, 'Do not use matches syntax');
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
    }, {
        type: 'boolean'
    }
];
