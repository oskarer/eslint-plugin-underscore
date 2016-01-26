# Standardize on either Underscore's proxy or jQuery's bind function (jquery-proxy)

Both Underscore and jQuery implement function to bind a context into
a function. For consistency, you may want to standardize on one over the
other.

## Rule Details

### never (default)

`jquery-proxy: [2, "never"]`

The following patterns are considered warnings:

```js

$.proxy(myFunc, this);

```

The following patterns are not warnings:

```js

_.bind(myFunc, this);

```

### always

`jquery-proxy: [2, "always"]`

The following patterns are considered warnings:

```js

_.bind(myFunc, this);

```

The following patterns are not warnings:

```js

$.proxy(myFunc, this);

```

### Options

This rule has two modes: `never` (the default), and `always`.
