# Prefer _.pick

Underscore has `_.pick`, which allows you to create a new object containing
only a subset of the original object's keys.

It is clearer, more idiomatic, and less error-prone to use `_.pick` than to
construct the new object manually.

## Rule Details

The following patterns are considered warnings:

```js

var bar = {
    a: foo.a,
    b: foo.b,
    c: foo.c
};

```

The following patterns are not warnings:

```js
// "underscore/prefer-pick": [2, {objectsLargerThan: 2}]
var bar = {
    a: foo.a,
    b: foo.b
};

// Keys of the new object are different than the original
var bar = {
    x: foo.a,
    y: foo.b,
    z: foo.c
};

// New object is constructed from multiple objects
var bar = {
    a: foo.a,
    b: baz.b,
    c: biz.c
};

```

### Options

This rule takes an arguments object with one key: `objectsLargeThan`. 

Set this key to a value to allow the manual construction of objects with only a small number of keys.

    "underscore/prefer-pick": [2, {objectsLargerThan: 3}]

## Further Reading

[Underscore's pick documentation](http://underscorejs.org/#pick)
