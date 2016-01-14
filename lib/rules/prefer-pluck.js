/**
 * @fileoverview Prefer using _.pluck to _.map when extracting a list of property values.
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    var lodashUtil = require('../util/lodashUtil');
    var astUtil = require('../util/astUtil');

    return {
        CallExpression: function (node) {
            if(astUtil.getMethodName(node) === 'map' && lodashUtil.usesPropShorthand(node)) {
                context.report({
                    node: node.callee.property,
                    message: 'Prefer _.pluck to map when using property shorthand',
                    fix: function(fixer) {
                        return fixer.replaceTextRange(node.callee.property.range, 'pluck');
                    }
                });
            }
        }
    };

};
