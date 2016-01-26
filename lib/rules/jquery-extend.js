/**
 * @fileoverview Standardize on either Underscore's or jQuery's extend function
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
            if (lodashUtil.isCallToMethod(node, 'extend')) {
                context.report(node, "Prefer jQuery's extend over Underscore's");
            }
        },
        never: function (node) {
            if (jqueryUtil.isCallToMethod(node, 'extend') && node.arguments.length > 1) {
                context.report(node, "Prefer Underscore's extend over jQuery's");
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
