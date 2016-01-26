'use strict';

var lodashUtil = require('../util/lodashUtil');

function quoteString(string) {
    var quote = "'";
    return [quote, string, quote].join('');
}

function renameFunction(node, newName) {
    return function (fixer) {
        return fixer.replaceTextRange(node.callee.property.range, newName);
    };
}

function convertToPropShorthand(node) {
    return function (fixer) {
        var iteratee = lodashUtil.getLodashIteratee(node);
        var propertyName = lodashUtil.getIterateesAccessedPropertyName(iteratee);
        return fixer.replaceText(iteratee, quoteString(propertyName));
    };
}

module.exports = {
    quoteString: quoteString,
    renameFunction: renameFunction,
    convertToPropShorthand: convertToPropShorthand
};
