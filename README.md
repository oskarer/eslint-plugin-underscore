ESLint-plugin-underscore
===================

Forked from [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash3)

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
    "underscore/prop-shorthand": 2,
    "underscore/matches-shorthand": [2, "always", 3],
    "underscore/preferred-alias": 2,
    "underscore/prefer-map": 2,
    "underscore/collection-return": 2,
    "underscore/prefer-reject": [2, 3],
    "underscore/prefer-filter": [2, 3],
    "underscore/prefer-compact": 2,

    // The bellow rules are not (yet) supported
    "underscore/prefer-chain": [2, 3],
    "underscore/no-single-chain": 2,
    "underscore/no-unnecessary-bind": 2,
    "underscore/unwrap": 2,
    "underscore/no-double-unwrap": 2,
    "underscore/prefer-wrapper-method": 2,
    "underscore/prefer-invoke": 2,
    "underscore/prefer-thru": 2,
    "underscore/prefer-lodash-chain": 2,
    "underscore/prefer-lodash-method": 2,
    "underscore/prefer-lodash-typecheck": 2,
    "underscore/prefer-matches": [2, 3],
    "underscore/prefer-times": 2,
    "underscore/prefer-noop": 2,
    "underscore/prefer-constant": 2,
    "underscore/chain-style": [2, "as-needed"]
  }
}
```

# List of supported rules

* [prop-shorthand](docs/rules/prop-shorthand.md): Prefer property shorthand syntax
* [matches-shorthand](docs/rules/matches-shorthand.md): Prefer matches shorthand syntax
* [preferred-alias](docs/rules/preferred-alias.md): Preferred aliases
* [prefer-map](docs/rules/prefer-map.md): Prefer `_.map` over `_.forEach` with a `push` inside.
* [collection-return](docs/rules/collection-return.md): Always return a value in iteratees of Underscore collection methods that aren't `forEach`.
* [prefer-reject](docs/rules/prefer-reject.md): Prefer `_.reject` over filter with `!(expression)` or `x.prop1 !== value`
* [prefer-filter](docs/rules/prefer-filter.md): Prefer `_.filter` over `_.forEach` with an `if` statement inside.
* [prefer-compact](docs/rules/prefer-compact.md): Prefer `_.compact` over `_.filter` for only truthy values.

# List of Lodash rules which are __not__ yet supported

* [prefer-chain](docs/rules/prefer-chain.md): Prefer chain over nested lodash calls
* [no-single-chain](docs/rules/no-single-chain.md): Prevent chaining syntax for single method, e.g. `_(x).map().value()`
* [no-unnecessary-bind](docs/rules/no-unnecessary-bind.md): Prefer passing `thisArg` over binding.
* [unwrap](docs/rules/unwrap.md): Prevent chaining without evaluation via `value()` or non-chainable methods like `max()`.,
* [no-double-unwrap](docs/rules/no-double-unwrap.md): Do not use `.value()` on chains that have already ended (e.g. with `max()` or `reduce()`)
* [prefer-wrapper-method](docs/rules/prefer-wrapper-method.md): Prefer using array and string methods in the chain and not the initial value, e.g. `_(str).split(' ')...`
* [prefer-invoke](docs/rules/prefer-invoke.md): Prefer using `_.invoke` over `_.map` with a method call inside.
* [prefer-thru](docs/rules/prefer-thru.md): Prefer using `_.prototype.thru` in the chain and not call functions in the initial value, e.g. `_(x).thru(f).map(g)...`
* [prefer-lodash-chain](docs/rules/prefer-lodash-chain.md): Prefer using Lodash chains (e.g. `_.map`) over native and mixed chains.
* [prefer-lodash-method](docs/rules/prefer-lodash-method.md): Prefer using Lodash collection methods (e.g. `_.map`) over native array methods.
* [prefer-lodash-typecheck](docs/rules/prefer-lodash-typecheck.md): Prefer using `_.is*` methods over `typeof` and `instanceof` checks when applicable.
* [prefer-matches](docs/rules/prefer-matches.md): Prefer `_.matches` over conditions like `a.foo === 1 && a.bar === 2 && a.baz === 3`.
* [prefer-times](docs/rules/prefer-times.md): Prefer `_.times` over `_.map` without using the iteratee's arguments.
* [prefer-noop](docs/rules/prefer-noop.md): Prefer `_.noop` over empty functions.
* [prefer-constant](docs/rules/prefer-constant.md): Prefer `_.constant` over functions returning literals.
* [chain-style](docs/rules/chain-style.md): Enforce a specific chain style: explicit, implicit, or explicit only when necessary.

# License

ESLint-plugin-underscore is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[npm-url]: https://npmjs.org/package/eslint-plugin-underscore
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-underscore.svg?style=flat-square
