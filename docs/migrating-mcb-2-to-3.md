# Migrating from MC-Build 2 to 3
!!! warning
	MC-Build 3 has a number of breaking changes from MC-Build 2. I suggest reading through the documentation to get a feel for the new features and changes before you start updating your code.

## Updating MC-Build 3


If you already have MC-Build 2 installed, you can run this command to overwrite it, and install MC-Build 3 globally.
```
npm i -g mc-build@alpha
```


## CLI Differences

Running `mcb` will no longer start watch mode by default. You'll need to run `mcb watch` instead.

You can run `mcb` to see a list of available commands.

## Upgrading your `config.js` and `config.json` files

The `config.js` and `config.json` files have been updated to be more flexible and easier to use. You will need to update your `config.js` or `config.json` file to match the new format.

First, you will need to rename your `config.js` or `config.json` file to `mcb.config.js` or `mcb.config.json` respectively.

Then, you will need to update the fields in your `config.js` or `config.json` file to match the new format. The following tables show the old fields and their new replacements. Expand the table for your respective file type to see the changes.

??? info "Upgrading from `config.js` to `mcb.config.js`"

	| Old Field | New Field | Default | Description |
	| ------- | ------- | ------- | ----------- |
	| `mc.dev` | `N/A` | | The functionality of `mc.dev` can be replicated using a custom key, so it has been removed. |
	| `mc.header` | `header` | `"# Generated with MC-Build\n"` | The header to be added to the top of all generated files. |
	| `mc.internalScoreboard` | `internalScoreboardName` | `"mcb.internal"` | The name of the internal scoreboard used by MC-Build. |
	| `mc.rootNamespace` | `N/A` | | The `mc.rootNamespace` option has been removed. |
	| `global.preBuild` | `setup` | `null` | The `global.preBuild` and `global.postBuild` options have been replaced with the `setup` option. |
	| `global.postBuild` | `setup` | `null` | The `global.preBuild` and `global.postBuild` options have been replaced with the `setup` option. |
	| `mc-math.tempScoreboard` | `eqVarScoreboardName` | `"mcb.eq.var"` | The scoreboard to use when for temperary variables when using `eq` expressions. |
	| `mc-math.constScoreboard` | `eqConstScoreboardName` | `"mcb.eq.const"` | The scoreboard to use when for constant values when using `eq` expressions. |
	| `mc-extra.integrated` | `N/A` | | The `mc-extra.integrated` option has been removed, as the functionality of mc-extra has been integrated into the default language. |

	```javascript title="Old Default config.js"
	module.exports = {
		global: {
			preBuild: null,
			postBuild: null,
		},
		mc: {
			dev: true,
			header: "# Generated with MC-Build\n",
			internalScoreboard: "mcb.internal",
			rootNamespace: "mcb",
		},
		"mc-math": {
			tempScoreboard: "mcb.eq.var",
			constScoreboard: "mcb.eq.const"
		}
	}
	```

	```javascript title="New Default mcb.config.js"
	module.exports = {
		header: "# Generated with MC-Build\n",
		internalScoreboardName: "mcb.internal",
		eqVarScoreboardName: "mcb.eq.var",
		eqConstScoreboardName: "mcb.eq.const",
		setup: null,
		ioThreadCount: 1,
	}
	```

??? info "Upgrading from `config.json` to `mcb.config.json`"

	| Old Field | New Field | Default | Description |
	| ------- | ------- | ------- | ----------- |
	| `mc.dev` | `N/A` | | The functionality of `mc.dev` can be replicated using a custom key, so it has been removed. |
	| `mc.header` | `header` | `"# Generated with MC-Build\n"` | The header to be added to the top of all generated files. |
	| `mc.internalScoreboard` | `internalScoreboardName` | `"mcb.internal"` | The name of the internal scoreboard used by MC-Build. |
	| `mc.rootNamespace` | `N/A` | | The `mc.rootNamespace` option has been removed. |
	| `mc-math.tempScoreboard` | `eqVarScoreboardName` | `"mcb.eq.var"` | The scoreboard to use when for temperary variables when using `eq` expressions. |
	| `mc-math.constScoreboard` | `eqConstScoreboardName` | `"mcb.eq.const"` | The scoreboard to use when for constant values when using `eq` expressions. |
	| `mc-extra.integrated` | `N/A` | | The `mc-extra.integrated` option has been removed, as the functionality of mc-extra has been integrated into the default language. |

	```json title="Old Default config.json"
	{
		"mc": {
			"dev": true,
			"header": "# Generated with MC-Build\n",
			"internalScoreboard": "mcb.internal",
			"rootNamespace": "mcb"
		},
		"mc-math": {
			"tempScoreboard": "mcb.eq.var",
			"constScoreboard": "mcb.eq.const"
		}
	}
	```

	```json title="New Default mcb.config.json"
	{
		"header": "# Generated with MC-Build\n",
		"internalScoreboardName": "mcb.internal",
		"eqVarScoreboardName": "mcb.eq.var",
		"eqConstScoreboardName": "mcb.eq.const",
		"ioThreadCount": 1
	}
	```

## Upgrading your MC-Build code

Many features have been updated or removed in MC-Build 3. The following sections detail the changes you will need to make to your MC-Build code to upgrade to MC-Build 3.



### Compile `!LOOP`

`!LOOP` has been replaced with `REPEAT`, and has new arguments. See [Compile REPEAT](language-features/compile-repeat.md) for more information.

The following examples show how to replace `!LOOP` with `REPEAT` for a few common use cases.

??? info "Looping over a static range: `!LOOP` vs `REPEAT`"
	If you were using `!LOOP` to loop over a static number range, you can replace it with `REPEAT` like this:

	```mcfunction title="Original"
	!LOOP(1, 10, i) {
		say <% i %>
	}
	```

	```mcfunction title="Updated"
	REPEAT (1, 10) as i {
		say <% i %>
	}
	```

??? info "Looping over an array: `!LOOP` vs `REPEAT`"
	If you were using `!LOOP` to loop over an array, you can replace it with `REPEAT` like this:

	```mcfunction title="Original"
	!LOOP(array, i) {
		say <% i %>
	}
	```

	```mcfunction title="Updated"
	REPEAT (array) as i {
		say <% i %>
	}
	```


### Compile `!IF`

`!IF` has been replaced with `IF`, `ELSE IF`, and `ELSE`, and has a few minor syntax changes. See [Compile IF / ELSE](language-features/compile-if-else.md) for more information.

The following examples show how to replace `!IF` with `IF` for a few common use cases.

??? info "Simple `!IF` vs `IF`"
	If you were using `!IF` to check a simple condition, you can replace it with `IF` like this:

	```mcfunction title="Original"
	!IF(config.my_variable == 1) {
		<...>
	}
	```

	```mcfunction title="Updated"
	# Parentheses are no longer required, but are still allowed.
	IF config.my_variable == 1 run {
		<...>
	}
	```

??? info "Complex `!IF` vs `IF` / `ELSE IF` / `ELSE`"
	If you were using `!IF` to check a more complex condition, you can replace it with `IF`, `ELSE IF`, and `ELSE` like this:

	```mcfunction title="Original"
	!IF(a == 1 && b == 2) {
		<...>
	}
	!IF(!(a == 1) && b == 2) {
		<...>
	}
	!IF (!(a == 1) && !(b == 2)) {
		<...>
	}
	```

	```mcfunction title="Updated"
	# Parentheses are no longer required, but are still allowed.
	IF a == 1 && b == 2 {
		<...>
	} ELSE IF b == 2 {
		<...>
	} ELSE {
		<...>
	}
	```


### `execute if / else`

`execute(condition) {...}` has been updated to be an extension of execute blocks, see [execute if / else](language-features/execute-run.md) for more information.

The following example shows how to update `execute if / else` to the new syntax.

!!! example

	```mcfunction title="Old"
	execute (if score @s my_score matches 1) {
		<...>
	} else execute (if score @s my_score matches 2) {
		<...>
	} else {
		<...>
	}
	```

	```mcfunction title="Updated"
	execute if score @s my_score matches 1 run {
		<...>
	} else execute if score @s my_score matches 2 run {
		<...>
	} else run {
		<...>
	}
	```

### `while` and `until`

`while` and `until` and thier async variants have been removed from the language, and will instead be included as part of the standard library. See the standard library's [while / until](standard-library/while-until.md) page for more information.

!!! warning
	The standard library is not yet available, so you will need to implement your own `while` and `until` loops via [Templates](language-features/templates.md), or wait for the standard library to be released.


### `tick` and `load` functions

Tick and Load functions have been updated to be more flexible.

Instead of naming your functions `tick` and `load`, you can now name them whatever you want, and use the new `tick` and `load` keywords after the function name to specify whether the function should be run on the tick or load events.

See [Function Definitions](language-features/function-definitions.md) for more information.

??? info "Updating `tick` and `load` functions"

	```mcfunction title="Old"
	function tick {
		<...>
	}
	function load {
		<...>
	}
	```

	```mcfunction title="Updated"
	function my_ticking_function tick {
		<...>
	}
	function my_loading_function load {
		<...>
	}
	```

### Macros

Macros have been replaced with the new Template system.

Converting your macros into Templates is a bit more involved, and the ease of doing so will depend on the complexity of your macros. However, the new Template system is much more powerful and flexible than the old macro system, so it is *definitely* worth the effort to convert them.

See the [templates documentation](language-features/templates.md) for more information.

The following example shows how to convert a very simple macro into a Template.

??? info "Converting a simple macro into a Template"

	```mcfunction title="Old"
	macro say_this {
		say <% args[0].content %>
	}
	```

	```mcfunction title="Updated"
	template say_this {
		with message:raw {
			say <% message %>
		}
	}
	```


### Add-on Languages

`lang-mc-extra` and `lang-mc-math` have had their functionality integrated into MC-Build by default.
