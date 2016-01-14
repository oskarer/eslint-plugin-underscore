# Prefer using _.pluck to _.map when extracting a list of property values. (prefer-pluck)

One common use of `_.map` is to extract a single property from an array of
objects. Underscore has a special method for handling this case: `_.pluck`.

Using map with the property shorthand (passing a literal for the second
argument) can be more intuitively written by using pluck.

## Rule Details

The following patterns are considered warnings:

```js

var ids = _.map(items, 'id');

```

The following patterns are not warnings:

```js

var ids = _.pluck(items, 'id');
var ids = _.map(items, function(item){ return item.id; });

```

## Further Reading

[Underscore's pluck documentation](http://underscorejs.org/#pluck)
