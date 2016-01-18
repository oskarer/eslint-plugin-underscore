/**
 * @fileoverview Prefer using _.pluck to _.map when extracting a list of property values.
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

var astUtil = require('../util/astUtil');
var fixerUtil = require('../util/fixerUtil');
var lodashUtil = require('../util/lodashUtil');
var astUtil = require('../util/astUtil');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        CallExpression: function (node) {
            if(astUtil.getMethodName(node) === 'map' && lodashUtil.usesPropShorthand(node)) {
                context.report({
                    node: node.callee.property,
                    message: 'Prefer _.pluck to map when collecting a single property',
                    fix: fixerUtil.renameFunction(node, 'pluck')
                });
            }
        }
    };

};
