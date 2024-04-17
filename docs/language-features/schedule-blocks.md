Schedule blocks allow you to quickly create and call a new function within a schedule command.

```
schedule function {
	<...>
} 1t [replace|append]
```

??? info "Examples"
	!!! example "Schedule Function"

		```{title="example.mcb"}
		function a {
			schedule function {
				say Hello World!
			} 1t
		}
		```

		```{title="example:a.mcfunction"}
		schedule function example:a 1t
		```

		```{title="example:zzz/b.mcfunction"}
		say Hello World!
		```

