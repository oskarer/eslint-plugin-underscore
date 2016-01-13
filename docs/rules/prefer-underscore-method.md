# Prefer Underscore method

When using native functions like `each` and `map`, it's often better to use the Underscore implementation. 

## Rule Details

This rule takes no arguments.

The following patterns are considered warnings:

```js

var b = a.map(f);

if (arr.some(f)) {
  // ...
}

```

The following patterns are not considered warnings:

```js

_.map(a, f);
 
 _(arr).map(f).reduce(g);

```


## When Not To Use It

If you do not want to enforce using Underscore methods, or are using a library like Backbone which impalements methods by the same name as the builtin methods, you should not use this rule.

