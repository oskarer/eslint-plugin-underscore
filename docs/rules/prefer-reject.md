# Prefer reject

When using `_.filter` with a negative condition, it could improve readability by switching to `_.reject`

## Rule Details

The following patterns are considered warnings:

```js
_.filter(users, function(user) {
  return user.name.givenName !== 'Bob';
});

_.filter(users, function(user) {
  return !user.isSomething;
});
```

The following patterns are not considered warnings:

```js
_.filter(users, function(user) {
  return !user.active && isSomething;
});

_.filter(users, function(user) {
  return !f(user);     // The function f could take multiple arguments, e.g. parseInt 
}); 
```


## When Not To Use It

If you do not want to enforce using `_.reject`, you should not use this rule.
