ESLint-plugin-underscore
===================

Forked from [eslint-plugin-lodash3](https://github.com/wix/eslint-plugin-lodash3)

Linting rules for [Underscore](http://underscorejs.org/)

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    npm install eslint

If you installed `ESLint` globally, you have to install the Underscore plugin
globally too. Otherwise, install it locally.

    $ npm install eslint-plugin-underscore

# Configuration

Add `plugins` section and specify ESLint-plugin-underscore as a plugin.

```json
{
  "plugins": ["underscore"]
}
```


Finally, enable all of the rules that you would like to use.

```javascript
{
  "rules": {
    "underscore/collection-return": 2,
    "underscore/matches-shorthand": [2, "always"],
    "underscore/no-unnecessary-bind": 2,
    "underscore/prefer-compact": 2,
    "underscore/prefer-constant": 2,
    "underscore/prefer-filter": [2, 3],
    "underscore/prefer-invoke": 2,
    "underscore/prefer-map": 2,
    "underscore/prefer-matches": [2, 3],
    "underscore/prefer-noop": 2,
    "underscore/prefer-reject": [2, 3],
    "underscore/prefer-times": 2,
    "underscore/prefer-underscore-method": 2,
    "underscore/prefer-underscore-typecheck": 2,
    "underscore/preferred-alias": 2,
    "underscore/prop-shorthand": 2,

    // The below rules are not (yet) supported
    "underscore/prefer-chain": [2, 3],
    "underscore/no-single-chain": 2,
    "underscore/unwrap": 2,
    "underscore/no-double-unwrap": 2,
    "underscore/prefer-wrapper-method": 2,
    "underscore/prefer-lodash-chain": 2,
    "underscore/chain-style": [2, "as-needed"]
  }
}
```

# List of supported rules

* [collection-return](docs/rules/collection-return.md): Always return a value in iteratees of Underscore collection methods that aren't `forEach`.
* [matches-shorthand](docs/rules/matches-shorthand.md): Prefer matches shorthand syntax
* [no-unnecessary-bind](docs/rules/no-unnecessary-bind.md): Prefer passing `thisArg` over binding.
* [prefer-compact](docs/rules/prefer-compact.md): Prefer `_.compact` over `_.filter` for only truthy values.
* [prefer-constant](docs/rules/prefer-constant.md): Prefer `_.constant` over functions returning literals.
* [prefer-filter](docs/rules/prefer-filter.md): Prefer `_.filter` over `_.forEach` with an `if` statement inside.
* [prefer-invoke](docs/rules/prefer-invoke.md): Prefer using `_.invoke` over `_.map` with a method call inside.
* [prefer-map](docs/rules/prefer-map.md): Prefer `_.map` over `_.forEach` with a `push` inside.
* [prefer-matches](docs/rules/prefer-matches.md): Prefer `_.matches` over conditions like `a.foo === 1 && a.bar === 2 && a.baz === 3`.
* [prefer-noop](docs/rules/prefer-noop.md): Prefer `_.noop` over empty functions.
* [prefer-reject](docs/rules/prefer-reject.md): Prefer `_.reject` over filter with `!(expression)` or `x.prop1 !== value`
* [prefer-times](docs/rules/prefer-times.md): Prefer `_.times` over `_.map` without using the iteratee's arguments.
* [prefer-underscore-method](docs/rules/prefer-underscore-method.md): Prefer using Underscore collection methods (e.g. `_.map`) over native array methods.
* [prefer-underscore-typecheck](docs/rules/prefer-underscore-typecheck.md): Prefer using `_.is*` methods over `typeof` and `instanceof` checks when applicable.
* [preferred-alias](docs/rules/preferred-alias.md): Preferred aliases
* [prop-shorthand](docs/rules/prop-shorthand.md): Prefer property shorthand syntax

# List of Lodash rules which are __not__ yet supported

* [prefer-chain](docs/rules/prefer-chain.md): Prefer chain over nested lodash calls
* [no-single-chain](docs/rules/no-single-chain.md): Prevent chaining syntax for single method, e.g. `_(x).map().value()`
* [unwrap](docs/rules/unwrap.md): Prevent chaining without evaluation via `value()` or non-chainable methods like `max()`.,
* [no-double-unwrap](docs/rules/no-double-unwrap.md): Do not use `.value()` on chains that have already ended (e.g. with `max()` or `reduce()`)
* [prefer-wrapper-method](docs/rules/prefer-wrapper-method.md): Prefer using array and string methods in the chain and not the initial value, e.g. `_(str).split(' ')...`
* [prefer-lodash-chain](docs/rules/prefer-lodash-chain.md): Prefer using Lodash chains (e.g. `_.map`) over native and mixed chains.
* [chain-style](docs/rules/chain-style.md): Enforce a specific chain style: explicit, implicit, or explicit only when necessary.

# License

ESLint-plugin-underscore is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[npm-url]: https://npmjs.org/package/eslint-plugin-underscore
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-underscore.svg?style=flat-square
