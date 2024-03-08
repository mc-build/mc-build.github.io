# JavaScript Script Blocks

Script Blocks provide and easy, and inline way to use JavaScript to generate, or insert values into, your commands.

## Inline Scripts
Used to evaluate some JavaScript and inline the result into a command.

`<%...%>`

### Scope

Variables, and functions that are available for use in inline script blocks.

- `context`

	The current [Compiler Context]().

- [Global Scope](#global-scope)


??? info "Examples"
	!!! example "Using an Inline Script"
		```{title="Code"}
		say <% 1 + 1 %> <%10*10%>

		REPEAT (1, 10) as i {
			say <% i %>
		}
		```

		```{title="Output"}
		say 2 100
		say 1
		say 2
		say 3
		say 4
		say 5
		say 6
		say 7
		say 8
		say 9
		say 10
		```

## Multi-line Scripts

Used to evaluate more complex JavaScript. Instead of injecting the return result of the script into a command, Multi-line Scripts include a few functions that can be used to generate commands, and more.

```
<%%
	...
%%>
```

### Scope

Variables, and functions that are available for use in multi-line script blocks.

- `emit(str: String)`

	Emits a string into the output.

- `emit.mcb(str: String)`

	Emits a string into the output after running it through the MC-Build compiler.

- `emit.block(commands: Array[String])`

	Takes a list of commands, generates a function, and emits a call to that function.

- `context`

	The current [Compiler Context]().

- `embed(block: BoundBlock)`

	Takes a `BoundBlock` instance and embeds a reference to it.

- `require(path: String)`

	Requires a file relative to the current file. Same as the `require` function in Node.js.

- [Global Scope](#global-scope)


??? info "Examples"
	!!! example "Using a Multi-line Script"

		```{title="Code"}
		function say_hello {
			<%%
				emit("say Hello World")
				for (let i = 0; i < 3; i++) {
					emit(`say ${i}`)
				}
			%%>
		}
		```

		```{title="say_hello.mcfunction"}
		say Hello World
		say 0
		say 1
		say 2
		```

	!!! example "Generating Functions with Multi-line Scripts"

		```{title="Code"}
		<%%
			for (let i = 0; i < 3; i++) {
				emit.mcb(`function say_${i} {
					say ${i}
				}`)
			}
		%%>
		```

		```{title="say_0.mcfunction"}
		say 0
		```

		```{title="say_1.mcfunction"}
		say 1
		```

		```{title="say_2.mcfunction"}
		say 2
		```


## Value Injection

`embed` takes a `BoundBlock` instance provided by a template `block` argument and embeds a reference to it. returns a string of commands produced by evaluating the block.

## Global Scope

Variables, and functions that are available for use in all script blocks.

- `REPEAT`

	the method that produces an iterator used for evaluating `REPEAT` expressions.

- `store`

	An object that can be used to store values that persist between script blocks.

- `global`

	An object that can be used to store values that persist between script blocks.