/**
 * @fileoverview Standardize on either Underscore's union or jQuery's merge function
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
            if (lodashUtil.isCallToMethod(node, 'union')) {
                context.report(node, "Prefer jQuery's merge over Underscore's union");
            }
        },
        never: function (node) {
            if (jqueryUtil.isCallToMethod(node, 'merge')) {
                context.report(node, "Prefer Underscore's union over jQuery's merge");
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
