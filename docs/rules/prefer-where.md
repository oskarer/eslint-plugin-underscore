# Prefer using _.where to _.filter when filtering with a matcher. (prefer-where)

Underscore offers a key/value object "matcher" syntax for most of it's
collection functions. `_.where` is a variant of `_.filter`/`_.select` that only accepts the matcher syntax. In the matcher case, `_.where` is more readable.

## Rule Details

The following patterns are considered warnings:

```js

var mediums = _.filter(items, {size: 4});

```

The following patterns are not warnings:

```js

var mediums = _.where(items, {size: 4});

```

## Further Reading

[Underscore's pluck documentation](http://underscorejs.org/#pluck)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

The following patterns are considered warnings:

```js

// fill me in

```

The following patterns are not warnings:

```js

// fill me in

```

## Further Reading

[Underscore's where documentation](http://underscorejs.org/#where)
