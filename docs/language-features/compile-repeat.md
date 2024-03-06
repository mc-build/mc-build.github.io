`REPEAT` is a compile-time loop that can be used to generate code. It is useful for generating repetitive code, like scoreboard trees, and for generating code based on arrays and iterators.

`REPEAT` has several different forms, depending on the type of loop you want to create.

## Integer Range

Repeats the code from `min` to `max` inclusive. Incrementing by 1 or -1 based on the provided range.

If `as` is provided, the variable will be assigned to the current value of the loop.

```
REPEAT (min:int, max:int) [as <variable name>] {
	<...>
}
```

??? info "Examples"
	!!! example "Basic"
		```{title="Code"}
		REPEAT (1, 3) {
			say Hello, world!
		}
		```
		```{title="Output"}
		say Hello, world!
		say Hello, world!
		say Hello, world!
		```

	!!! example "With `as`"
		```{title="Code"}
		REPEAT (1, 3) as i {
			say Loop <%i%>
		}
		```
		```{title="Output"}
		say Loop 1
		say Loop 2
		say Loop 3
		```

## Float Range

Repeats the code from `min` to `max` inclusive. Incrementing by `increment`.

If `as` is provided, the variable will be assigned to the current value of the loop.

```
REPEAT (min:float, max:float, increment:float) [as <variable name>] {
	<...>
}
```

??? info "Examples"
	!!! example "Basic"
		```{title="Code"}
		REPEAT (0, 1.5, 0.5) {
			say Hello, world!
		}
		```
		```{title="Output"}
		say Hello, world!
		say Hello, world!
		say Hello, world!
		say Hello, world!
		```

	!!! example "With `as`"
		```{title="Code"}
		REPEAT (0, 1.5, 0.5) as i {
			say Loop <%i%>
		}
		```
		```{title="Output"}
		say Loop 0
		say Loop 0.5
		say Loop 1.0
		say Loop 1.5
		```

## JS Array
Repeats the code for each value in the provided `array`.

If `as` is provided, the variable will be assigned to the current value of the loop.

```
REPEAT (array:Array) [as <variable name>] {
	<...>
}
```

??? info "Examples"
	!!! example "Basic"
		```{title="Code"}
		REPEAT ([1,2,7,9]) {
			say Hello, world!
		}
		```
		```{title="Output"}
		say Hello, world!
		say Hello, world!
		say Hello, world!
		say Hello, world!
		```

	!!! example "With `as`"
		```{title="Code"}
		REPEAT ([1,2,7,9]) as i {
			say Looped <%i%>
		}
		```
		```{title="Output"}
		say Looped 1
		say Looped 2
		say Looped 7
		say Looped 9
		```

## JS Iterator
Repeats the code for each value in the provided `iterator`.

If `as` is provided, the variable will be assigned to the current value of the loop.

```
REPEAT (iterator:() => Iterator) [as <variable name>] {
	<...>
}
```

??? info "Examples"
	!!! example "Basic"
		```{title="Code"}
		REPEAT (store.iterator) {
			say Hello, world!
		}
		```
		```{title="Output"}
		say Hello, world!
		say Hello, world!
		say Hello, world!
		say Hello, world!
		```

	!!! example "With `as`"
		```{title="Code"}
		REPEAT (function*() { yield 1; yield 2; yield 7; yield 9; }) as i {
			say Looped <%i%>
		}
		```
		```{title="Output"}
		say Looped 1
		say Looped 2
		say Looped 7
		say Looped 9
		```

