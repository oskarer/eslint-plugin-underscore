# Prefer map

When using `_.each` that pushes into an array, it could improve readability to use `_.map` instead.

## Rule Details

This rule takes no arguments.

The following patterns are considered warnings:

```js

_.each(arr, function(x) { newArr.push(f(x))}

```

The following patterns are not considered warnings:

```js

_.each(arr, function(x) { if (x.a) {a.push(x)}})
 
```


## When Not To Use It

If you do not want to enforce using `map`, you should not use this rule.
