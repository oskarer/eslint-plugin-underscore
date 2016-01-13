'use strict';

var _ = require('lodash');

var ALIASES = {
    each: ['forEach'],
    map: ['collect'],
    reduceRight: ['foldr'],
    reduce: ['foldl', 'inject'],
    filter: ['select'],
    every: ['all'],
    some: ['any'],
    find: ['detect'],
    contains: ['includes'],
    first: ['head', 'take'],
    rest: ['tail', 'drop'],
    uniq: ['unique'],
    functions: ['methods'],
    extendOwn: ['assign'],
    matcher: ['matches']
};

var WRAPPER_ALIASES = {
    value: ['run', 'toJSON', 'valueOf']
};

var usesIteratee = [
    'map',
    'find',
    'filter',
    'reject',
    'every',
    'some',
    'max',
    'min',
    'sortBy',
    'groupBy',
    'indexBy',
    'countBy',
    'sortedIndex',
    'partition',
    'uniq'
];

var callbackShouldReturn = [
    'map',
    'reduce',
    'reduceRight',
    'find',
    'filter',
    'where',
    'findWhere',
    'reject',
    'every',
    'some',
    'contains',
    'invoke',
    'pluck',
    'max',
    'min',
    'sortBy',
    'groupBy',
    'indexBy',
    'countBy',
    'shuffle',
    'sample',
    'toArray',
    'size',
    'partition'
];


var CHAINABLE = [
    'after', 'ary', 'assign', 'at', 'before', 'bind', 'bindAll', 'bindKey', 'callback', 'chain', 'chunk', 'commit', 'compact', 'concat', 'constant', 'countBy', 'create', 'curry',
    'debounce', 'defaults', 'defaultsDeep', 'defer', 'delay', 'difference', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'fill', 'filter', 'flatten', 'flattenDeep', 'flow',
    'flowRight', 'forEach', 'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'functions', 'groupBy', 'indexBy', 'initial', 'intersection', 'invert', 'invoke', 'keys',
    'keysIn', 'map', 'mapKeys', 'mapValues', 'matches', 'matchesProperty', 'memoize', 'merge', 'method', 'methodOf', 'mixin', 'modArgs', 'negate', 'omit', 'once', 'pairs', 'partial',
    'partialRight', 'partition', 'pick', 'plant', 'pluck', 'property', 'propertyOf', 'pull', 'pullAt', 'push', 'range', 'rearg', 'reject', 'remove', 'rest', 'restParam', 'reverse', 'set',
    'shuffle', 'slice', 'sort', 'sortBy', 'sortByAll', 'sortByOrder', 'splice', 'spread', 'take', 'takeRight', 'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'toArray',
    'toPlainObject', 'transform', 'union', 'uniq', 'unshift', 'unzip', 'unzipWith', 'values', 'valuesIn', 'where', 'without', 'wrap', 'xor', 'zip', 'zipObject', 'zipWith'];

var ALL_ALIASES = _.assign({}, ALIASES, WRAPPER_ALIASES);
function expandAlias(method) {
    return method in ALL_ALIASES ? ALL_ALIASES[method].concat(method) : [method];
}

function expandAliases(methods) {
    return _(methods).map(expandAlias).flatten().value();
}

var WRAPPER_METHODS = ['concat', 'join', 'pop', 'push', 'reverse', 'shift', 'slice', 'sort', 'splice', 'unshift', 'replace', 'split'];

function isAliasOfMethod(method, suspect) {
    return _.includes(expandAlias(method), suspect);
}

module.exports = {
    isAliasOfMethod: isAliasOfMethod,
    ALIASES: ALIASES,
    CHAINABLE_ALIASES: expandAliases(CHAINABLE),
    USES_ITERATEE: expandAliases(usesIteratee),
    WRAPPER_METHODS: WRAPPER_METHODS,
    CALLBACK_SHOULD_RETURN: expandAliases(callbackShouldReturn)
};
