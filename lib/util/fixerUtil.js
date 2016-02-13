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

function removeArg(func, argNum) {
    var args = func.arguments;
    var start = argNum === 0 ? args[argNum].range[0] : args[argNum - 1].range[1];
    return function (fixer) {
        return fixer.removeRange([start, args[argNum].range[1]]);
    };
}

function convertToIdentityShorthand(node) {
    return removeArg(node, node.arguments.length - 1);
}

module.exports = {
    quoteString: quoteString,
    renameFunction: renameFunction,
    convertToPropShorthand: convertToPropShorthand,
    convertToIdentityShorthand: convertToIdentityShorthand
};
