/**
 * @fileoverview Prefer using functional notation _.func(...) over object notation _(...).func()
 * @author Oskar Eriksson <oskar.eriksson9@gmail.com>
 * @copyright 2016 Oskar Eriksson <oskar.eriksson9@gmail.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

var astUtil = require('../util/astUtil');
// var fixerUtil = require('../util/fixerUtil');
var lodashUtil = require('../util/lodashUtil');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    return {
        CallExpression: function (node) {
            if (astUtil.getCalleeName(node) === '_' && !lodashUtil.isLodashCall(node)) {
                context.report({
                    node: node,
                    message: 'Prefer functional notation over object notation.',
                    fix: function () {}
                });
            }
        }
    };
};
