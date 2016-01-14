/**
 * @fileoverview Prefer _.where to find when using matcher shorthand
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------


module.exports = function(context) {
    var _ = require('lodash');
    var aliases = require('../util/aliases');
    var lodashUtil = require('../util/lodashUtil');
    var astUtil = require('../util/astUtil');

    function isFind(node) {
        return _.contains(aliases.expandAlias('find'), astUtil.getMethodName(node));
    }

    return {
        CallExpression: function (node) {
            if(isFind(node) && lodashUtil.usesMatchesShorthand(node)) {
                context.report(node.callee.property, 'Prefer _.findWhere to find when using matcher shorthand');
            }
        }
    };

};
