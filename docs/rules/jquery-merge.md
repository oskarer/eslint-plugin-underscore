# Standardize on either Underscore's union or jQuery's merge function (jquery-merge)

Both Underscore and jQuery implement function to combine arrays. For
consistency, you may want to standardize on one over the other.

## Rule Details

### never (default)

`jquery-merge: [2, "never"]`

The following patterns are considered warnings:

```js

$.merge([1, 2, 3], [4, 5, 6]);

```

The following patterns are not warnings:

```js

_.union([1, 2, 3], [4, 5, 6]);

```

### always

`jquery-merge: [2, "always"]`

The following patterns are considered warnings:

```js

_.union([1, 2, 3], [4, 5, 6]);

```

The following patterns are not warnings:

```js

$.merge([1, 2, 3], [4, 5, 6]);

```

### Options

This rule has two modes: `never` (the default), and `always`.
