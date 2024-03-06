`IF / ELSE` is a compile-time expression that allows you to conditionally include or exclude code from the final output.

```
IF <js-condition> {
	<...>
}
```

??? info "Examples"
	!!! example "Basic"
		```{title="Code"}
		IF 1 == 1 {
			say "Hello, world!"
		}
		```
		```{title="Output"}
		say "Hello, world!"
		```


You can also use `ELSE IF` and `ELSE` to chain multiple conditions together.
```
IF <js-condition> {
	<...>
} ELSE IF <js-condition> {
	<...>
} ELSE {
	<...>
}
```

??? info "Examples"
	!!! example "With `ELSE IF`"
		```{title="Code"}
		IF 1 == 2 {
			say "Hello, world!"
		} ELSE IF 1 == 1 {
			say "Goodbye, world!"
		}
		```
		```{title="Output"}
		say "Goodbye, world!"
		```

	!!! example "With `ELSE`"
		```{title="Code"}
		IF 1 == 2 {
			say "Hello, world!"
		} ELSE {
			say "Goodbye, world!"
		}
		```
		```{title="Output"}
		say "Goodbye, world!"
		```

	!!! example "With `ELSE IF` and `ELSE`"
		```{title="Code"}
		IF 1 == 2 {
			say "Hello, world!"
		} ELSE IF 1 == 3 {
			say "Goodbye, world!"
		} ELSE {
			say "See you later, world!"
		}
		```
		```{title="Output"}
		say "See you later, world!"
		```

`IF / ELSE` can be used in any context. So you can conditionally include functions, directories, and JSON files in the compiled output.
```
IF (config.debug) {
	dir debug {
		function do_debug_stuff {
			say "Debugging!"
		}

		loot_table debug_loot {
			...
		}
	}
}
```