/**
 * @fileoverview Rule to check the iteratee in a call to _.each does not return a value
 */
'use strict';

var _ = require('lodash');
var lodashUtil = require('../util/lodashUtil');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    function getSurroundingFunction() {
        var ancestors = context.getAncestors();
        return _.findLast(ancestors, function (node) {
            return node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration';
        });
    }

    function isReturnFromIteratee() {
        var surroundingFunction = getSurroundingFunction();
        return !_.isUndefined(surroundingFunction) &&
            lodashUtil.isCallToMethod(surroundingFunction.parent, 'each') &&
            lodashUtil.getLodashIteratee(surroundingFunction.parent) === surroundingFunction;
    }

    return {
        ReturnStatement: 
        function (node) {
            if (isReturnFromIteratee() && !_.isNull(node.argument)) {
                context.report(node, 'Do not return a value from the iteratee of _.each');
            }
        }
    };
};
