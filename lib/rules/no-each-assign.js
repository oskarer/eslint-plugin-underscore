/**
 * @fileoverview Don't use the return value from _.each
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var _ = require('lodash');
var aliases = require('../util/aliases');
var astUtil = require('../util/astUtil');

module.exports = function (context) {
    function isEach(node) {
        return _.contains(aliases.expandAlias('each'), astUtil.getMethodName(node));
    }

    function outputIsAssigned(node, ancestors) {
        var parent = ancestors.pop();
        var grandParent = ancestors.pop();
        if (parent && parent.type === 'ExpressionStatement') {
            return false;
        }
        if (grandParent && grandParent.type === 'LabeledStatement') {
            return true;
        }
        return false;
    }

    return {
        CallExpression: function (node) {
            if (isEach(node) && outputIsAssigned(node, context.getAncestors(node))) {
                context.report({
                    node: node,
                    message: "Don't use the return value from _.each"
                });
            }
        }
    };
};

module.exports.schema = [
    // fill in your schema
];
