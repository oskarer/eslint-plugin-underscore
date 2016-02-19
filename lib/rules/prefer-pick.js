/**
 * @fileoverview When creating an object that is a subset of another object, use _.pick
 * @author Jordan Eldredge <jordan@jordaneldredge.com>
 * @copyright 2016 Jordan Eldredge <jordan@jordaneldredge.com>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    var _ = require('lodash');

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    function isManualPick(node) {
        var objectNames = _.map(node.properties, function (prop) {
            if (
                prop.value.type === 'MemberExpression' &&
                prop.value.property.name === prop.key.name &&
                !prop.value.computed
            ) {
                return prop.value.object.name;
            }

            return false;
        });

        return _.all(objectNames) && _.uniq(objectNames).length === 1;
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        ObjectExpression: function (node) {
            var objectsLargerThan = _.get(context.options[0], 'objectsLargerThan', 0);
            if (node.properties.length > objectsLargerThan && isManualPick(node)) {
                context.report(node, 'Prefer _.pick over defining an object that is a subset of another object');
            }
        }
    };
};

module.exports.schema = [
    {
        type: 'object',
        properties: {
            objectsLargeThan: {
                integer: {minimum: 1}
            }
        }
    }
];
