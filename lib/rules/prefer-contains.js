/**
 * @fileoverview Prefer using _.contains to checking for a negative index.
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

var _ = require('lodash');
var aliases = require('../util/aliases');
var lodashUtil = require('../util/lodashUtil');
var fixerUtil = require('../util/fixerUtil');
var astUtil = require('../util/astUtil');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    function isIndexOf(node) {
        return lodashUtil.isLodashCall(node) && _.contains(aliases.expandAlias('indexOf'), astUtil.getMethodName(node));
    }

    function isNegativeIndexCheck(operator, value) {
        if (_.includes(['!==', '!=', '==', '===', '>'], operator) && value === -1) {
            return true;
        } else if (_.contains(['<', '>='], operator) && value === 0) {
            return true;
        }
        return false;
    }

    function flipOperator(operator) {
        if (operator[0] === '>') {
            operator = operator.replace(/>/, '<');
        } else if (operator[0] === '<') {
            operator = operator.replace(/</, '>');
        }
        return operator;
    }

    return {

        BinaryExpression: function (node) {
            var right;
            var operator = node.operator;

            if (isIndexOf(node.right)) {
                right = node.left;
                operator = flipOperator(operator);
            } else if (isIndexOf(node.left)) {
                right = node.right;
            } else {
                // We are not comparing to _.indexOf
                return;
            }

            var integer;
            if (right.type === 'Literal') {
                integer = right.value;
            } else if (right.type === 'UnaryExpression') {
                integer = -right.argument.value;
            } else {
                // We are not comparing to an integer
                return;
            }


            if (isNegativeIndexCheck(operator, integer)) {
                context.report({
                    node: node.left,
                    message: 'Prefer _.contains to checking for a negative _.indexOf'
                    //fix: fixerUtil.renameFunction(node, 'findWhere')
                });
            }
        }

    };
};
