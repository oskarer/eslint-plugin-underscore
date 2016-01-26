/**
 * @fileoverview Rule to check if a call to _.each should be a call to _.filter
 */
'use strict';

var lodashUtil = require('../util/lodashUtil');
var astUtil = require('../util/astUtil');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    function onlyHasPush(func) {
        var firstLine = astUtil.getFirstFunctionLine(func);
        var exp = func && func.type === 'ArrowFunctionExpression' ? firstLine : firstLine && firstLine.expression;
        return astUtil.hasOnlyOneStatement(func) && astUtil.getMethodName(exp) === 'push';
    }

    return {
        CallExpression: function (node) {
            if (lodashUtil.isCallToMethod(node, 'each') && onlyHasPush(lodashUtil.getLodashIteratee(node))) {
                context.report(node, 'Prefer _.map over a _.each with a push to an array inside');
            }
        }
    };
};
