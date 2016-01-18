/**
 * @fileoverview Prefer _.where to find when using matcher shorthand
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

module.exports = function(context) {

    function isFind(node) {
        return _.contains(aliases.expandAlias('find'), astUtil.getMethodName(node));
    }

    return {
        CallExpression: function (node) {
            if(isFind(node) && lodashUtil.usesMatchesShorthand(node)) {
                context.report({
                    node: node.callee.property,
                    message: 'Prefer _.findWhere to find when using matcher shorthand',
                    fix: fixerUtil.renameFunction(node, 'findWhere')
                });
            }
        }
    };

};
