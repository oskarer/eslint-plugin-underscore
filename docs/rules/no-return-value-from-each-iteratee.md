# No return value from ```_.each``` iteratee

Many implementations of "each" allow for an early exit from the loop by returning a magic value like "false". Underscore does not offer an early exit. Furthermore, it does not do anything with the each's iteratee's return value.

This rule disallows returning anything from each's iteratee.

## Rule Details

This rule takes no arguments.

The following patterns are considered warnings:

```js

_.each(items, function(item) { if(item.selected) { found = item; return false; }});

_.each(items, function(item) { function bogosity(x) {return x != 42;} return bogosity(item)});

```

The following patterns are not considered warnings:

```js

_.each(items, function(item) { if(item.bogus) { return; } myFunc(item);})

_.each(items, function(item) { function bogus(x) {return !x.unbogus;} if(bogus(item)) {return;} myfunc(item);})

_.each(items, function(item) { myFunc(item); })

```


## When Not To Use It

If you do not want to enforce not returning a value from the iteratee of ```_.each```, you should not use this rule.

