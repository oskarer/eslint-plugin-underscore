'use strict';
var astUtil = require('./astUtil');

function isJqueryCall(node) {
    return astUtil.isCallFromObject(node, '$');
}

function isCallToMethod(node, method) {
    return isJqueryCall(node) && astUtil.getMethodName(node) === method;
}

module.exports = {
    isJqueryCall: isJqueryCall,
    isCallToMethod: isCallToMethod
};

