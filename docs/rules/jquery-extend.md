# Standardize on either Underscore's or jQuery's extend function (jquery-extend)

Both Underscore and jQuery implement an `extend` function. For consistency, you
may want to standardize on one over the other.

## Rule Details

### never (default)

`jquery-extend: [2, "never"]`

The following patterns are considered warnings:

```js

$.extend({}, {});

```

The following patterns are not warnings:

```js

_.extend({}, {});

// A single argument extends the jQuery namespace
$.extend({});


```

### always

`jquery-extend: [2, "always"]`

The following patterns are considered warnings:

```js

_.extend({}, {});

```

The following patterns are not warnings:

```js

$.extend({}, {});

```

### Options

This rule has two modes: `never` (the default), and `always`.
