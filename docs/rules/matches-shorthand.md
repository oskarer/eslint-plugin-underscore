# Matches shorthand

When using certain method in Underscore such as filter, it's possible to use the `_.matcher` callback shorthand. 
This rule will enforce whether or not to use shorthand when possible to keep consistency in your code.

## Rule Details

This rule takes one argument, when to use shorthand: `always` or `never` (default is always`).

The following patterns are considered warnings:

```js
/*eslint Underscore/matches-shorthand: [2, "always"]
var ids = _.find(users, function (user) {
  return user.name === 'Joe' && user.type === 'admin';
});
```

The following patterns are not considered warnings:

```js
/*eslint Underscore/prop-shorthand: [2, "always"]
var ids = _.filter(users, function (user) {
  return user.name !== 'Joe';
});
```

```js
/*eslint Underscore/prop-shorthand: [2, "always"]
var ids = _.filter(users, {name: 'Joe'});
});
```

## When Not To Use It

If you do not want to enforce whether or not to use the `_.matcher` callback shorthand, then you can disable this rule.
