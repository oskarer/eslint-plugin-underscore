/**
 * @fileoverview Prefer omitting the second argument, which is shorthand for _.identity()
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
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
            if (lodashUtil.methodSupportsShorthand(node) && lodashUtil.couldUseIdentityShorthand(node)) {
                context.report({
                    node: lodashUtil.getLodashIteratee(node),
                    message: 'Prefer omitting the iteratee over a function that returns its argument',
                    fix: fixerUtil.convertToIdentityShorthand(node)
                });
            }
        },
        never: function (node) {
            if (lodashUtil.methodSupportsShorthand(node) && lodashUtil.usesIdentityShorthand(node)) {
                context.report(node.callee.property, 'Do not use the identity shorthand syntax');
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
