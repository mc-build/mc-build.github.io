Schedule blocks allow you to quickly create and call a new function within a schedule command.

```
schedule <delay> [replace|append] {
	<...>
}
```

??? info "Examples"
	!!! example "Schedule Function"

		```{title="example.mcb"}
		function a {
			schedule 1t {
				say Hello World!
			}
		}
		```

		```{title="example:a.mcfunction"}
		schedule function example:a 1t
		```

		```{title="example:zzz/b.mcfunction"}
		say Hello World!
		```

