# Prefer using _.findWhere to _.find when searching with a matcher. (prefer-where)

Underscore offers a key/value object "matcher" syntax for most of it's
collection functions. `_.findWhere` is a variant of `_.find`/`_.detect` that only accepts the matcher syntax. In the matcher case, `_.findWhere` is more readable.

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

## Rule Details

The following patterns are considered warnings:

```js

var medium = _.find(items, {size: 4});

```

The following patterns are not warnings:

```js

var medium = _.findWhere(items, {size: 4});

```

## Further Reading

[Underscore's findWhere documentation](http://underscorejs.org/#findWhere)

Please describe the origin of the rule here.
