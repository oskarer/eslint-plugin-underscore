/**
 * @fileoverview Standardize on either Underscore's bind or jQuery's proxy function
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    var lodashUtil = require('../util/lodashUtil');
    var jqueryUtil = require('../util/jqueryUtil');

    var callExpressionReporters = {
        always: function (node) {
            if (lodashUtil.isCallToMethod(node, 'bind')) {
                context.report(node, "Prefer jQuery's proxy over Underscore's bind");
            }
        },
        never: function (node) {
            if (jqueryUtil.isCallToMethod(node, 'proxy')) {
                context.report(node, "Prefer Underscore's bind over jQuery's proxy");
            }
        }
    };

    return {
        CallExpression: callExpressionReporters[context.options[0] || 'never']
    };
};

module.exports.schema = [
    {
        enum: ['always', 'never']
    }
];
