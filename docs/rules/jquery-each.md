# Standardize on either Underscore's or jQuery's each function (jquery-each)

Both Underscore and jQuery implement an `each` function. For consistency, you
may want to standardize on one over the other.

## Rule Details

### never (default)

`jquery-each: [2, "never"]`

The following patterns are considered warnings:

```js

$.each([], function(key, value){ return value % 2; });

```

The following patterns are not warnings:

```js

_.each([], function(value, key){ return value % 2; });

```

### always

`jquery-each: [2, "always"]`

The following patterns are considered warnings:

```js

_.each([], function(value, key){ return value % 2; });

```

The following patterns are not warnings:

```js

$.each([], function(key, value){ return value % 2; });

```

### Options

This rule has two modes: `never` (the default), and `always`.
